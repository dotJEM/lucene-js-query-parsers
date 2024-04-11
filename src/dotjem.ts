import { LuceneOrderingQueryParser } from "./parsers/LuceneOrderingQueryParser";
import {
    AndQuery,
    AndValue,
    AnyQuery,
    BaseQuery,
    FieldQuery,
    NotQuery,
    NotValue,
    OrderByField,
    OrQuery,
    OrValue,
    Query,
    QueryOrder,
    RangeQuery,
    Value,
    Terminal,
    UnknownQuery,
    AnyValue,
    NumberValue,
    TextValue,
    PhraseValue,
    DateValue,
    DateTimeValue,
    TimeValue,
    DateTimeOffsetValue
} from "./ast/BaseQuery";

export const dotjem = {
    lucene: {
        SimplifiedWithOrderingQueryParser: LuceneOrderingQueryParser,
        Query: {
            BaseQuery,
            NotQuery,
            AndQuery,
            OrQuery,
            FieldQuery,
            Terminal,
            UnknownQuery,
            Query,
            OrderByField,
            QueryOrder,
            Value,
            RangeQuery,
            AnyQuery,
            AndValue,
            OrValue,
            NotValue,
            AnyValue,
            NumberValue,
            TextValue,
            PhraseValue,
            DateValue,
            DateTimeValue,
            TimeValue,
            DateTimeOffsetValue
        }
    }
};
