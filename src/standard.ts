import { LuceneStandardQueryParser } from "./parsers/LuceneStandardQueryParser";
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
    Value,
    RangeQuery,
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
        StandardQueryParser: LuceneStandardQueryParser,
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
