import { LuceneSimplifiedWithOrderingQueryParser } from "./LuceneSimplifiedWithOrderingQueryParser";
import { LuceneStandardQueryParser } from "./LuceneStandardQueryParser";
import * as Query from './ast/BaseQuery';

export const dotJem = {
    lucene: {
        SimplifiedWithOrderingQueryParser: LuceneSimplifiedWithOrderingQueryParser,
        StandardQueryParser: LuceneStandardQueryParser,
        Query
    }
};
