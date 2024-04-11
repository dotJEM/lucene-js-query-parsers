import StandardParser from '../grammar/standard/StandardParser.js';
import StandardLexer from '../grammar/standard/StandardLexer.js';
import {CommonTokenStream, InputStream, Lexer} from "antlr4";
import {
    BaseQuery,
    NotQuery,
    AndQuery,
    OrQuery,
    FieldQuery,
    Terminal,
    Query,
    AnyQuery,
    RangeQuery,
    Value,
    OrValue,
    AndValue,
    NotValue, TextValue
} from "../ast/BaseQuery";
import {Tree} from "antlr4/src/antlr4/tree/Tree";
import StandardVisitor from "../grammar/standard/StandardVisitor";

export class LuceneStandardQueryParser {
    public parse(query: string, processSyntaxTree: ((tree: Tree) => any) = (tree => tree)) {
        const input: InputStream = new InputStream(query);
        const lexer: StandardLexer = new StandardLexer(input);
        const tokens: CommonTokenStream = new CommonTokenStream(lexer as Lexer);
        const parser: StandardParser = new StandardParser(tokens);
        (parser as any).buildParseTrees = true;

        const tree = processSyntaxTree(parser.query());
        return tree.accept(new Translator(parser));
    }
}

class Translator extends StandardVisitor {
    constructor(private parser) {
        super();
    }

    visitChildren(ctx): BaseQuery[] {
        if (!Array.isArray(ctx.children))
            return [];

        return ctx
            .children
            .reduce((list, next) => {
                const result = next.accept(this);
                if(result) list.push(result);
                return list;
            }, []);
    }

    firstYieldingChild(ctx): BaseQuery|null {
        if (!Array.isArray(ctx.children))
            return null;

        for(let child of ctx.children){
            const result = child.accept(this);
            if(result) return result;
        }
        return null;
    }

    visitQuery(ctx): BaseQuery {
        const clause = ctx.clause().accept(this);
        return new Query(clause, null);
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
        return this.firstYieldingChild(ctx);
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
        const inclusiveFrom = this.parser.symbolicNames[ctx.ft.type] === "LCBR";
        const inclusiveTo = this.parser.symbolicNames[ctx.tt.type] === "RCBR";
        return new RangeQuery(field, from, to, inclusiveFrom, inclusiveTo);
    }

    visitRangeValue(ctx): BaseQuery {
        const text = ctx.getText();
        return new TextValue(text);
    }

    visitValue(ctx): BaseQuery {
        const value = this.firstYieldingChild(ctx);
        if(value instanceof Terminal){
            const text = ctx.getText();
            return new TextValue(text);
        } else {
            return value;
        }
    }

    visitMv(ctx): BaseQuery {
        return ctx.mvOr().accept(this);
    }

    visitMvOr(ctx): BaseQuery {
        const children: Value[] = <Value[]>this.visitChildren(ctx);
        if (children.length < 2)
            return children[0];

        //note: And as default, at least for now.
        return new OrValue(children);
    }

    visitMvAnd(ctx): BaseQuery {
        const children: Value[] = <Value[]>this.visitChildren(ctx);
        if (children.length < 2)
            return children[0];

        //note: And as default, at least for now.
        return new AndValue(children);
    }

    visitMvNot(ctx): BaseQuery {
        const children: Value[] = <Value[]>this.visitChildren(ctx);
        if (children.length < 2)
            return children[0];

        for (let i: number = 1; i < children.length; i++)
            children[i] = new NotValue(children[i]);

        return new AndQuery(children);
    }

    visitMvBasic(ctx): BaseQuery {
        return this.firstYieldingChild(ctx);
    }

    visitMvValue(ctx): BaseQuery {
        const text = ctx.getText();
        return new TextValue(text);
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