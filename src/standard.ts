import { LuceneStandardQueryParser } from "./parsers/LuceneStandardQueryParser";
import {BaseQuery} from "./ast/BaseQuery";

export const dotjem = {
    lucene: {
        StandardQueryParser: LuceneStandardQueryParser,
        Query: BaseQuery
    }
};
