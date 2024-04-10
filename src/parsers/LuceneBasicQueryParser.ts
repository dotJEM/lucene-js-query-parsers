import BasicParser from '../grammar/basic/BasicParser';
import BasicLexer from '../grammar/basic/BasicLexer.js';
import BasicVisitor from '../grammar/basic/BasicVisitor.js';
import { BaseQuery, NotQuery, AndQuery, OrQuery, FieldQuery, Terminal, UnknownQuery, Query, OrderByField, QueryOrder, QueryValue, RangeQuery, AnyQuery } from "../ast/BaseQuery";
import {CommonTokenStream, InputStream, Lexer} from "antlr4";
import {Tree} from "antlr4/src/antlr4/tree/Tree";

export class LuceneBasicQueryParser {
    public parse(query: string, processSyntaxTree: ((tree: Tree) => any) = (tree => tree)) {
        const input: InputStream = new InputStream(query);
        const lexer: BasicLexer = new BasicLexer(input);
        const tokens: CommonTokenStream = new CommonTokenStream(lexer as Lexer);
        const parser: BasicParser = new BasicParser(tokens);
        (parser as any).buildParseTrees = true;

        const tree = processSyntaxTree(parser.query());
        return tree.accept(new LuceneBasicVisitor());
    }
}

export class LuceneBasicVisitor extends BasicVisitor {

    visitQuery(ctx): any {
        return super.visitQuery(ctx);
    }

    visitClause(ctx): any {
        return super.visitClause(ctx);
    }

    visitOr(ctx): any {
        return super.visitOr(ctx);
    }

    visitAnd(ctx): any {
        return super.visitAnd(ctx);
    }

    visitNot(ctx): any {
        return super.visitNot(ctx);
    }

    visitBasic(ctx): any {
        return super.visitBasic(ctx);
    }

    visitAtom(ctx): any {
        return super.visitAtom(ctx);
    }

    visitField(ctx): any {
        return super.visitField(ctx);
    }

    visitValue(ctx): any {
        return super.visitValue(ctx);
    }


    visitNotOperator(ctx): any {
        return super.visitNotOperator(ctx);
    }

    visitAndOperator(ctx): any {
        return super.visitAndOperator(ctx);
    }

    visitOrOperator(ctx): any {
        return super.visitOrOperator(ctx);
    }

    visitSep(ctx): any {
        return super.visitSep(ctx);
    }
}
