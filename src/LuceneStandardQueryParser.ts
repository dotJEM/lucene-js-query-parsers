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

        return new OrQuery(children);
    }

    clauseAnd(ctx: any):Query {
        const children = this.mapChildren(ctx);
        if(children.length < 2)
            return children[0];

        return new AndQuery(children);
    }

    clauseDefault(ctx: any):Query {
        const children = this.mapChildren(ctx);
        if(children.length < 2)
            return children[0];

        return new AndQuery(children);
    }

    clauseNot(ctx: any):Query {
        const children = this.mapChildren(ctx);
        if(children.length < 2)
            return children[0];

        for (let i = 1; i < children.length; i++)
            children[i] = new NotQuery(children[i]);

        return new AndQuery(children);
    }

    atom(ctx: any):Query {
        if(ctx.children) {
            let modifier = null;
            let field = null;
            let value = null;
            let termModifier = null;

            for(let i = 0; i<ctx.children.length; i++){
                const child = ctx.children[i];
                switch (this.rule(child)) {
                    case 'modifier':
                        modifier = child.getText();
                        break;
                    case 'field':
                        field = child.children.filter(c => this.rule(c) === 'field_name')[0].getText();
                        break;
                    case 'value':
                        value = child.getText();
                        break;
                    case 'multi_value':
                        throw new Error('Not implemented');
                    case 'term_modifler':
                        termModifier = child.getText();
                        break;
                }
            }
            return new FieldQuery(field, value, modifier, termModifier)
        }
        return null;
    }

    or_() {}
    and_() {}
    not_() {}
    sep() {}

    private rule(ctx){
        return this.parser.ruleNames[ctx.ruleIndex];
    }
}

class Query {
    constructor() {
    }
}

class UnknownQuery extends Query {
    public $type = 'UnknownQuery';

    constructor(context, public type, public value, public children?) {
        super()
    }
}

class Terminal extends Query {
    public $type = 'Terminal';

    constructor(context, public value, public symbol) {
        super();
    }
}

class AndQuery extends Query {
    public $type = 'AndQuery';

    constructor(public children) {
        super();
    }
}

class OrQuery extends Query {
    public $type = 'OrQuery';

    constructor(public children) {
        super();
    }
}

class NotQuery extends Query {
    public $type = 'NotQuery';

    constructor(public child) {
        super();
    }
}

class FieldQuery extends Query {
    public $type = 'FieldQuery';

    constructor(public fieldName, public fieldValue, public modifier, public termModifier) {
        super()
    }
}

