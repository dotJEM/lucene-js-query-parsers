import {BaseQuery} from '../src/ast/BaseQuery';
import {LuceneOrderingQueryParser} from '../src/parsers/LuceneOrderingQueryParser';
import {LuceneStandardQueryParser} from '../src/parsers/LuceneStandardQueryParser';
import {dump} from "./TestTools";
interface IParser {
    parse(query:string):BaseQuery;
}
interface IParserCtor {
    new():IParser;
}

function executeTest(query: string, expected: string, parser: IParserCtor) {
    test(`${parser.name}(${query})`, () => {
        const ast = new parser().parse(query);
        expect(ast.toString())
            .toEqual(expected);
    });
}

function testQuery(query: string, expected?: string) {
    return {
        for: (...parsers: IParserCtor[]) => {
            for(let parser of parsers.flat(Infinity)){
                executeTest(query, expected ?? query, parser);
            }
        }
    }
}
const standard = LuceneStandardQueryParser;
const ordering = LuceneOrderingQueryParser;
const all = [LuceneStandardQueryParser, LuceneOrderingQueryParser];

// testQuery('*:*').for(...all);
// testQuery('name:Peter').for(...all);
// testQuery('name:(Peter OR Anna)').for(...all);
testQuery('age:[5 TO 9]').for(...all);
// testQuery('age:[5 TO *]').for(...all);
// testQuery('age:[* TO 9]').for(...all);
// testQuery('age:[2345 TO 2110]').for(...all);
// testQuery('height:[1.6 TO 2.0]').for(...all);
// testQuery('height:[* TO 2.0]').for(...all);
// testQuery('height:[1.6 TO *]').for(...all);
// testQuery('born:[2020-03-02 TO 2020-03-25]').for(...all);
// testQuery('born:[2020-03-02T21:21:00 TO 2020-03-25T21:23:00]').for(...all);
// testQuery('born:[2020-03-02T21:24:00+01:00 TO 2020-03-25T21:24:00+01:00]').for(...all);
// testQuery('born:[* TO 2020-03-25T21:24:00+01:00]').for(...all);
// testQuery('born:[2020-03-02T21:24:00+01:00 TO *]').for(...all);
// testQuery('born:[-5days TO *]').for(...all);
// testQuery('born:[TODAY+5D TO *]').for(...all);
// testQuery('age:[5 TO 10] ORDER BY foo').for(...all);
// testQuery('  age: [5 TO 10] ORDER BY foo DESC, fax ASC, fox', 'age:[5 TO 10] ORDER BY foo DESC,fax ASC,fox').for(...all);
// testQuery('(name:Peter AND age:[10 TO 100])').for(...all);
// testQuery('name: Peter OR name: Anna NOT name: Claus OR name: Hans', "(name:Peter OR (name:Anna AND NOT name:Claus) OR name:Hans)").for(...all);
// testQuery('name: Peter OR name: Anna NOT name: "Claus Parsø" OR name: Hans', "(name:Peter OR (name:Anna AND NOT name:\"Claus Parsø\") OR name:Hans)").for(...all);
// testQuery('name: Peter OR name: Anna NOT name: Claus* OR name: Hans', "(name:Peter OR (name:Anna AND NOT name:Claus*) OR name:Hans)").for(...all);
// testQuery('(name: Peter OR name: Anna) AND (age: 5 OR age: [8 TO 10])', "((name:Peter OR name:Anna) AND (age:5 OR age:[8 TO 10]))").for(...all);
// testQuery('ship.name: FooBarasd AND $version: [6 TO *] AND $created: [2020-03-02T21:24:00+01:00 TO 2020-03-25] AND contentType: notification AND id: 123', "(ship.name:FooBarasd AND $version:[6 TO *] AND $created:[2020-03-02T21:24:00+01:00 TO 2020-03-25] AND contentType:notification AND id:123)").for(...all);
// testQuery('$created: [2020-03-02T21:24:00+01:00 TO 2020-03-25T21:24:00+01:00]', "$created:[2020-03-02T21:24:00+01:00 TO 2020-03-25T21:24:00+01:00]").for(...all);
// testQuery('$created: [2020-03-02T21:24:00+01:00 TO *]', "$created:[2020-03-02T21:24:00+01:00 TO *]").for(...all);
// testQuery('$created: [22 TO *]', "$created:[22 TO *]").for(...all);
// testQuery('ship.name: FooBarasd AND $version: [6 TO 10] AND $created: [2020-03-02T21:24:00+01:00 TO 2020-03-25] AND contentType: notification AND id: 123', "(ship.name:FooBarasd AND $version:[6 TO 10] AND $created:[2020-03-02T21:24:00+01:00 TO 2020-03-25] AND contentType:notification AND id:123)").for(...all);
// testQuery('ship.name: FooBarasd AND $created: [2020-03-02T21:24:00+01:00 TO 2020-03-25] AND contentType: notification AND id: 123', "(ship.name:FooBarasd AND $created:[2020-03-02T21:24:00+01:00 TO 2020-03-25] AND contentType:notification AND id:123)").for(...all);
// testQuery('$version: [6.6 TO *]', '$version:[6.6 TO *]').for(...all);
// testQuery('$version: [6 TO * ]', '$version:[6 TO *]').for(...all);
// testQuery('$version: [ 6 TO * ]', '$version:[6 TO *]').for(...all);
// testQuery('name: Peter Hansen', '(name:Peter AND Hansen)').for(...all);
// testQuery('(contentType:notification AND status:(DRAFT OR   PREDEPARTURE OR   24HOURPREARRIVAL OR   72HOURPREARRIVAL))', '(contentType:notification AND status:(DRAFT OR PREDEPARTURE OR 24HOURPREARRIVAL OR 72HOURPREARRIVAL))').for(...all)
