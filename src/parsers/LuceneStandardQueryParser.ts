import StandardParser from '../grammar/standard/StandardParser.js';
import StandardLexer from '../grammar/standard/StandardLexer.js';
import { CommonTokenStream, InputStream} from "antlr4";
import { BaseQuery, NotQuery, AndQuery, OrQuery, FieldQuery, Terminal, UnknownQuery } from "../ast/BaseQuery";
import {Tree} from "antlr4/src/antlr4/tree/Tree";

export class LuceneStandardQueryParser {
    public parse(query: string, processSyntaxTree: ((tree: Tree) => any) = (tree => tree)) {
        const input: InputStream = new InputStream(query);
        const lexer = new StandardLexer(input);
        const tokens: CommonTokenStream = new CommonTokenStream(lexer);
        const parser = new StandardParser(tokens);
        (parser as any).buildParseTrees = true;

        const tree = processSyntaxTree(parser.mainQ());
        return tree.accept(new LuceneStandardQueryVisitor(parser));
    }
}

export class LuceneStandardQueryVisitor {

    constructor(private parser){}

    visitChildren(ctx: any): BaseQuery {

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

    visitTerminal(ctx): BaseQuery {
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
            case "OPERATOR":
            case "CLAUSE":
            case "FUZZY":
            case "BOOST":
            case "FIELD":
                return null;
            case "NUMBER":
            case "DATE_TOKEN":
            case "TERM_NORMAL":
            case "TERM_TRUNCATED":
            case "PHRASE":
            case "PHRASE_ANYTHING":
            case "ATOM":
            case "MODIFIER":
            case "TMODIFIER":
            case "QNORMAL":
            case "QPHRASE":
            case "QPHRASETRUNC":
            case "QTRUNCATED":
            case "QRANGEIN":
            case "QRANGEEX":
            case "QANYTHING":
            case "QDATE":
        }

        return new Terminal(ctx.getText(), symbol);
    }

    mapChildren(ctx): BaseQuery[] | undefined {
        if(!Array.isArray(ctx.children))
            return;

        return ctx
            .children
            .map( c => c.accept( this ) )
            .filter(c => c !== null && typeof c !== 'undefined');
    }

    mainQ(ctx):BaseQuery {
        const children: BaseQuery[] = this.mapChildren(ctx);
        return children[0];
    }

    clauseOr(ctx: any):BaseQuery {
        const children: BaseQuery[] = this.mapChildren(ctx);
        if(children.length < 2)
            return children[0];

        return new OrQuery(children);
    }

    clauseAnd(ctx: any):BaseQuery {
        const children: BaseQuery[] = this.mapChildren(ctx);
        if(children.length < 2)
            return children[0];

        return new AndQuery(children);
    }

    clauseDefault(ctx: any):BaseQuery {
        const children: BaseQuery[] = this.mapChildren(ctx);
        if(children.length < 2)
            return children[0];

        return new AndQuery(children);
    }

    clauseNot(ctx: any):BaseQuery {
        const children: BaseQuery[] = this.mapChildren(ctx);
        if(children.length < 2)
            return children[0];

        for (let i: number = 1; i < children.length; i++)
            children[i] = new NotQuery(children[i]);

        return new AndQuery(children);
    }

    atom(ctx: any):BaseQuery {
        if(ctx.children) {
            let modifier = null;
            let field = null;
            let value = null;
            let termModifier = null;

            for(let i: number = 0; i<ctx.children.length; i++){
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

    or_(): void {}
    and_(): void {}
    not_(): void {}
    sep(): void {}

    private rule(ctx){
        return this.parser.ruleNames[ctx.ruleIndex];
    }
}
