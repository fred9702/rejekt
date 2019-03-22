const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const siteName = "Rejekt";
const siteUrl = "http://www.rejektgallery.com/"; // Replace with website URL

module.exports = {

    entry: {
        vendor: [
            'jquery'
        ],
        homepage: './src/assets/index.js',
        about: './src/assets/about.js',
        artist: './src/assets/artist.js',
        jakub_glinski: './src/assets/artist.js',
        tomas_auksas: './src/assets/artist.js',
        exhibitions: './src/assets/exhibitions.js',
        contact: './src/assets/contact.js',
        videos: './src/assets/videos.js',
        photos: './src/assets/photos.js'
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'vendor',
                    chunks: 'initial',
                    minChunks: 2
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),

        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html',
            chunks: ['vendor', 'homepage'],
            template: '!!pug-loader!./src/pages/index.pug',
            title: 'Homepage | Rejekt',
            siteName: siteName,
            siteUrl: siteUrl,
            description: '',
            ogImage: ''
        }),

        new HtmlWebpackPlugin({
            hash: true,
            filename: 'about.html',
            chunks: ['vendor', 'about'],
            template: '!!pug-loader!./src/pages/about.pug',
            title: 'About | Rejekt',
            siteName: siteName,
            siteUrl: siteUrl,
            description: '',
            ogImage: ''
        }),

        new HtmlWebpackPlugin({
            hash: true,
            filename: 'artist.html',
            chunks: ['vendor', 'artist'],
            template: '!!pug-loader!./src/pages/artist.pug',
            title: 'Artist | Rejekt',
            siteName: siteName,
            siteUrl: siteUrl,
            description: '',
            ogImage: ''
        }),

        new HtmlWebpackPlugin({
            hash: true,
            filename: 'jakub-glinski.html',
            chunks: ['vendor', 'jakub_glinski'],
            template: '!!pug-loader!./src/pages/artists/jakub-glinski.pug',
            title: 'Jakub Glinski | Rejekt',
            siteName: siteName,
            siteUrl: siteUrl,
            description: '',
            ogImage: ''
        }),

        new HtmlWebpackPlugin({
            hash: true,
            filename: 'tomas-auksas.html',
            chunks: ['vendor', 'tomas_auksas'],
            template: '!!pug-loader!./src/pages/artists/tomas-auksas.pug',
            title: 'Tomas Auksas | Rejekt',
            siteName: siteName,
            siteUrl: siteUrl,
            description: '',
            ogImage: ''
        }),

        new HtmlWebpackPlugin({
            hash: true,
            filename: 'exhibitions.html',
            chunks: ['vendor', 'exhibitions'],
            template: '!!pug-loader!./src/pages/exhibitions.pug',
            title: 'Exhibitions | Rejekt',
            siteName: siteName,
            siteUrl: siteUrl,
            description: '',
            ogImage: ''
        }),

        new HtmlWebpackPlugin({
            hash: true,
            filename: 'contact.html',
            chunks: ['vendor', 'contact'],
            template: '!!pug-loader!./src/pages/contact.pug',
            title: 'Contact | Rejekt',
            siteName: siteName,
            siteUrl: siteUrl,
            description: '',
            ogImage: ''
        }),

        new HtmlWebpackPlugin({
            hash: true,
            filename: 'videos.html',
            chunks: ['vendor', 'videos'],
            template: '!!pug-loader!./src/pages/videos.pug',
            title: 'Videos | Rejekt',
            siteName: siteName,
            siteUrl: siteUrl,
            description: '',
            ogImage: ''
        }),

        new HtmlWebpackPlugin({
            hash: true,
            filename: 'photos.html',
            chunks: ['vendor', 'photos'],
            template: '!!pug-loader!./src/pages/photos.pug',
            title: 'Photos | Rejekt',
            siteName: siteName,
            siteUrl: siteUrl,
            description: '',
            ogImage: ''
        }),

        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
};