import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    devtool: 'source-map',
    entry: {
        index: './src/index.ts',
        dotjem: './src/dotjem.ts',
        ordering: './src/ordering.ts',
        standard: './src/standard.ts',
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        configFile: "tsconfig.webpack.json"
                    }
                }],
                exclude: [
                    /node_modules/,
                    /test/
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts','.js']
    },
    output: {
        filename: 'dotJEM-[name]-lucene-query-parsers.js',
        path: path.resolve(__dirname, 'dist/webpack'),
        libraryTarget: 'window'
    },
};