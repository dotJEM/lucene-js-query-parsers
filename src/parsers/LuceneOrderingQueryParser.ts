import {OrderingParser} from '../grammar/ordering/OrderingParser';
import {OrderingLexer} from '../grammar/ordering/OrderingLexer';
import {InputStream, CommonTokenStream} from 'antlr4';
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
    MatchAllQuery
} from "../ast/BaseQuery";

export class LuceneOrderingQueryParser {
    public parse(query: string, processSyntaxTree: ((tree: any) => any) = (tree => tree)) {
        const input = new InputStream(query);
        const lexer = new OrderingLexer(input);
        const tokens = new CommonTokenStream(lexer);
        const parser = new OrderingParser(tokens);
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



    visitTerminal(ctx): BaseQuery {
        const symbol = this.parser.symbolicNames[ctx.symbol.type];
        if(this.$$ignoredSymbols[symbol])
            return null;

        return new Terminal(ctx.getText(), symbol);
    }

    query(ctx): BaseQuery {
        const clause = ctx.clause.accept(this);
        const order = ctx.order && ctx.order.accept(this);
        return new Query(clause, order);
    }

    defaultClause(ctx): BaseQuery {
        const children = this.mapChildren(ctx);
        if (children.length < 2)
            return children[0];

        //note: And as default, at least for now.
        return new AndQuery(children);
    }

    orClause(ctx): BaseQuery {
        const children = this.mapChildren(ctx);
        if (children.length < 2)
            return children[0];

        //note: And as default, at least for now.
        return new OrQuery(children);
    }

    andClause(ctx): BaseQuery {
        const children = this.mapChildren(ctx);
        if (children.length < 2)
            return children[0];

        //note: And as default, at least for now.
        return new AndQuery(children);
    }

    notClause(ctx): BaseQuery {
        const children = this.mapChildren(ctx);
        if (children.length < 2)
            return children[0];

        for (let i = 1; i < children.length; i++)
            children[i] = new NotQuery(children[i]);

        return new AndQuery(children);
    }

    basicClause(ctx): BaseQuery {
        const children = this.mapChildren(ctx);
        if (children.length < 2)
            return children[0];

        return new AndQuery(children);
    }

    matchAllClause(ctx): BaseQuery{
        return new MatchAllQuery();
    }

    orderingClause(ctx): BaseQuery {
        const children = this
            .mapChildren(ctx)
            .filter(child => child.$type === 'OrderField');
        return new QueryOrder(children);
    }

    orderingField(ctx): BaseQuery {
        const field = ctx.fieldName.accept(this);
        const direction = ctx.direction && ctx.direction.getText();
        return new OrderByField(field, direction);
    }

    atom(ctx): BaseQuery {
        return this.mapChildren(ctx)[0];
    }

    rangeClause(ctx) {
        const field = ctx.fieldName.accept(this);
        const from = ctx.from.accept(this);
        const to = ctx.to.accept(this);
        return new RangeQuery(field, from, to, 'LSBR', 'RSBR');
    }

    field(ctx) {
        const field = ctx.fieldName.accept(this);
        const operator = ctx.fieldOperator.accept(this);
        const value = ctx.fieldValue.accept(this);

        return new FieldQuery(field, value, operator);
    }

    simple_value(ctx) {
        console.log(ctx.children);
        const rule = <Terminal>this.mapChildren(ctx)[0];
        const text = ctx.getText();
        return new QueryValue(text, rule.symbol);
    }

    value(ctx) {
        const rule = <Terminal>this.mapChildren(ctx)[0];
        const text = ctx.getText();
        return new QueryValue(text, rule.symbol);
    }

    name(ctx) {
        return ctx.getText();
    }

    operator(ctx) {
        return ctx.getText();
    }

    orOperator(){}
    andOperator(){}
    notOperator(){}

    mapChildren(ctx): BaseQuery[] | undefined {
        if (!Array.isArray(ctx.children))
            return;

        return ctx
            .children
            .map(c => c.accept(this))
            .filter(c => c !== null && typeof c !== 'undefined');
    }
}
