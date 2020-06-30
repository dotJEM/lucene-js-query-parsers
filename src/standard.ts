import { LuceneStandardQueryParser } from "./LuceneStandardQueryParser.js";
import * as Query from './ast/BaseQuery';

export const dotJem = {
    lucene: {
        LuceneStandardQueryParser: LuceneStandardQueryParser,
        Query
    }
};
