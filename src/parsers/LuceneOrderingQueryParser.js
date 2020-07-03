"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderingParser_1 = require("../grammar/ordering/OrderingParser");
var OrderingLexer_1 = require("../grammar/ordering/OrderingLexer");
var antlr4_1 = require("antlr4");
var BaseQuery_1 = require("../ast/BaseQuery");
var LuceneOrderingQueryParser = /** @class */ (function () {
    function LuceneOrderingQueryParser() {
    }
    LuceneOrderingQueryParser.prototype.parse = function (query) {
        var input = new antlr4_1.InputStream(query);
        var lexer = new OrderingLexer_1.OrderingLexer(input);
        var tokens = new antlr4_1.CommonTokenStream(lexer);
        var parser = new OrderingParser_1.OrderingParser(tokens);
        parser.buildParseTrees = true;
        console.log(parser);
        var tree = parser.query();
        var ast = tree.accept(new LuceneOrderingQueryVisitor(parser));
        return [tree, ast];
    };
    return LuceneOrderingQueryParser;
}());
exports.LuceneOrderingQueryParser = LuceneOrderingQueryParser;
var LuceneOrderingQueryVisitor = /** @class */ (function () {
    function LuceneOrderingQueryVisitor(parser) {
        this.parser = parser;
        this.$$ignoredSymbols = {
            WS: true,
            LPA: true,
            RPA: true
        };
    }
    LuceneOrderingQueryVisitor.prototype.visitChildren = function (ctx) {
        var type = ctx.parser.ruleNames[ctx.ruleIndex];
        if (typeof this[type] === 'function') {
            return this[type](ctx);
        }
        return this.$$default(ctx);
    };
    LuceneOrderingQueryVisitor.prototype.$$default = function (ctx) {
        return new BaseQuery_1.UnknownQuery(ctx, ctx.parser.ruleNames[ctx.ruleIndex], ctx.getText(), this.mapChildren(ctx));
    };
    LuceneOrderingQueryVisitor.prototype.visitTerminal = function (ctx) {
        var symbol = this.parser.symbolicNames[ctx.symbol.type];
        if (this.$$ignoredSymbols[symbol])
            return null;
        return new BaseQuery_1.Terminal(ctx.getText(), symbol);
    };
    LuceneOrderingQueryVisitor.prototype.query = function (ctx) {
        var clause = ctx.clause.accept(this);
        var order = ctx.order && ctx.order.accept(this);
        return new BaseQuery_1.Query(clause, order);
    };
    LuceneOrderingQueryVisitor.prototype.defaultClause = function (ctx) {
        var children = this.mapChildren(ctx);
        if (children.length < 2)
            return children[0];
        //note: And as default, at least for now.
        return new BaseQuery_1.AndQuery(children);
    };
    LuceneOrderingQueryVisitor.prototype.orClause = function (ctx) {
        var children = this.mapChildren(ctx);
        if (children.length < 2)
            return children[0];
        //note: And as default, at least for now.
        return new BaseQuery_1.OrQuery(children);
    };
    LuceneOrderingQueryVisitor.prototype.andClause = function (ctx) {
        var children = this.mapChildren(ctx);
        if (children.length < 2)
            return children[0];
        //note: And as default, at least for now.
        return new BaseQuery_1.AndQuery(children);
    };
    LuceneOrderingQueryVisitor.prototype.notClause = function (ctx) {
        var children = this.mapChildren(ctx);
        if (children.length < 2)
            return children[0];
        for (var i = 1; i < children.length; i++)
            children[i] = new BaseQuery_1.NotQuery(children[i]);
        return new BaseQuery_1.AndQuery(children);
    };
    LuceneOrderingQueryVisitor.prototype.basicClause = function (ctx) {
        var children = this.mapChildren(ctx);
        if (children.length < 2)
            return children[0];
        return new BaseQuery_1.AndQuery(children);
    };
    LuceneOrderingQueryVisitor.prototype.orderingClause = function (ctx) {
        var children = this
            .mapChildren(ctx)
            .filter(function (child) { return child.$type === 'OrderField'; });
        return new BaseQuery_1.QueryOrder(children);
    };
    LuceneOrderingQueryVisitor.prototype.orderingField = function (ctx) {
        var field = ctx.fieldName.accept(this);
        var direction = ctx.direction && ctx.direction.getText();
        return new BaseQuery_1.OrderByField(field, direction);
    };
    LuceneOrderingQueryVisitor.prototype.atom = function (ctx) {
        return this.mapChildren(ctx)[0];
    };
    LuceneOrderingQueryVisitor.prototype.rangeClause = function (ctx) {
        var field = ctx.fieldName.accept(this);
        var from = ctx.from.accept(this);
        var to = ctx.to.accept(this);
        return new BaseQuery_1.RangeQuery(field, from, to, 'LSBR', 'RSBR');
    };
    LuceneOrderingQueryVisitor.prototype.field = function (ctx) {
        var field = ctx.fieldName.accept(this);
        var operator = ctx.fieldOperator.accept(this);
        var value = ctx.fieldValue.accept(this);
        return new BaseQuery_1.FieldQuery(field, value, operator);
    };
    LuceneOrderingQueryVisitor.prototype.simple_value = function (ctx) {
        console.log(ctx.children);
        var rule = this.mapChildren(ctx)[0];
        var text = ctx.getText();
        return new BaseQuery_1.QueryValue(text, rule.symbol);
    };
    LuceneOrderingQueryVisitor.prototype.value = function (ctx) {
        var rule = this.mapChildren(ctx)[0];
        var text = ctx.getText();
        return new BaseQuery_1.QueryValue(text, rule.symbol);
    };
    LuceneOrderingQueryVisitor.prototype.name = function (ctx) {
        return ctx.getText();
    };
    LuceneOrderingQueryVisitor.prototype.operator = function (ctx) {
        return ctx.getText();
    };
    LuceneOrderingQueryVisitor.prototype.orOperator = function () { };
    LuceneOrderingQueryVisitor.prototype.andOperator = function () { };
    LuceneOrderingQueryVisitor.prototype.notOperator = function () { };
    LuceneOrderingQueryVisitor.prototype.mapChildren = function (ctx) {
        var _this = this;
        if (!Array.isArray(ctx.children))
            return;
        return ctx
            .children
            .map(function (c) { return c.accept(_this); })
            .filter(function (c) { return c !== null && typeof c !== 'undefined'; });
    };
    return LuceneOrderingQueryVisitor;
}());
exports.LuceneOrderingQueryVisitor = LuceneOrderingQueryVisitor;
//# sourceMappingURL=LuceneOrderingQueryParser.js.map