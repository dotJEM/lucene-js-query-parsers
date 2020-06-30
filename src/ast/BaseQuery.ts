

export class BaseQuery {
    public $type = 'BaseQuery';

    constructor() {}

    accept(visitor){
        return visitor.visitBaseQuery(this);
    }
}

export class Query extends BaseQuery {
    public $type = 'Query';

    constructor(public clause, public order?){
        super();
    }

    toString() {
        if(this.order){
            return `${this.clause} ORDER BY ${this.order}`;
        }
        return this.clause.toString();
    }

    accept(visitor){
        if(typeof visitor.visitQuery === "function"){
            return visitor.visitQuery(this);
        }
        return super.accept(visitor);
    }
}

export class QueryOrder extends BaseQuery {
    public $type = 'QueryOrder';

    constructor(public clauses){
        super();
    }

    toString() {
        return this.clauses.map(c => c.toString()).join(',');
    }

    accept(visitor){
        if(typeof visitor.visitOrderQuery === "function"){
            return visitor.visitOrderQuery(this);
        }
        return super.accept(visitor);
    }
}

export class OrderByField extends BaseQuery {
    public $type = 'OrderByField';
    public $orderSet: boolean;

    constructor(public field:string, public order?:string){
        super();
        this.$orderSet = typeof order !== "undefined";
        this.order = order || "ASC";
    }

    toString() {
        if(this.$orderSet){
            return `${this.field} ${this.order}`;
        }
        return `${this.field}`;
    }

    accept(visitor){
        if(typeof visitor.visitOrderField === "function"){
            return visitor.visitOrderField(this);
        }
        return super.accept(visitor);
    }
}

export class UnknownQuery extends BaseQuery {
    public $type = 'UnknownQuery';

    constructor(context, public type, public value, public children?) {
        super();
    }

    toString() {
        return `<UNKNOWN QUERY OBJECT: type=${this.type}, value=${this.value}>`;
    }

    accept(visitor){
        if(typeof visitor.visitUnknownQuery === "function"){
            return visitor.visitUnknownQuery(this);
        }
        return super.accept(visitor);
    }
}

export class RangeQuery extends BaseQuery {
    public $type = 'RangeQuery';

    constructor(public field: string, public from: QueryValue, public to: QueryValue, public startType, public endType){
        super();
    }

    toString() {
        const lb = this.startType === "LSBR" ? '[' : '{';
        const rb = this.endType === "RSBR" ? ']' : '}';
        return `${this.field}:${lb}${this.from} TO ${this.to}${rb}`;
    }

    accept(visitor){
        if(typeof visitor.visitRangeQuery === "function"){
            return visitor.visitRangeQuery(this);
        }
        return super.accept(visitor);
    }
}

export class Terminal extends BaseQuery {
    public $type = 'Terminal';

    constructor(public value, public symbol) {
        super();
    }

    toString() {
        return `<TERMINAL: value=${this.value}, symbol=${this.symbol}>`;
    }

    accept(visitor){
        if(typeof visitor.visitTerminal === "function"){
            return visitor.visitTerminal(this);
        }
        return super.accept(visitor);
    }
}

export class AndQuery extends BaseQuery {
    public $type = 'AndQuery';

    constructor(public children) {
        super();
    }

    toString() {
        return `(${this.children.map(c => c.toString()).join(' AND ')})`;
    }

    accept(visitor){
        if(typeof visitor.visitAndQuery === "function"){
            return visitor.visitAndQuery(this);
        }
        return super.accept(visitor);
    }
}

export class OrQuery extends BaseQuery {
    public $type = 'OrQuery';

    constructor(public children) {
        super();
    }

    toString() {
        return `(${this.children.map(c => c.toString()).join(' OR ')})`;
    }

    accept(visitor){
        if(typeof visitor.visitOrQuery === "function"){
            return visitor.visitOrQuery(this);
        }
        return super.accept(visitor);
    }
}

export class NotQuery extends BaseQuery {
    public $type = 'NotQuery';

    constructor(public child) {
        super();
    }

    toString() {
        return `NOT ${this.child}`;
    }

    accept(visitor){
        if(typeof visitor.visitNotQuery === "function"){
            return visitor.visitNotQuery(this);
        }
        return super.accept(visitor);
    }
}

export class FieldQuery extends BaseQuery {
    public $type = 'FieldQuery';

    constructor(public fieldName, public fieldValue, public operator?, public fuzzy?, public boost?) {
        super()
    }

    toString() {
        return `${this.fieldName}${this.operator} ${this.fieldValue}`;
    }

    accept(visitor){
        if(typeof visitor.visitFieldQuery === "function"){
            return visitor.visitFieldQuery(this);
        }
        return super.accept(visitor);
    }
}

export class QueryValue extends BaseQuery {
    public $type = 'QueryValue';

    constructor(public value: string, public type: any){
        super();
    }

    toString() {
        return this.value;
    }

    accept(visitor){
        if(typeof visitor.visitQueryValue === "function"){
            return visitor.visitQueryValue(this);
        }
        return super.accept(visitor);
    }
}

