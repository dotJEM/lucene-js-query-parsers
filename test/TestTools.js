"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
function track() {
    var cache = [];
    return function (key, value) {
        if (typeof value === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) {
                return '#REF-DUPLICATE';
            }
            cache.push(value);
        }
        return value;
    };
}
exports.track = track;
function dump(value, path) {
    fs_1.writeFileSync(path || 'dump.json', JSON.stringify(value, track(), 4), 'utf-8');
}
exports.dump = dump;
function noop() { }
exports.noop = noop;
//# sourceMappingURL=TestTools.js.map