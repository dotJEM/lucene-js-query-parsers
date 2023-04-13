"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dotjem = void 0;
var LuceneOrderingQueryParser_1 = require("./parsers/LuceneOrderingQueryParser");
var BaseQuery_1 = require("./ast/BaseQuery");
exports.dotjem = {
    lucene: {
        SimplifiedWithOrderingQueryParser: LuceneOrderingQueryParser_1.LuceneOrderingQueryParser,
        Query: BaseQuery_1.BaseQuery
    }
};
//# sourceMappingURL=dotjem.js.map