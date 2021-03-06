const base = require('./webpack.config')
const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const lintConfig = require('./.eslintrc.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')
module.exports = merge(base, {
    mode: 'production',
    entry: {
        index: './example/Example.tsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/ZEROUI',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Zero-UI-React',
            template: './example/example.html',
            favicon: './example/favicon_32x32.png',
        }),
        new CleanWebpackPlugin(),
        new ESLintPlugin({
            baseConfig: lintConfig,
            failOnError: true,
            failOnWarning: true,
            emitError: true,
            fix: true,
            ignorePath: '.eslintignore',
            quiet: true,
        }),
    ],
})
