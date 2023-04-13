"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dotjem = void 0;
var LuceneStandardQueryParser_js_1 = require("./parsers/LuceneStandardQueryParser.js");
var BaseQuery_1 = require("./ast/BaseQuery");
exports.dotjem = {
    lucene: {
        StandardQueryParser: LuceneStandardQueryParser_js_1.LuceneStandardQueryParser,
        Query: BaseQuery_1.BaseQuery
    }
};
//# sourceMappingURL=standard.js.map