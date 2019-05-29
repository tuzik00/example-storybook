const path = require("path");
const autoprefixer = require("autoprefixer");
const paths = require('../config/paths');


module.exports = {
    module: {
        rules: [
            {
                exclude: [
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.css$/,
                    /\.styl$/,
                    /\.json$/,
                    /\.bmp$/,
                    /\.gif$/,
                    /\.svg$/,
                    /\.jpe?g$/,
                    /\.png$/,
                    /\.ejs$/
                ],
                loader: require.resolve("file-loader"),
                options: {
                    name: "static/media/[name].[hash:8].[ext]"
                }
            },
            {
                test: [/\.gif$/, /\.jpe?g$/, /\.png$/, /\.bg\.svg$/],
                loader: require.resolve("url-loader"),
                options: {
                    limit: 10000
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
                test: /\.styl$/,
                include: path.resolve(__dirname, "../"),
                use: [
                    require.resolve("style-loader"),
                    {
                        loader: require.resolve("css-loader"),
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                            module: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader: require.resolve("postcss-loader"),
                        options: {
                            ident: "postcss",
                            sourceMap: true,
                            plugins: () => [
                                require("postcss-flexbugs-fixes"),
                                autoprefixer({
                                    browsers: [
                                        ">1%",
                                        "last 4 versions",
                                        "Firefox ESR",
                                        "not ie < 9"
                                    ],
                                    flexbox: "no-2009"
                                })
                            ]
                        }
                    },
                    {
                        loader: require.resolve("stylus-loader"),
                        options: {
                            import: require.resolve("../src/styles/index.styl"),
                            resolveUrl: true,
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "../"),
                loader: require.resolve("css-loader")
            }
        ]
    }
};
