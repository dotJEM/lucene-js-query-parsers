

export class BaseQuery {
    public $type: string = 'BaseQuery';

    constructor() {}

    accept(visitor){
        return visitor.visitBaseQuery(this);
    }
}

export class AnyQuery extends BaseQuery {
    public $type: string = 'AnyQuery';

    constructor(){
        super();
    }

    toString(): string {
        return "*:*";
    }

    accept(visitor){
        if(typeof visitor.visitAnyQuery === "function"){
            return visitor.visitAnyQuery(this);
        }
        return super.accept(visitor);
    }
}

export class Query extends BaseQuery {
    public $type: string = 'Query';

    constructor(public clause: BaseQuery, public order?){
        super();
    }

    toString(): string {
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
    public $type: string = 'QueryOrder';

    constructor(public clauses: BaseQuery[]){
        super();
    }

    toString(): string {
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
    public $type: string = 'OrderByField';
    public $orderSet: boolean;

    constructor(public field: string, public order?: string){
        super();
        this.$orderSet = typeof order !== "undefined";
        this.order = order || "ASC";
    }

    toString(): string {
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
    public $type: string = 'UnknownQuery';

    constructor(context, public type, public value, public children?) {
        super();
    }

    toString(): string {
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
    public $type: string = 'RangeQuery';

    constructor(public field: string, public from: QueryValue, public to: QueryValue, public startType, public endType){
        super();
    }

    toString(): string {
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
    public $type: string = 'Terminal';

    constructor(public value, public symbol) {
        super();
    }

    toString(): string {
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
    public $type: string = 'AndQuery';

    constructor(public children: BaseQuery[]) {
        super();
    }

    toString(): string {
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
    public $type: string = 'OrQuery';

    constructor(public children: BaseQuery[]) {
        super();
    }

    toString(): string {
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
    public $type: string = 'NotQuery';

    constructor(public child: BaseQuery) {
        super();
    }

    toString(): string {
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
    public $type: string = 'FieldQuery';

    constructor(public fieldName, public fieldValue, public operator?, public fuzzy?, public boost?) {
        super()
    }

    toString(): string {
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
    public $type: string = 'QueryValue';

    constructor(public value: string, public type: any){
        super();
    }

    toString(): string {
        return this.value;
    }

    accept(visitor){
        if(typeof visitor.visitQueryValue === "function"){
            return visitor.visitQueryValue(this);
        }
        return super.accept(visitor);
    }
}

