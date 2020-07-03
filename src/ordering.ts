import { LuceneOrderingQueryParser } from "./parsers/LuceneOrderingQueryParser";
import * as Query from './ast/BaseQuery';

export const dotjem = {
    lucene: {
        OrderingQueryParser: LuceneOrderingQueryParser,
        Query
    }
};
