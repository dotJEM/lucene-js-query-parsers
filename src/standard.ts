import { LuceneStandardQueryParser } from "./parsers/LuceneStandardQueryParser.js";
import {BaseQuery} from "./ast/BaseQuery";

export const dotjem = {
    lucene: {
        StandardQueryParser: LuceneStandardQueryParser,
        Query: BaseQuery
    }
};
