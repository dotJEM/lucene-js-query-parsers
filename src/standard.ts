import { LuceneStandardQueryParser } from "./parsers/LuceneStandardQueryParser.js";
import * as Query from './ast/BaseQuery';

export const dotjem = {
    lucene: {
        StandardQueryParser: LuceneStandardQueryParser,
        Query
    }
};
