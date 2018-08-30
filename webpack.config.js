import path = require ('path'); 

module.export = {
    devtool: "source-map",
    context: path.join('__dirname', src),
    entry: ["./main.js" ],
    output: {
        path: path.join(__dirname, 'www'),
        filename: "bundle.js",
         publicPath: "/dist"
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