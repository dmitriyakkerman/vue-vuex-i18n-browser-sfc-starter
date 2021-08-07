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
        'greeting': ['./src/js/partial/greeting/main.js'],
        'counter': ['./src/js/partial/counter/main.js']
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