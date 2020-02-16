"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var StandardParser_1 = require("./grammar/standard/StandardParser");
var StandardLexer_1 = require("./grammar/standard/StandardLexer");
var antlr4_1 = require("antlr4");
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
    //private mappers: any = {};
    function LuceneStandardQueryVisitor(parser) {
        //this.mappers.clauseOr = ctx => this.mapClauseOr(ctx);
        //this.mappers.clauseAnd = ctx => this.mapClauseAnd(ctx);
        //this.mappers.clauseNot = ctx => new OrQuery(ctx.getText(), this.mapChildren(ctx));
        this.parser = parser;
    }
    LuceneStandardQueryVisitor.prototype.visitChildren = function (ctx) {
        var type = ctx.parser.ruleNames[ctx.ruleIndex];
        if (typeof this[type] === 'function') {
            return this[type](ctx);
        }
        return new UnknownQuery(ctx, ctx.parser.ruleNames[ctx.ruleIndex], ctx.getText(), this.mapChildren(ctx));
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
        return new OrQuery(children);
    };
    LuceneStandardQueryVisitor.prototype.clauseAnd = function (ctx) {
        var children = this.mapChildren(ctx);
        if (children.length < 2)
            return children[0];
        return new AndQuery(children);
    };
    LuceneStandardQueryVisitor.prototype.clauseDefault = function (ctx) {
        var children = this.mapChildren(ctx);
        if (children.length < 2)
            return children[0];
        return new AndQuery(children);
    };
    LuceneStandardQueryVisitor.prototype.clauseNot = function (ctx) {
        var children = this.mapChildren(ctx);
        if (children.length < 2)
            return children[0];
        for (var i = 1; i < children.length; i++)
            children[i] = new NotQuery(children[i]);
        return new AndQuery(children);
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
            return new FieldQuery(field, value, modifier, termModifier);
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
var Query = /** @class */ (function () {
    function Query() {
    }
    return Query;
}());
var UnknownQuery = /** @class */ (function (_super) {
    __extends(UnknownQuery, _super);
    function UnknownQuery(context, type, value, children) {
        var _this = _super.call(this) || this;
        _this.type = type;
        _this.value = value;
        _this.children = children;
        _this.$type = 'UnknownQuery';
        return _this;
    }
    return UnknownQuery;
}(Query));
var Terminal = /** @class */ (function (_super) {
    __extends(Terminal, _super);
    function Terminal(context, value, symbol) {
        var _this = _super.call(this) || this;
        _this.value = value;
        _this.symbol = symbol;
        _this.$type = 'Terminal';
        return _this;
    }
    return Terminal;
}(Query));
var AndQuery = /** @class */ (function (_super) {
    __extends(AndQuery, _super);
    function AndQuery(children) {
        var _this = _super.call(this) || this;
        _this.children = children;
        _this.$type = 'AndQuery';
        return _this;
    }
    return AndQuery;
}(Query));
var OrQuery = /** @class */ (function (_super) {
    __extends(OrQuery, _super);
    function OrQuery(children) {
        var _this = _super.call(this) || this;
        _this.children = children;
        _this.$type = 'OrQuery';
        return _this;
    }
    return OrQuery;
}(Query));
var NotQuery = /** @class */ (function (_super) {
    __extends(NotQuery, _super);
    function NotQuery(child) {
        var _this = _super.call(this) || this;
        _this.child = child;
        _this.$type = 'NotQuery';
        return _this;
    }
    return NotQuery;
}(Query));
var FieldQuery = /** @class */ (function (_super) {
    __extends(FieldQuery, _super);
    function FieldQuery(fieldName, fieldValue, modifier, termModifier) {
        var _this = _super.call(this) || this;
        _this.fieldName = fieldName;
        _this.fieldValue = fieldValue;
        _this.modifier = modifier;
        _this.termModifier = termModifier;
        _this.$type = 'FieldQuery';
        return _this;
    }
    return FieldQuery;
}(Query));
