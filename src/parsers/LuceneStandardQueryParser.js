"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StandardParser_1 = require("../grammar/standard/StandardParser");
var StandardLexer_1 = require("../grammar/standard/StandardLexer");
var antlr4_1 = require("antlr4");
var BaseQuery_1 = require("../ast/BaseQuery");
var LuceneStandardQueryParser = /** @class */ (function () {
    function LuceneStandardQueryParser() {
    }
    LuceneStandardQueryParser.prototype.parse = function (query) {
        var input = new antlr4_1.InputStream(query);
        var lexer = new StandardLexer_1.StandardLexer(input);
        var tokens = new antlr4_1.CommonTokenStream(lexer);
        var parser = new StandardParser_1.StandardParser(tokens);
        parser.buildParseTrees = true;
        var tree = parser.mainQ();
        var ast = tree.accept(new LuceneStandardQueryVisitor(parser));
        return [tree, ast];
    };
    return LuceneStandardQueryParser;
}());
exports.LuceneStandardQueryParser = LuceneStandardQueryParser;
var LuceneStandardQueryVisitor = /** @class */ (function () {
    function LuceneStandardQueryVisitor(parser) {
        this.parser = parser;
    }
    LuceneStandardQueryVisitor.prototype.visitChildren = function (ctx) {
        var type = ctx.parser.ruleNames[ctx.ruleIndex];
        if (typeof this[type] === 'function') {
            return this[type](ctx);
        }
        return new BaseQuery_1.UnknownQuery(ctx, ctx.parser.ruleNames[ctx.ruleIndex], ctx.getText(), this.mapChildren(ctx));
    };
    LuceneStandardQueryVisitor.prototype.visitTerminal = function (ctx) {
        var symbol = this.parser.symbolicNames[ctx.symbol.type];
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
        return new BaseQuery_1.Terminal(ctx.getText(), symbol);
    };
    LuceneStandardQueryVisitor.prototype.mapChildren = function (ctx) {
        var _this = this;
        if (!Array.isArray(ctx.children))
            return;
        return ctx
            .children
            .map(function (c) { return c.accept(_this); })
            .filter(function (c) { return c !== null && typeof c !== 'undefined'; });
    };
    LuceneStandardQueryVisitor.prototype.mainQ = function (ctx) {
        var children = this.mapChildren(ctx);
        return children[0];
    };
    LuceneStandardQueryVisitor.prototype.clauseOr = function (ctx) {
        var children = this.mapChildren(ctx);
        if (children.length < 2)
            return children[0];
        return new BaseQuery_1.OrQuery(children);
    };
    LuceneStandardQueryVisitor.prototype.clauseAnd = function (ctx) {
        var children = this.mapChildren(ctx);
        if (children.length < 2)
            return children[0];
        return new BaseQuery_1.AndQuery(children);
    };
    LuceneStandardQueryVisitor.prototype.clauseDefault = function (ctx) {
        var children = this.mapChildren(ctx);
        if (children.length < 2)
            return children[0];
        return new BaseQuery_1.AndQuery(children);
    };
    LuceneStandardQueryVisitor.prototype.clauseNot = function (ctx) {
        var children = this.mapChildren(ctx);
        if (children.length < 2)
            return children[0];
        for (var i = 1; i < children.length; i++)
            children[i] = new BaseQuery_1.NotQuery(children[i]);
        return new BaseQuery_1.AndQuery(children);
    };
    LuceneStandardQueryVisitor.prototype.atom = function (ctx) {
        var _this = this;
        if (ctx.children) {
            var modifier = null;
            var field = null;
            var value = null;
            var termModifier = null;
            for (var i = 0; i < ctx.children.length; i++) {
                var child = ctx.children[i];
                switch (this.rule(child)) {
                    case 'modifier':
                        modifier = child.getText();
                        break;
                    case 'field':
                        field = child.children.filter(function (c) { return _this.rule(c) === 'field_name'; })[0].getText();
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
            return new BaseQuery_1.FieldQuery(field, value, modifier, termModifier);
        }
        return null;
    };
    LuceneStandardQueryVisitor.prototype.or_ = function () { };
    LuceneStandardQueryVisitor.prototype.and_ = function () { };
    LuceneStandardQueryVisitor.prototype.not_ = function () { };
    LuceneStandardQueryVisitor.prototype.sep = function () { };
    LuceneStandardQueryVisitor.prototype.rule = function (ctx) {
        return this.parser.ruleNames[ctx.ruleIndex];
    };
    return LuceneStandardQueryVisitor;
}());
exports.LuceneStandardQueryVisitor = LuceneStandardQueryVisitor;
//# sourceMappingURL=LuceneStandardQueryParser.js.map