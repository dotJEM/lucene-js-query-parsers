import { StandardParser } from './grammar/standard/StandardParser';
import { StandardLexer } from './grammar/standard/StandardLexer';
import { InputStream, CommonTokenStream } from 'antlr4';

export class LuceneStandardQueryParser {
    public parse(query:string) {
        const input = new InputStream(query);
        const lexer = new StandardLexer(input);
        const tokens = new CommonTokenStream(lexer);
        const parser = new StandardParser(tokens);
        (parser as any).buildParseTrees = true;
        
        const tree = parser.mainQ();
        const ast = (tree as any).accept( new LuceneStandardQueryVisitor(parser) );



        return [tree, ast];
    }
}

export class LuceneStandardQueryVisitor {
    //private mappers: any = {};

    constructor(private parser){

        //this.mappers.clauseOr = ctx => this.mapClauseOr(ctx);
        //this.mappers.clauseAnd = ctx => this.mapClauseAnd(ctx);
        //this.mappers.clauseNot = ctx => new OrQuery(ctx.getText(), this.mapChildren(ctx));

    }

    public visitChildren(ctx: any): Query {

        const type = ctx.parser.ruleNames[ctx.ruleIndex];
        if(typeof this[type] === 'function'){
            return this[type](ctx);
        }

        return new UnknownQuery(
            ctx,
            ctx.parser.ruleNames[ctx.ruleIndex],
            ctx.getText(),
            this.mapChildren(ctx) );
    }

    public visitTerminal(ctx): Query {
        const symbol = this.parser.symbolicNames[ctx.symbol.type];
        switch (symbol) {
            case "LPAREN":
            case "RPAREN":
            case "LBRACK":
            case "RBRACK":
            case "COLON":
            case "PLUS":
            case "MINUS":
            case "STAR":
            case "QMARK":
            case "LCURLY":
            case "RCURLY":
            case "CARAT":
            case "TILDE":
            case "DQUOTE":
            case "SQUOTE":
            case "TO":
            case "AND":
            case "OR":
            case "NOT":
            case "WS":
                return null;
            case "NUMBER":
            case "DATE_TOKEN":
            case "TERM_NORMAL":
            case "TERM_TRUNCATED":
            case "PHRASE":
            case "PHRASE_ANYTHING":
            case "OPERATOR":
            case "ATOM":
            case "MODIFIER":
            case "TMODIFIER":
            case "CLAUSE":
            case "FIELD":
            case "FUZZY":
            case "BOOST":
            case "QNORMAL":
            case "QPHRASE":
            case "QPHRASETRUNC":
            case "QTRUNCATED":
            case "QRANGEIN":
            case "QRANGEEX":
            case "QANYTHING":
            case "QDATE":
        }

        return new Terminal(ctx, ctx.getText(), symbol);
    }

    mapChildren(ctx): Query[] | undefined {
        if(!Array.isArray(ctx.children))
            return;

        return ctx
            .children
            .map( c => c.accept( this ) )
            .filter(c => c !== null && typeof c !== 'undefined');
    }

    mainQ(ctx):Query {
        const children = this.mapChildren(ctx);
        return children[0];
    }

    clauseOr(ctx: any):Query {
        const children = this.mapChildren(ctx);
        if(children.length < 2)
            return children[0];

        return new OrQuery(ctx.getText(), children);
    }

    clauseAnd(ctx: any):Query {
        const children = this.mapChildren(ctx);
        if(children.length < 2)
            return children[0];

        return new AndQuery(ctx.getText(), children);
    }

    clauseDefault(ctx: any):Query {
        const children = this.mapChildren(ctx);
        if(children.length < 2)
            return children[0];

        return new AndQuery(ctx.getText(), children);
    }

    clauseNot(ctx: any):Query {
        const children = this.mapChildren(ctx);
        if(children.length < 2)
            return children[0];

        for (let i = 1; i < children.length; i++)
            children[i] = new NotQuery(children[i].value, children[i]);

        return new AndQuery(ctx.getText(), children);
    }

    atom(ctx: any):Query {
        // atom
        //   : modifier? field multi_value term_modifier?
        //   | modifier? field? value term_modifier?
        //   ;
        const children = this.mapChildren(ctx);


        return new FieldQuery(ctx.getText(),
            children,
            null,

        );
    }

    field(ctx): Query {
        return this.mapChildren(ctx).filter(q => (q as any).type === 'field_name')[0];
    }

    value(ctx):Query {
        return new UnknownQuery(
            ctx,
            ctx.parser.ruleNames[ctx.ruleIndex],
            ctx.getText());
    }

    or_() {}
    and_() {}
    not_() {}
    sep() {}
}

class Query {
    constructor(public value) {
    }
}

class UnknownQuery extends Query {
    public $type = 'UnknownQuery';

    constructor(context, public type, value, public children?) {
        super(value)
    }
}

class Terminal extends Query {
    public $type = 'Terminal';

    constructor(context, value, public symbol) {
        super(value);
    }
}

class AndQuery extends Query {
    public $type = 'AndQuery';

    constructor(value, public children) {
        super(value)
    }
}

class OrQuery extends Query {
    public $type = 'OrQuery';

    constructor(value, public children) {
        super(value)
    }
}

class NotQuery extends Query {
    public $type = 'NotQuery';

    constructor(value, public child) {
        super(value)
    }
}

class FieldQuery extends Query {
    public $type = 'FieldQuery';

    constructor(value, public fieldName, public fieldValue) {
        super(value)
    }
}

