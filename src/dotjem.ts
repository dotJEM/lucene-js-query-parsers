import { LuceneOrderingQueryParser } from "./parsers/LuceneOrderingQueryParser";
import {BaseQuery} from "./ast/BaseQuery";

export const dotjem = {
    lucene: {
        SimplifiedWithOrderingQueryParser: LuceneOrderingQueryParser,
        Query: BaseQuery
    }
};
