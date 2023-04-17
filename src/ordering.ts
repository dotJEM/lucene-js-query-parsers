import { LuceneOrderingQueryParser } from "./parsers/LuceneOrderingQueryParser";
import {BaseQuery} from "./ast/BaseQuery";

export const dotjem = {
    lucene: {
        OrderingQueryParser: LuceneOrderingQueryParser,
        Query: BaseQuery
    }
};
