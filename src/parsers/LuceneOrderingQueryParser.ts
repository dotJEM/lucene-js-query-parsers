import OrderingParser from '../grammar/ordering/OrderingParser.js';
import OrderingLexer from '../grammar/ordering/OrderingLexer.js';
import {
    BaseQuery,
    NotQuery,
    AndQuery,
    OrQuery,
    FieldQuery,
    Terminal,
    UnknownQuery,
    Query,
    OrderByField,
    QueryOrder,
    QueryValue,
    RangeQuery,
    AnyQuery, AndQueryValue, OrQueryValue, NotQueryValue
} from "../ast/BaseQuery";
import {CommonTokenStream, InputStream, Lexer, ParseTreeVisitor} from "antlr4";
import {Tree} from "antlr4/src/antlr4/tree/Tree";
import OrderingVisitor from "../grammar/ordering/OrderingVisitor.js";

export class LuceneOrderingQueryParser {
    public parse(query: string, processSyntaxTree: ((tree: Tree) => any) = (tree => tree)) {
        const input: InputStream = new InputStream(query);
        const lexer: OrderingLexer = new OrderingLexer(input);
        const tokens: CommonTokenStream = new CommonTokenStream(lexer as Lexer);
        const parser: OrderingParser = new OrderingParser(tokens);
        (parser as any).buildParseTrees = true;

        const tree = processSyntaxTree(parser.query());
        return tree.accept(new Translator(parser));
    }
}

class Translator extends OrderingVisitor {
    constructor(private parser) {
        super();
    }

    visitChildren(ctx): BaseQuery[] {
        if (!Array.isArray(ctx.children))
            return;

        return ctx
            .children
            .reduce((list, next) => {
                const result = next.accept(this);
                if(result) list.push(result);
                return list;
            }, []);
    }

    visitQuery(ctx): BaseQuery {
        const clause = ctx.clause().accept(this);
        const order = ctx.order()?.accept(this);
        return new Query(clause, order);
    }

    visitClause(ctx): BaseQuery {
        const children: BaseQuery[] = this.visitChildren(ctx);
        if (children.length < 2)
            return children[0];
        return new AndQuery(children);
    }

    visitOr(ctx): BaseQuery {
        const children: BaseQuery[] = this.visitChildren(ctx);
        if (children.length < 2)
            return children[0];
        return new OrQuery(children);
    }

    visitAnd(ctx): BaseQuery {
        const children: BaseQuery[] = this.visitChildren(ctx);
        if (children.length < 2)
            return children[0];
        return new AndQuery(children);
    }

    visitNot(ctx): BaseQuery {
        const children: BaseQuery[] = this.visitChildren(ctx);
        if (children.length < 2)
            return children[0];

        for (let i: number = 1; i < children.length; i++)
            children[i] = new NotQuery(children[i]);

        return new AndQuery(children);
    }

    visitBasic(ctx): BaseQuery {
        const children: BaseQuery[] = this.visitChildren(ctx);
        if (children.length < 2)
            return children[0];
        return new AndQuery(children);
    }

    visitAtom(ctx): BaseQuery {
        return this.visitChildren(ctx)[0];
    }

    visitField(ctx): BaseQuery {
        const field = ctx.name.text;
        const operator = ctx.operator.text;
        const value = ctx.value().accept(this);
        return new FieldQuery(field, value, operator);
    }

    visitAny(ctx): BaseQuery {
        return new AnyQuery();
    }

    visitRange(ctx): BaseQuery {
        const field = ctx.name.text;
        const from = ctx.from.accept(this);
        const to = ctx.to.accept(this);
        return new RangeQuery(field, from, to, 'LSBR', 'RSBR');
    }

    visitRangeValue(ctx): BaseQuery {
        const rule: Terminal = <Terminal>this.visitChildren(ctx)[0];
        const text = ctx.getText();
        return new QueryValue(text, rule.symbol);
    }

    visitValue(ctx): BaseQuery {
        const rule: Terminal = <Terminal>this.visitChildren(ctx)[0];
        const text = ctx.getText();
        return new QueryValue(text, rule.symbol);
    }

    visitMv(ctx): BaseQuery {
        return ctx.mvOr().accept(this);
    }

    visitMvOr(ctx): BaseQuery {
        const children: QueryValue[] = <QueryValue[]>this.visitChildren(ctx);
        if (children.length < 2)
            return children[0];

        //note: And as default, at least for now.
        return new OrQueryValue(children, "");
    }

    visitMvAnd(ctx): BaseQuery {
        const children: QueryValue[] = <QueryValue[]>this.visitChildren(ctx);
        if (children.length < 2)
            return children[0];

        //note: And as default, at least for now.
        return new AndQueryValue(children, "");
    }

    visitMvNot(ctx): BaseQuery {
        const children: QueryValue[] = <QueryValue[]>this.visitChildren(ctx);
        if (children.length < 2)
            return children[0];

        for (let i: number = 1; i < children.length; i++)
            children[i] = new NotQueryValue(children[i], "");

        return new AndQuery(children);
    }

    visitMvBasic(ctx): BaseQuery {
        const rule: Terminal = <Terminal>this.visitChildren(ctx)[0];
        const text = ctx.getText();
        return new QueryValue(text, rule.symbol);
    }

    visitOrder(ctx): BaseQuery {
        const children: OrderByField[] = <OrderByField[]>this
            .visitChildren(ctx)
            .filter(child => child.$type === 'OrderByField');
        return new QueryOrder(children);
    }

    visitOrderField(ctx): BaseQuery {
        const field = ctx.FIELD().getText();
        const direction = ctx.direction()?.getText();
        return new OrderByField(field, direction);
    }

    visitDirection(ctx): BaseQuery {
        return null;
    }

    visitNotOperator(ctx): BaseQuery {
        return null;
    }

    visitAndOperator(ctx): BaseQuery {
        return null;
    }

    visitOrOperator(ctx): BaseQuery {
        return null;
    }

    visitSep(ctx): BaseQuery {
        return null;
    }
    private $$ignoredSymbols: any = {
        SPACE: true,
        LPAREN: true,
        RPAREN: true
    };
    visitTerminal(ctx): Terminal {
        const symbol = this.parser.symbolicNames[ctx.symbol.type];
        if(this.$$ignoredSymbols[symbol])
            return null;
        return new Terminal(ctx.getText(), symbol);
    }
}