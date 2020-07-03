"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var LuceneStandardQueryParser_js_1 = require("./parsers/LuceneStandardQueryParser.js");
var Query = __importStar(require("./ast/BaseQuery"));
exports.dotjem = {
    lucene: {
        StandardQueryParser: LuceneStandardQueryParser_js_1.LuceneStandardQueryParser,
        Query: Query
    }
};
//# sourceMappingURL=standard.js.map