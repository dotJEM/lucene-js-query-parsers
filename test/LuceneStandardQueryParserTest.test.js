"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LuceneStandardQueryParser_1 = require("../src/LuceneStandardQueryParser");
var fs_1 = require("fs");
var parser = new LuceneStandardQueryParser_1.LuceneStandardQueryParser();
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
function dump(value, path) {
    fs_1.writeFileSync(path || 'dump.json', JSON.stringify(value, track(), 4), 'utf-8');
}
test('two plus two is four', function () {
    var _a = parser.parse("name: Peter OR name: Anna NOT name: Claus OR name: Peter"), tree = _a[0], ast = _a[1];
    dump(tree, 'tree.json');
    /*
    * OR (
    *   Atom (
    *     name, Peter
    *   ),
    *   Atom (
    *     name, Anna
    *   ),
    *   Not (
    *     Atom (
    *       name, Claus
    *     )
    *   ),
    *   Atom (
    *     name, Peter
    *   )
    * )
    * */
    dump(ast, 'ast.json');
    //console.log(JSON.stringify(parser.parse("name: Peter"), track(), 2));
    //expect(parser.parse("name: Peter")).toEqual({});
});
