# vue-vuex-i18n-browser-sfc-starter

> Vue.js single file components starter-kit for use in browser with Vuex and I18n configuration

Create interactive Vue.js single file components (SFC), compile them into standalone JS files and connect to your webpage :ok_hand:

### Usage

1. Clone repository 
```js
https://github.com/dmitriyakkerman/vue-vuex-i18n-browser-sfc-starter.git
```
2. Install dependencies
```js
npm install
```
3. Create and configure you Vue.js single file components in `src/js/partial` folder using Vuex and I18n. 

```js
// partial/greeting/Greeting.vue

<template>
    <div>
        <h1>{{ $t("message.greeting") }}</h1>
    </div>
</template>

<script>
    export default {}
</script>
```

```js
// partial/greeting/main.js

import Vue from 'vue';
import {i18n} from "../../lang";

import Greeting from "./Greeting.vue";

Vue.config.productionTip = false;

new Vue({
    i18n,
    render: h => h(Greeting),
}).$mount('.greeting');
```

```js
// partial/counter/Counter.vue

<template>
    <div>
        <div>Count: {{ count }}</div>
        <div>Double count: {{ doubleCount }}</div>
        <button @click="increment">Increment count</button>
    </div>
</template>

<script>
    export default {
        computed: {
            count() {
                return this.$store.state.counter.count
            },
            doubleCount() {
                return this.$store.getters.doubleCount
            }
        },
        methods: {
            increment() {
                this.$store.commit('increment')
            }
        }
    }
</script>
```

```js
// partial/counter/main.js

import Vue from 'vue';
import {store} from "../../store";

import Counter from "./Counter.vue";

Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(Counter),
}).$mount('.counter');
```

4. Configure entry points in `webpack.config.js`.

```js
// webpack.config.js

module.exports = {
    ...
    entry: {
        'greeting': ['./src/js/partial/greeting/main.js'],
        'counter': ['./src/js/partial/counter/main.js']
    },    
    ...
};

```

5. Build your standalone JS files using one of these commands:

Build mode
```js
npm run build
```

Build watch mode
```js
npm run start
```

This will create minified js files in `dist/js` folder.

6. Create view files in `views` folder, empty root selectors for your single file components and connect your standalone files.

```html
// views/index.html

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Example</title>
</head>
<body>

    <div class="greeting"></div>
    <hr>
    <div class="counter"></div>

    <script src="../dist/js/greeting.min.js"></script>
    <script src="../dist/js/counter.min.js"></script>

</body>
</html>
```

8. Enjoy! 🎉