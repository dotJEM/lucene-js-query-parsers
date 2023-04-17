import {writeFileSync} from "fs";

export function track() {
    const cache: any = [];
    return function(key, value): string|any {
        if (typeof value === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) {
                return '#REF-DUPLICATE';
            }
            cache.push(value);
        }
        return value;
    }
}

export const dump = (value, path): void => {
    writeFileSync(path  || 'dump.json', JSON.stringify(value, track(), 4), 'utf-8');
}

export const noop = (): void => {}
