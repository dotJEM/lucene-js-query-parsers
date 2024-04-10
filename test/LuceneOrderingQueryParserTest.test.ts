import {BaseQuery} from '../src/ast/BaseQuery';
import {LuceneOrderingQueryParser} from '../src/parsers/LuceneOrderingQueryParser';
import {dump} from "./TestTools";

function it(query: string, expected?: string) {
    test(query, () => {
        const ast = parser.parse(query);
        console.log(query);
        console.log(ast);
        dump(ast, 'ast.json');
        expect(ast.toString()).toEqual(expected ?? query);

    });
}


const parser: LuceneOrderingQueryParser = new LuceneOrderingQueryParser();
it('*:*');
it('name:Peter');
it('name:(Peter OR Anna)');
it('age:[5 TO 9]');
it('age:[5 TO *]');
it('age:[* TO 9]');
it('age:[2345 TO 2110]');
it('height:[1.6 TO 2.0]');
it('height:[* TO 2.0]');
it('height:[1.6 TO *]');
it('born:[2020-03-02 TO 2020-03-25]');
it('born:[2020-03-02T21:21:00 TO 2020-03-25T21:23:00]');
it('born:[2020-03-02T21:24:00+01:00 TO 2020-03-25T21:24:00+01:00]');
it('born:[* TO 2020-03-25T21:24:00+01:00]');
it('born:[2020-03-02T21:24:00+01:00 TO *]');
it('born:[-5days TO *]');
it('born:[TODAY+5D TO *]');
it('age:[5 TO 10] ORDER BY foo');
it('  age: [5 TO 10] ORDER BY foo DESC, fax ASC, fox', 'age:[5 TO 10] ORDER BY foo DESC,fax ASC,fox');
it('(name:Peter AND age:[10 TO 100])');
it('name: Peter OR name: Anna NOT name: Claus OR name: Hans', "(name:Peter OR (name:Anna AND NOT name:Claus) OR name:Hans)");
it('name: Peter OR name: Anna NOT name: "Claus Parsø" OR name: Hans', "(name:Peter OR (name:Anna AND NOT name:\"Claus Parsø\") OR name:Hans)");
it('name: Peter OR name: Anna NOT name: Claus* OR name: Hans', "(name:Peter OR (name:Anna AND NOT name:Claus*) OR name:Hans)");
it('(name: Peter OR name: Anna) AND (age: 5 OR age: [8 TO 10])', "((name:Peter OR name:Anna) AND (age:5 OR age:[8 TO 10]))");
it('ship.name: FooBarasd AND $version: [6 TO *] AND $created: [2020-03-02T21:24:00+01:00 TO 2020-03-25] AND contentType: notification AND id: 123', "(ship.name:FooBarasd AND $version:[6 TO *] AND $created:[2020-03-02T21:24:00+01:00 TO 2020-03-25] AND contentType:notification AND id:123)");
it('$created: [2020-03-02T21:24:00+01:00 TO 2020-03-25T21:24:00+01:00]', "$created:[2020-03-02T21:24:00+01:00 TO 2020-03-25T21:24:00+01:00]");
it('$created: [2020-03-02T21:24:00+01:00 TO *]', "$created:[2020-03-02T21:24:00+01:00 TO *]");
it('$created: [22 TO *]', "$created:[22 TO *]");
it('ship.name: FooBarasd AND $version: [6 TO 10] AND $created: [2020-03-02T21:24:00+01:00 TO 2020-03-25] AND contentType: notification AND id: 123', "(ship.name:FooBarasd AND $version:[6 TO 10] AND $created:[2020-03-02T21:24:00+01:00 TO 2020-03-25] AND contentType:notification AND id:123)");
it('ship.name: FooBarasd AND $created: [2020-03-02T21:24:00+01:00 TO 2020-03-25] AND contentType: notification AND id: 123', "(ship.name:FooBarasd AND $created:[2020-03-02T21:24:00+01:00 TO 2020-03-25] AND contentType:notification AND id:123)");
it('$version: [6.6 TO *]', '$version:[6.6 TO *]');
it('$version: [6 TO * ]', '$version:[6 TO *]');
it('$version: [ 6 TO * ]', '$version:[6 TO *]');
it('name: Peter Hansen', '(name:Peter AND Hansen)');
