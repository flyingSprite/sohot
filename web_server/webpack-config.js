var Webpack = require('webpack'),
    path = require('path'),
    autoprefixer = require('autoprefixer'),
    precss = require('precss'),
    pkg = require('./../package.json');


var eslintrcPath = path.resolve(__dirname, '../.eslintrc'),
    nodeModulesPath = path.resolve(__dirname, '../node_modules'),
    buildPath = path.resolve(__dirname, '../build'),
    mainPath = path.resolve(__dirname, '../src/app.js');

// Raise tread pool size to prevent bundling stuck issue
process.env.UV_THREADPOOL_SIZE = 100;
// bootstrapCss: './node_modules/bootstrap/dist/css/bootstrap.css',
var config = {
    devtool: 'eval',
    watch: true,
    entry: {
        app: [
            'babel-polyfill',
            'webpack-hot-middleware/client',
            mainPath
        ]
    },
    output: {
        path: buildPath,
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        noParse: [/autoit\.js$/],
        preLoaders: [
            {
                test: /\.js(x)?$/,
                loader: 'eslint',
                exclude: nodeModulesPath
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: nodeModulesPath,
                query:
                {
                    presets:['react']
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test : /\.(woff|woff2|ttf|eot)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss']
    },
    eslint: {
        configFile: eslintrcPath
    },
    postcss: function () {
        return [autoprefixer, precss];
    }
};

module.exports = config;
