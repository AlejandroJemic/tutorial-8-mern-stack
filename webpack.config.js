const path = require ('path'); 

module.export = {
    devtool: "source-map",
    entry: path.resolve('./src/index.js'),
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js',
    },
    module:{
        loaders : [
            {test:  /\.js$/,
            exclude: /node_modules/,
            loaders: ["babel-loader"]
            }
        ]
    },
    resolve: {
        module: [
            path.join(__dirname,'node_modules')
        ]
    }
}