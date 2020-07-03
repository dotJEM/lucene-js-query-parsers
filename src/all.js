"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var LuceneOrderingQueryParser_1 = require("./parsers/LuceneOrderingQueryParser");
var LuceneStandardQueryParser_1 = require("./parsers/LuceneStandardQueryParser");
var Query = __importStar(require("./ast/BaseQuery"));
exports.dotjem = {
    lucene: {
        SimplifiedWithOrderingQueryParser: LuceneOrderingQueryParser_1.LuceneOrderingQueryParser,
        StandardQueryParser: LuceneStandardQueryParser_1.LuceneStandardQueryParser,
        Query: Query
    }
};
//# sourceMappingURL=all.js.map