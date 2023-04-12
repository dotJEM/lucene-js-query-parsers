const path = require('path');

export default {
    devtool: 'source-map',
    entry: {
        all: './src/all.js',
        dotjem: './src/dotjem.js',
        standard: './src/standard.js',
        ordering: './src/ordering.js',
    },
    module: {
        rules: [
            {
                //use: 'ts-loader',
                exclude: [
                    /node_modules/,
                    /test/
                ],
            },
        ],
    },
    resolve: {
        //extensions: [ '.ts', '.js' ],
        extensions: ['.js'],
    },
    output: {
        filename: 'dotJEM-[name]-lucene-query-parsers.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'window'
    },
};