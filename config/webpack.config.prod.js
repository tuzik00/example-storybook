const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const paths = require('./paths');
const getClientEnvironment = require('./env');

process.env.NODE_PATH = (process.env.NODE_PATH || '')
    .split(path.delimiter)
    .filter(folder => folder && !path.isAbsolute(folder))
    .map(folder => path.resolve(appDirectory, folder))
    .join(path.delimiter);


const publicPath = '';
const publicUrl = publicPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);

if (env.stringified['process.env'].NODE_ENV !== '"production"') {
    throw new Error('Production builds must have NODE_ENV=production.');
}


module.exports = {
    devtool: 'source-map',
    entry: {
        main: [
            require.resolve('./polyfills'),
            paths.appIndexJs
        ]
    },
    output: {
        path: paths.appBuild,
        libraryTarget: 'commonjs2',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        publicPath: publicPath
    },
    resolve: {
        modules: [
            'node_modules',
            paths.appNodeModules
        ].concat(process.env.NODE_PATH.split(path.delimiter).filter(Boolean)),
        extensions: ['.js', '.json', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                use: [
                    {
                        options: {
                            formatter: eslintFormatter
                        },
                        loader: require.resolve('eslint-loader')
                    }
                ],
                include: paths.appSrc
            },
            {
                test: /\.(js|jsx)$/,
                include: paths.appSrc,
                loader: require.resolve('babel-loader')
            },
            {
                exclude: [
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.styl$/,
                    /\.css$/,
                    /\.json$/,
                    /\.bmp$/,
                    /\.gif$/,
                    /\.jpe?g$/,
                    /\.png$/,
                    /\.svg$/,
                    /\.woff$/
                ],
                loader: require.resolve('file-loader'),
                options: {
                    name: './assets/[name].[ext]'
                }
            },
            {
                test: [/\.gif$/, /\.jpe?g$/, /\.png$/, /\.bg\.svg$/],
                loader: require.resolve("url-loader"),
                options: {
                    limit: 10000,
                    name: 'assets/[name].[ext]'
                }
            },
            {
                test: /\.svg$/,
                exclude: [/\.bg\.svg$/],
                use: [
                    {
                        loader: require.resolve("react-svg-loader")
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                     {
                        loader: require.resolve("css-loader"),
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                            module: true,
                            localIdentName: '[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9'
                                    ],
                                    flexbox: 'no-2009'
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.styl$/,
                include: paths.appSrc,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 2,
                            minimize: true,
                            sourceMap: false
                        }
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            sourceMap: false,
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9'
                                    ],
                                    flexbox: 'no-2009'
                                })
                            ]
                        }
                    },
                    {
                        loader: require.resolve('stylus-loader'),
                        options: {
                            import: require.resolve('../src/styles/index.styl'),
                            resolveUrl: true,
                            sourceMap: false
                        }
                    }
                ]
            },
            {
                test: /\.(woff)$/,
                loader: require.resolve('base64-inline-loader')
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin(env.stringified),
        new UglifyJsPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    externals: {
        react: 'commonjs react'
    },
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
