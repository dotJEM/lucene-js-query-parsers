import { LuceneStandardQueryParser } from '../src/LuceneStandardQueryParser';
import { writeFileSync } from "fs";

const parser = new LuceneStandardQueryParser();

function track() {
    const cache: any = [];
    return function(key, value) {
        if (typeof value === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) {
                return '#REF-DUPLICATE';
            }
            cache.push(value);
        }
        return value;
    }
}

function dump(value, path) {
    writeFileSync(path  || 'dump.json', JSON.stringify(value, track(), 4), 'utf-8');
}

test('name: Peter OR name: Anna NOT name: Claus OR name: Hans', () => {
    const [tree, ast] = parser.parse("name: Peter OR name: Anna NOT name: Claus OR name: Hans");
    dump(tree, 'tree.json' );

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