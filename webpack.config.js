const { VueLoaderPlugin } = require('vue-loader');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserPlugin(
                {
                    extractComments: false
                }
            )
        ]
    },
    entry: {
        'example1': ['./src/js/partial/example1/index.js'],
        'example2': ['./src/js/partial/example2/index.js']
    },
    output: {
        path: __dirname + "/dist/js/",
        filename: "[name].min.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/, use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
};