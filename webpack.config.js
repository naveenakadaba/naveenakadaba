const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const path = require('path');
const packageJson = require('./package.json');

const mode = process.argv.indexOf('--production') > -1 ? 'production' : 'development';

const optimization = {
    splitChunks: {
        chunks: 'async',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        automaticNameMaxLength: 30,
        name: true,
        cacheGroups: {
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10
            },
            default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true
            }
        }
    }
};

const plugins = [
    new CleanWebpackPlugin({
        dry: false,
        cleanOnceBeforeBuildPatterns: [
            path.join(__dirname, 'dist')
        ]
    }),

    new CopyWebpackPlugin({
        patterns: [{
            from: 'public/img/favicon.png',
            to: 'public/img/favicon.png'
        }]
    })
];

switch (mode) {
    case 'development': {
        plugins.push(
            new BundleAnalyzerPlugin({
                analyzerPort: 9001
            })
        );

        break;
    }

    case 'production': {
        optimization.usedExports = true;
        optimization.minimize = true;

        optimization.minimizer = [
            new TerserPlugin({
                parallel: true,
                extractComments: false,
                terserOptions: {
                    output: {
                        comments: false
                    },
                    ecma: 5,
                    ie8: true,
                    safari10: true
                }
            })
        ];

        plugins.push(new CompressionPlugin({
            test: /\.js$/,
            filename: '[path][base].gz',
            algorithm: 'gzip',
            compressionOptions: {
                level: 9
            },
            minRatio: Number.MAX_SAFE_INTEGER,
            deleteOriginalAssets: false
        }));

        plugins.push(new CompressionPlugin({
            test: /\.js$/,
            filename: '[path][base].br',
            algorithm: 'brotliCompress',
            compressionOptions: {
                level: 11
            },
            minRatio: Number.MAX_SAFE_INTEGER,
            deleteOriginalAssets: false
        }));

        break;
    }
}

plugins.push(
    new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public/index.html'),
        filename: 'index.html',
        inject: 'body',
        minify: false,
        cache: false
    })
);

plugins.push(new PreloadWebpackPlugin({
    rel: 'prefetch',
    include: 'allChunks'
}));

const alias = {};

Object.keys(packageJson.dependencies).map((dependency) => {
    alias[dependency] = path.join(__dirname, 'node_modules/' + dependency);
});

module.exports = function () {
    return {
        mode: mode,

        watch: mode === 'development',

        entry: {
            app: path.join(__dirname, 'src')
        },

        output: {
            filename: 'js/[name].[contenthash].js',
            path: path.join(__dirname, 'dist'),
            publicPath: '/'
        },

        module: {
            rules: [{
                enforce: 'pre',
                test: /\.jsx?$/i,
                exclude: /node_modules|dist/,
                loader: 'eslint-loader',
                options: {
                    cache: true,
                    emitError: true,
                    emitWarning: true,
                    failOnError: false,
                    failOnWarning: false
                }
            },

            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true
                }
            },

            {
                test: /\.(jpg|png|svg)/i,
                exclude: /node_modules/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: Infinity,
                        name: 'img/[name].[ext]'
                    }
                }]
            }]
        },

        plugins: plugins,

        optimization: optimization,

        resolve: {
            modules: [
                'node_modules'
            ],
            alias: {
                'src': path.join(__dirname, 'src'),
                'img': path.join(__dirname, 'public/img'),
                ...alias
            }
        },

        devServer: {
            historyApiFallback: true
        }
    };
};
