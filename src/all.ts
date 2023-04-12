import { LuceneOrderingQueryParser } from "./parsers/LuceneOrderingQueryParser";
import { LuceneStandardQueryParser } from "./parsers/LuceneStandardQueryParser";
import {BaseQuery} from "./ast/BaseQuery";

export const dotjem = {
    lucene: {
        SimplifiedWithOrderingQueryParser: LuceneOrderingQueryParser,
        StandardQueryParser: LuceneStandardQueryParser,
        Query: BaseQuery
    }
};
