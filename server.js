// nn-001 este archivo sirve los archivos estatico
// hace un hot recompile cuando se cambian los fuentes

const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const path = require ('path'); 

const app = express();
const compiler = webpack(webpackConfig)//crea el compilador

//agrega los middlewares
app.use(express.static(__dirname + 'www')); //sirve los archivos  estaticos
app.use(express.static(__dirname + '/dist')); //sirve los archivos compilados
app.use(webpackDevMiddleware(compiler,{
    hot: true,
    publicPath: path.resolve('./dist'),
    filename:'main.js',
    stats:{
        colors: true
    },
    historyApiFallback: true
}));

app.use(webpackHotMiddleware(compiler,{
    log: console.log
}));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './www/index.html'));
  });

const server = app.listen(3000, () => console.log('listening on 3000'));