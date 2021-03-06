const path = require ('path'); 

module.export = {
    devtool: "source-map",
    entry: path.resolve('./src/index.js'),
    output: {
        path: path.resolve('./dist'),
        filename: 'main.js',
    },
    module:{
        loaders : [
            { test: /\.js$/,
            include: path.resolve('./src'),
            use: [{
                loader:["babel-loader"]
            }],
            exclude: /node_modules/,
            loaders: ["babel-loader"]
            }
        ]
    },  
    resolve: {
        module: [
            path.resolve('./node_modules')
        ]
    }
}