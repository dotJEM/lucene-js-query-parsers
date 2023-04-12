import { LuceneOrderingQueryParser } from '../src/parsers/LuceneOrderingQueryParser';
import {dump, noop} from "./TestTools";
import {Query} from "../src/ast/BaseQuery";

const parser: LuceneOrderingQueryParser = new LuceneOrderingQueryParser();

function it(query: string, fn?: any|Query) {
    test(query, () => {
        const ast = parser.parse(query);
        //console.log(query);
        console.log(ast);
        dump(ast, 'ast.json' );
    });
}

it('*:*', () => {});



it('age: [5 TO 9]', noop);
it('age: [5 TO *]', noop);
it('age: [* TO 9]', noop);
it('age: [2345 TO 2110]', noop);
it('height: [1.6 TO 2.0]', noop);
it('height: [* TO 2.0]', noop);
it('height: [1.6 TO *]', noop);
it('born: [2020-03-02 TO 2020-03-25]', noop);
it('born: [2020-03-02T21:21:00 TO 2020-03-25T21:23:00]', noop);
it('born: [2020-03-02T21:24:00+01:00 TO 2020-03-25T21:24:00+01:00]', noop);
it('born: [* TO 2020-03-25T21:24:00+01:00]', noop);
it('born: [2020-03-02T21:24:00+01:00 TO *]', noop);
it('born: [-5days TO *]', noop);
it('born: [TODAY+5D TO *]', noop);
it('age: [5 TO 10] ORDER BY foo', () => {});
it('  age: [5 TO 10] ORDER BY foo DESC, fax ASC, fox', () => {});
it('name: Peter', () => {});
it('name: Peter AND age: [10 TO 100]', () => {});
it('name: Peter OR name: Anna NOT name: Claus OR name: Hans', () => {});
it('name: Peter OR name: Anna NOT name: "Claus Parsø" OR name: Hans', () => {});
it('name: Peter OR name: Anna NOT name: Claus* OR name: Hans', () => {});
it('(name: Peter OR name: Anna) AND (age: 5 OR age: [8 TO 10])', () => {});
it('ship.name: FooBarasd AND $version: [6 TO *] AND $created: [2020-03-02T21:24:00+01:00 TO 2020-03-25] AND contentType: notification AND id: 123', () => {});
it('$created: [2020-03-02T21:24:00+01:00 TO 2020-03-25T21:24:00+01:00]', () => {});
it('$created: [2020-03-02T21:24:00+01:00 TO *]', () => {});
it('$created: [22 TO *]', () => {});
it('ship.name: FooBarasd AND $version: [6 TO 10] AND $created: [2020-03-02T21:24:00+01:00 TO 2020-03-25] AND contentType: notification AND id: 123', () => {});
it('ship.name: FooBarasd AND $created: [2020-03-02T21:24:00+01:00 TO 2020-03-25] AND contentType: notification AND id: 123', () => {});
it('$version: [6.6 TO *]', () => {});
it('$version: [6 TO * ]', () => {});
it('$version: [ 6 TO * ]', () => {});
it('name: Peter Hansen', () => {});
