const path = require('path');

module.exports = {
    // entry: './src/index.ts',
    entry: {
        all: './src/index.js',
        dotjem: './src/dotjem.js',
        standard: './src/standard.js',
        simplified: './src/simplified.js',
    },
    module: {
        rules: [
            {
                // use: 'ts-loader',
                exclude: [
                    /node_modules/,
                    /test/
                ],
            },
        ],
    },
    resolve: {
        // extensions: [ '.ts', '.js' ],
        extensions: ['.js'],
    },
    output: {
        filename: 'dotJEM-[name]-lucene-query-parsers.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'window'
    },
};