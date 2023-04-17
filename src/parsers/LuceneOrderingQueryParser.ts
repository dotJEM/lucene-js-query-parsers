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
    AnyQuery
} from "../ast/BaseQuery";
import {CommonTokenStream, InputStream, Lexer} from "antlr4";
import {Tree} from "antlr4/src/antlr4/tree/Tree";

export class LuceneOrderingQueryParser {
    public parse(query: string, processSyntaxTree: ((tree: Tree) => any) = (tree => tree)) {
        const input: InputStream = new InputStream(query);
        const lexer: OrderingLexer = new OrderingLexer(input);
        const tokens: CommonTokenStream = new CommonTokenStream(lexer as Lexer);
        const parser: OrderingParser = new OrderingParser(tokens);
        (parser as any).buildParseTrees = true;

        const tree = processSyntaxTree(parser.query());
        return tree.accept(new LuceneOrderingQueryVisitor(parser));
    }
}

export class LuceneOrderingQueryVisitor {
    private $$ignoredSymbols: any = {
        WS: true,
        LPA: true,
        RPA: true
    };

    constructor(private parser) {}

    visitChildren(ctx: any): BaseQuery {
        const type = ctx.parser.ruleNames[ctx.ruleIndex];
        if (typeof this[type] === 'function') {
            return this[type](ctx);
        }
        return this.$$default(ctx);
    }

    $$default(ctx) : BaseQuery{
        return new UnknownQuery(
            ctx,
            ctx.parser.ruleNames[ctx.ruleIndex],
            ctx.getText(),
            this.mapChildren(ctx));
    }

    visitTerminal(ctx): Terminal {
        const symbol = this.parser.symbolicNames[ctx.symbol.type];
        if(this.$$ignoredSymbols[symbol])
            return null;

        return new Terminal(ctx.getText(), symbol);
    }

    query(ctx): Query {
        const clause = ctx.clause.accept(this);
        const order = ctx.order && ctx.order.accept(this);
        return new Query(clause, order);
    }

    defaultClause(ctx): BaseQuery {
        const children: BaseQuery[] = this.mapChildren(ctx);
        if (children.length < 2)
            return children[0];

        //note: And as default, at least for now.
        return new AndQuery(children);
    }

    orClause(ctx): BaseQuery {
        const children: BaseQuery[] = this.mapChildren(ctx);
        if (children.length < 2)
            return children[0];

        //note: And as default, at least for now.
        return new OrQuery(children);
    }

    andClause(ctx): BaseQuery {
        const children: BaseQuery[] = this.mapChildren(ctx);
        if (children.length < 2)
            return children[0];

        //note: And as default, at least for now.
        return new AndQuery(children);
    }

    notClause(ctx): BaseQuery {
        const children: BaseQuery[] = this.mapChildren(ctx);
        if (children.length < 2)
            return children[0];

        for (let i: number = 1; i < children.length; i++)
            children[i] = new NotQuery(children[i]);

        return new AndQuery(children);
    }

    basicClause(ctx): BaseQuery {
        const children: BaseQuery[] = this.mapChildren(ctx);
        if (children.length < 2)
            return children[0];

        return new AndQuery(children);
    }

    anyClause(): AnyQuery {
        return new AnyQuery();
    }

    orderingClause(ctx): QueryOrder {
        const children: BaseQuery[] = this
            .mapChildren(ctx)
            .filter(child => child.$type === 'OrderField');
        return new QueryOrder(children);
    }

    orderingField(ctx): OrderByField {
        const field = ctx.fieldName.accept(this);
        const direction = ctx.direction && ctx.direction.getText();
        return new OrderByField(field, direction);
    }

    atom(ctx): BaseQuery {
        return this.mapChildren(ctx)[0];
    }

    rangeClause(ctx): RangeQuery {
        const field = ctx.fieldName.accept(this);
        const from = ctx.from.accept(this);
        const to = ctx.to.accept(this);
        return new RangeQuery(field, from, to, 'LSBR', 'RSBR');
    }

    field(ctx): FieldQuery {
        const field = ctx.fieldName.accept(this);
        const operator = ctx.fieldOperator.accept(this);
        const value = ctx.fieldValue.accept(this);

        return new FieldQuery(field, value, operator);
    }

    simple_value(ctx): QueryValue {
        console.log(ctx.children);
        const rule: Terminal = <Terminal>this.mapChildren(ctx)[0];
        const text = ctx.getText();
        return new QueryValue(text, rule.symbol);
    }

    value(ctx): QueryValue {
        const rule: Terminal = <Terminal>this.mapChildren(ctx)[0];
        const text = ctx.getText();
        return new QueryValue(text, rule.symbol);
    }

    name(ctx) {
        return ctx.getText();
    }

    operator(ctx) {
        return ctx.getText();
    }

    orOperator(): void{}
    andOperator(): void{}
    notOperator(): void{}

    mapChildren(ctx): BaseQuery[] | undefined {
        if (!Array.isArray(ctx.children))
            return;

        return ctx
            .children
            .map(c => c.accept(this))
            .filter(c => c !== null && typeof c !== 'undefined');
    }
}
