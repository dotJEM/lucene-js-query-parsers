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
var BaseQuery = /** @class */ (function () {
    function BaseQuery() {
        this.$type = 'BaseQuery';
    }
    BaseQuery.prototype.accept = function (visitor) {
        return visitor.visitBaseQuery(this);
    };
    return BaseQuery;
}());
exports.BaseQuery = BaseQuery;
var Query = /** @class */ (function (_super) {
    __extends(Query, _super);
    function Query(clause, order) {
        var _this = _super.call(this) || this;
        _this.clause = clause;
        _this.order = order;
        _this.$type = 'Query';
        return _this;
    }
    Query.prototype.toString = function () {
        if (this.order) {
            return this.clause + " ORDER BY " + this.order;
        }
        return this.clause.toString();
    };
    Query.prototype.accept = function (visitor) {
        if (typeof visitor.visitQuery === "function") {
            return visitor.visitQuery(this);
        }
        return _super.prototype.accept.call(this, visitor);
    };
    return Query;
}(BaseQuery));
exports.Query = Query;
var QueryOrder = /** @class */ (function (_super) {
    __extends(QueryOrder, _super);
    function QueryOrder(clauses) {
        var _this = _super.call(this) || this;
        _this.clauses = clauses;
        _this.$type = 'QueryOrder';
        return _this;
    }
    QueryOrder.prototype.toString = function () {
        return this.clauses.map(function (c) { return c.toString(); }).join(',');
    };
    QueryOrder.prototype.accept = function (visitor) {
        if (typeof visitor.visitOrderQuery === "function") {
            return visitor.visitOrderQuery(this);
        }
        return _super.prototype.accept.call(this, visitor);
    };
    return QueryOrder;
}(BaseQuery));
exports.QueryOrder = QueryOrder;
var OrderByField = /** @class */ (function (_super) {
    __extends(OrderByField, _super);
    function OrderByField(field, order) {
        var _this = _super.call(this) || this;
        _this.field = field;
        _this.order = order;
        _this.$type = 'OrderByField';
        _this.$orderSet = typeof order !== "undefined";
        _this.order = order || "ASC";
        return _this;
    }
    OrderByField.prototype.toString = function () {
        if (this.$orderSet) {
            return this.field + " " + this.order;
        }
        return "" + this.field;
    };
    OrderByField.prototype.accept = function (visitor) {
        if (typeof visitor.visitOrderField === "function") {
            return visitor.visitOrderField(this);
        }
        return _super.prototype.accept.call(this, visitor);
    };
    return OrderByField;
}(BaseQuery));
exports.OrderByField = OrderByField;
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
    UnknownQuery.prototype.toString = function () {
        return "<UNKNOWN QUERY OBJECT: type=" + this.type + ", value=" + this.value + ">";
    };
    UnknownQuery.prototype.accept = function (visitor) {
        if (typeof visitor.visitUnknownQuery === "function") {
            return visitor.visitUnknownQuery(this);
        }
        return _super.prototype.accept.call(this, visitor);
    };
    return UnknownQuery;
}(BaseQuery));
exports.UnknownQuery = UnknownQuery;
var RangeQuery = /** @class */ (function (_super) {
    __extends(RangeQuery, _super);
    function RangeQuery(field, from, to, startType, endType) {
        var _this = _super.call(this) || this;
        _this.field = field;
        _this.from = from;
        _this.to = to;
        _this.startType = startType;
        _this.endType = endType;
        _this.$type = 'RangeQuery';
        return _this;
    }
    RangeQuery.prototype.toString = function () {
        var lb = this.startType === "LSBR" ? '[' : '{';
        var rb = this.endType === "RSBR" ? ']' : '}';
        return this.field + ":" + lb + this.from + " TO " + this.to + rb;
    };
    RangeQuery.prototype.accept = function (visitor) {
        if (typeof visitor.visitRangeQuery === "function") {
            return visitor.visitRangeQuery(this);
        }
        return _super.prototype.accept.call(this, visitor);
    };
    return RangeQuery;
}(BaseQuery));
exports.RangeQuery = RangeQuery;
var Terminal = /** @class */ (function (_super) {
    __extends(Terminal, _super);
    function Terminal(value, symbol) {
        var _this = _super.call(this) || this;
        _this.value = value;
        _this.symbol = symbol;
        _this.$type = 'Terminal';
        return _this;
    }
    Terminal.prototype.toString = function () {
        return "<TERMINAL: value=" + this.value + ", symbol=" + this.symbol + ">";
    };
    Terminal.prototype.accept = function (visitor) {
        if (typeof visitor.visitTerminal === "function") {
            return visitor.visitTerminal(this);
        }
        return _super.prototype.accept.call(this, visitor);
    };
    return Terminal;
}(BaseQuery));
exports.Terminal = Terminal;
var AndQuery = /** @class */ (function (_super) {
    __extends(AndQuery, _super);
    function AndQuery(children) {
        var _this = _super.call(this) || this;
        _this.children = children;
        _this.$type = 'AndQuery';
        return _this;
    }
    AndQuery.prototype.toString = function () {
        return "(" + this.children.map(function (c) { return c.toString(); }).join(' AND ') + ")";
    };
    AndQuery.prototype.accept = function (visitor) {
        if (typeof visitor.visitAndQuery === "function") {
            return visitor.visitAndQuery(this);
        }
        return _super.prototype.accept.call(this, visitor);
    };
    return AndQuery;
}(BaseQuery));
exports.AndQuery = AndQuery;
var OrQuery = /** @class */ (function (_super) {
    __extends(OrQuery, _super);
    function OrQuery(children) {
        var _this = _super.call(this) || this;
        _this.children = children;
        _this.$type = 'OrQuery';
        return _this;
    }
    OrQuery.prototype.toString = function () {
        return "(" + this.children.map(function (c) { return c.toString(); }).join(' OR ') + ")";
    };
    OrQuery.prototype.accept = function (visitor) {
        if (typeof visitor.visitOrQuery === "function") {
            return visitor.visitOrQuery(this);
        }
        return _super.prototype.accept.call(this, visitor);
    };
    return OrQuery;
}(BaseQuery));
exports.OrQuery = OrQuery;
var NotQuery = /** @class */ (function (_super) {
    __extends(NotQuery, _super);
    function NotQuery(child) {
        var _this = _super.call(this) || this;
        _this.child = child;
        _this.$type = 'NotQuery';
        return _this;
    }
    NotQuery.prototype.toString = function () {
        return "NOT " + this.child;
    };
    NotQuery.prototype.accept = function (visitor) {
        if (typeof visitor.visitNotQuery === "function") {
            return visitor.visitNotQuery(this);
        }
        return _super.prototype.accept.call(this, visitor);
    };
    return NotQuery;
}(BaseQuery));
exports.NotQuery = NotQuery;
var FieldQuery = /** @class */ (function (_super) {
    __extends(FieldQuery, _super);
    function FieldQuery(fieldName, fieldValue, operator, fuzzy, boost) {
        var _this = _super.call(this) || this;
        _this.fieldName = fieldName;
        _this.fieldValue = fieldValue;
        _this.operator = operator;
        _this.fuzzy = fuzzy;
        _this.boost = boost;
        _this.$type = 'FieldQuery';
        return _this;
    }
    FieldQuery.prototype.toString = function () {
        return "" + this.fieldName + this.operator + " " + this.fieldValue;
    };
    FieldQuery.prototype.accept = function (visitor) {
        if (typeof visitor.visitFieldQuery === "function") {
            return visitor.visitFieldQuery(this);
        }
        return _super.prototype.accept.call(this, visitor);
    };
    return FieldQuery;
}(BaseQuery));
exports.FieldQuery = FieldQuery;
var QueryValue = /** @class */ (function (_super) {
    __extends(QueryValue, _super);
    function QueryValue(value, type) {
        var _this = _super.call(this) || this;
        _this.value = value;
        _this.type = type;
        _this.$type = 'QueryValue';
        return _this;
    }
    QueryValue.prototype.toString = function () {
        return this.value;
    };
    QueryValue.prototype.accept = function (visitor) {
        if (typeof visitor.visitQueryValue === "function") {
            return visitor.visitQueryValue(this);
        }
        return _super.prototype.accept.call(this, visitor);
    };
    return QueryValue;
}(BaseQuery));
exports.QueryValue = QueryValue;
//# sourceMappingURL=BaseQuery.js.map