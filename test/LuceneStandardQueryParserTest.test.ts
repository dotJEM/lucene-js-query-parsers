import { LuceneStandardQueryParser } from '../src/LuceneStandardQueryParser';
import { writeFileSync } from "fs";
import {dump} from "./TestTools";

const parser = new LuceneStandardQueryParser();


test('name: Peter OR name: Anna NOT name: Claus OR name: Hans', () => {
    const [tree, ast] = parser.parse("name: Peter OR name: Anna NOT name: Claus OR name: Hans");

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


    dump(ast, 'ast.json' );

    //console.log(JSON.stringify(parser.parse("name: Peter"), track(), 2));
    //expect(parser.parse("name: Peter")).toEqual({});
});

test('age: [5 TO 10]', () => {
    const [tree, ast] = parser.parse("age: [5 TO 10] AND date: [2020-16-19T12:00 TO 2020-16-19T12:00] ");

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


    dump(ast, 'ast.json' );

    //console.log(JSON.stringify(parser.parse("name: Peter"), track(), 2));
    //expect(parser.parse("name: Peter")).toEqual({});
});