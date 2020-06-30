import {writeFileSync} from "fs";
import {Query} from "../src/ast/BaseQuery";

export function track() {
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

export function dump(value, path) {
    writeFileSync(path  || 'dump.json', JSON.stringify(value, track(), 4), 'utf-8');
}

export function noop() {}
