const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        fileman:'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    devtool:'souce-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        watchContentBase: true,
    }
};