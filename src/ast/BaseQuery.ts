export interface IQueryVisitor {
    visitBaseQuery?(query: BaseQuery);
    visitAnyQuery?(query: AnyQuery);
    visitQuery?(query: Query);

    visitAndQuery?(query: AndQuery);
    visitOrQuery?(query: OrQuery);
    visitNotQuery?(query: NotQuery);

    visitRangeQuery?(query: RangeQuery);
    visitFieldQuery?(query: FieldQuery);

    visitValue?(query: Value);
    visitAnyValue?(query: AnyValue);
    visitTextValue?(query: TextValue);
    visitPhraseValue?(query: PhraseValue);
    visitNumberValue?(query: NumberValue);
    visitDateValue?(query: DateValue);
    visitTimeValue?(query: TimeValue);
    visitDateTimeValue?(query: DateTimeValue);
    visitDateTimeOffsetValue?(query: DateTimeOffsetValue);

    visitOrValue?(query: OrValue);
    visitAndValue?(query: AndValue);
    visitNotValue?(query: NotValue);

    visitOrderQuery?(query: QueryOrder);
    visitOrderByField?(query: OrderByField);

    visitTerminal?(query: Terminal);
    visitUnknownQuery?(query: UnknownQuery);
}

export abstract class BaseQuery {
    public $type: string = 'BaseQuery';

    protected constructor() {}

    accept(visitor:IQueryVisitor){
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

    accept(visitor:IQueryVisitor){
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

    accept(visitor:IQueryVisitor){
        if(typeof visitor.visitQuery === "function"){
            return visitor.visitQuery(this);
        }
        return super.accept(visitor);
    }
}

export class QueryOrder extends BaseQuery {
    public $type: string = 'QueryOrder';

    constructor(public clauses: OrderByField[]){
        super();
    }

    toString(): string {
        return this.clauses.map(c => c.toString()).join(',');
    }

    accept(visitor:IQueryVisitor){
        if(typeof visitor.visitOrderQuery === "function"){
            return visitor.visitOrderQuery(this);
        }
        return super.accept(visitor);
    }
}

export class OrderByField extends BaseQuery {
    public $type: string = 'OrderByField';

    constructor(public field: string, public order?: string){
        super();
    }

    toString(): string {
        if(this.order){
            return `${this.field} ${this.order}`;
        }
        return `${this.field}`;
    }

    accept(visitor:IQueryVisitor){
        if(typeof visitor.visitOrderByField === "function"){
            return visitor.visitOrderByField(this);
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

    accept(visitor:IQueryVisitor){
        if(typeof visitor.visitUnknownQuery === "function"){
            return visitor.visitUnknownQuery(this);
        }
        return super.accept(visitor);
    }
}

export class RangeQuery extends BaseQuery {
    public $type: string = 'RangeQuery';

    constructor(public field: string, public from: Value, public to: Value, public inclusiveFrom: boolean, public inclusiveTo: boolean){
        super();
    }

    toString(): string {
        const lb = this.inclusiveFrom ? '{' : '[';
        const rb = this.inclusiveTo ? '}' : ']';
        return `${this.field}:${lb}${this.from} TO ${this.to}${rb}`;
    }

    accept(visitor:IQueryVisitor){
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

    accept(visitor:IQueryVisitor){
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

    accept(visitor:IQueryVisitor){
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

    accept(visitor:IQueryVisitor){
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

    accept(visitor:IQueryVisitor){
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
        return `${this.fieldName}${this.operator??' '}${this.fieldValue}`;
    }

    accept(visitor:IQueryVisitor){
        if(typeof visitor.visitFieldQuery === "function"){
            return visitor.visitFieldQuery(this);
        }
        return super.accept(visitor);
    }
}

export abstract class Value extends BaseQuery {
    public $type: string = 'Value';

    protected constructor(){
        super();
    }

    accept(visitor:IQueryVisitor){
        if(typeof visitor.visitValue === "function"){
            return visitor.visitValue(this);
        }
        return super.accept(visitor);
    }
}

export class TextValue extends Value {
    public $type: string = 'TextValue';

    constructor(public value: any){
        super();
    }
    toString(): string {
        return this.value.toString();
    }

    accept(visitor:IQueryVisitor){
        if(typeof visitor.visitTextValue === "function"){
            return visitor.visitTextValue(this);
        }
        return super.accept(visitor);
    }
}

export class AnyValue extends TextValue
{
    public $type: string = 'AnyValue';

    constructor(){
        super('*');
    }
    toString(): string {
        return this.value.toString();
    }

    accept(visitor:IQueryVisitor){
        if(typeof visitor.visitAnyValue === "function"){
            return visitor.visitAnyValue(this);
        }
        return super.accept(visitor);
    }
}

export class NumberValue extends TextValue {
    public $type: string = 'NumberValue';

    constructor(value: any){
        super(value);
    }
    toString(): string {
        return this.value.toString();
    }

    accept(visitor:IQueryVisitor){
        if(typeof visitor.visitNumberValue === "function"){
            return visitor.visitNumberValue(this);
        }
        return super.accept(visitor);
    }
}

export class PhraseValue extends TextValue {
    public $type: string = 'PhraseValue';

    constructor(value: any){
        super(value);
    }
    toString(): string {
        return `"${this.value}"`;
    }
    accept(visitor:IQueryVisitor){
        if(typeof visitor.visitPhraseValue === "function"){
            return visitor.visitPhraseValue(this);
        }
        return super.accept(visitor);
    }
}

export class DateValue extends TextValue {
    public $type: string = 'DateValue';

    constructor(value: any){
        super(value);
    }
    toString(): string {
        return this.value.toString();
    }

    accept(visitor:IQueryVisitor){
        if(typeof visitor.visitDateValue === "function"){
            return visitor.visitDateValue(this);
        }
        return super.accept(visitor);
    }
}

export class TimeValue extends TextValue {
    public $type: string = 'TimeValue';

    constructor(value: any){
        super(value);
    }
    toString(): string {
        return this.value.toString();
    }

    accept(visitor:IQueryVisitor){
        if(typeof visitor.visitTimeValue === "function"){
            return visitor.visitTimeValue(this);
        }
        return super.accept(visitor);
    }
}
export class DateTimeValue extends TextValue {
    public $type: string = 'DateTimeValue';

    constructor(value: any){
        super(value);
    }
    toString(): string {
        return this.value.toString();
    }

    accept(visitor:IQueryVisitor){
        if(typeof visitor.visitDateTimeValue === "function"){
            return visitor.visitDateTimeValue(this);
        }
        return super.accept(visitor);
    }
}
export class DateTimeOffsetValue extends TextValue {
    public $type: string = 'DateTimeOffsetValue';

    constructor(value: any){
        super(value);
    }
    toString(): string {
        return this.value.toString();
    }

    accept(visitor:IQueryVisitor){
        if(typeof visitor.visitDateTimeOffsetValue === "function"){
            return visitor.visitDateTimeOffsetValue(this);
        }
        return super.accept(visitor);
    }
}

export class NotValue extends Value {
    public $type: string = 'NotValue';

    constructor(public value: Value){
        super();
    }

    toString(): string {
        return `NOT ${this.value.toString()}`;
    }

    accept(visitor:IQueryVisitor){
        if(typeof visitor.visitNotValue === "function"){
            return visitor.visitNotValue(this);
        }
        return super.accept(visitor);
    }
}

export class AndValue extends Value {
    public $type: string = 'AndValue';

    constructor(public value: Value[]){
        super();
    }

    toString(): string {
        return `(${this.value.join(' AND ')})`;
    }
    accept(visitor:IQueryVisitor){
        if(typeof visitor.visitAndValue === "function"){
            return visitor.visitAndValue(this);
        }
        return super.accept(visitor);
    }
}

export class OrValue extends Value {
    public $type: string = 'OrValue';

    constructor(public value: Value[]){
        super();
    }

    toString(): string {
        return `(${this.value.join(' OR ')})`;
    }
    accept(visitor:IQueryVisitor){
        if(typeof visitor.visitOrValue === "function"){
            return visitor.visitOrValue(this);
        }
        return super.accept(visitor);
    }
}