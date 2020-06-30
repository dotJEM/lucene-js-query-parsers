"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LuceneStandardQueryParser_1 = require("../src/LuceneStandardQueryParser");
var TestTools_1 = require("./TestTools");
var parser = new LuceneStandardQueryParser_1.LuceneStandardQueryParser();
test('name: Peter OR name: Anna NOT name: Claus OR name: Hans', function () {
    var _a = parser.parse("name: Peter OR name: Anna NOT name: Claus OR name: Hans"), tree = _a[0], ast = _a[1];
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
    TestTools_1.dump(ast, 'ast.json');
    //console.log(JSON.stringify(parser.parse("name: Peter"), track(), 2));
    //expect(parser.parse("name: Peter")).toEqual({});
});
test('age: [5 TO 10]', function () {
    var _a = parser.parse("age: [5 TO 10] AND date: [2020-16-19T12:00 TO 2020-16-19T12:00] "), tree = _a[0], ast = _a[1];
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
    TestTools_1.dump(ast, 'ast.json');
    //console.log(JSON.stringify(parser.parse("name: Peter"), track(), 2));
    //expect(parser.parse("name: Peter")).toEqual({});
});
//# sourceMappingURL=LuceneStandardQueryParserTest.test.js.map