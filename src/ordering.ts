import { LuceneOrderingQueryParser } from "./parsers/LuceneOrderingQueryParser";
import {
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
    AnyValue, NumberValue, TextValue, PhraseValue, DateValue, DateTimeValue, TimeValue, DateTimeOffsetValue
} from "./ast/BaseQuery";

export const dotjem = {
    lucene: {
        OrderingQueryParser: LuceneOrderingQueryParser,
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
