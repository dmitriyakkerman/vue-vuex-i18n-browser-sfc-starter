# vue-vuex-i18n-browser-sfc-starter

> Vue.js single file components starter-kit for use in browser with Vuex and I18n configuration

Create interactive Vue.js single file components (SFC), compile them into standalone JS files and connect to your webpage :ok_hand:

## Usage

1. Clone repository 
```js
https://github.com/dmitriyakkerman/vue-vuex-i18n-browser-sfc-starter.git
```
2. Install dependencies
```js
npm install
```

3. Configure your Vuex store modules in `src/js/store` folder.

###### "Counter" state example

```js
// src/js/store/modules/counter.js

export default {
    state: {
        count: 1
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    getters: {
        doubleCount(state) {
            return state.count * 2;
        }
    }
}
```

```js
// src/js/store/index.js

import Vue from "vue";
import Vuex from 'vuex'

import counter from "./modules/counter";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        counter
    }
});
```

4. Configure your I18n localization in `src/js/lang` folder.

```js
// src/js/lang/messages.js

export const messages = {
    en: {
        message: {
            greeting: 'Hello world!'
        }
    },
    ru: {
        message: {
            greeting: 'Привет, мир!'
        }
    }
};
```

```js
// src/js/lang/index.js

import Vue from 'vue'
import VueI18n from 'vue-i18n'

import {messages} from "./messages";

Vue.use(VueI18n);

export const i18n = new VueI18n({
    locale: 'en',
    messages
});
```

5. Create and configure you Vue.js single file components in `src/js/partial` folder using Vuex and I18n. 

###### "Greeting" component example

```js
// src/js/partial/greeting/Greeting.vue

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
// src/js/partial/greeting/main.js

import Vue from 'vue';
import {i18n} from "../../lang";

import Greeting from "./Greeting.vue";

Vue.config.productionTip = false;

new Vue({
    i18n,
    render: h => h(Greeting),
}).$mount('.greeting');
```

###### "Counter" component example

```js
// src/js/partial/counter/Counter.vue

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
// src/js/partial/counter/main.js

import Vue from 'vue';
import {store} from "../../store";

import Counter from "./Counter.vue";

Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(Counter),
}).$mount('.counter');
```

6. Configure entry points in `webpack.config.js`.

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

7. Build your standalone JS files using one of these commands:

Build mode
```js
npm run build
```

Build watch mode
```js
npm run start
```

This will create minified js files in `dist/js` folder.

8. Create view files in `views` folder, create root selectors for your single file components and connect your compiled standalone JS files.

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

9. Enjoy! 🎉

## Important note
Each compiled standalone JS file includes Vue.js by default.

Please, consider **removing** Vue.js import from any of your js files(especially in case you use multiple compiled SFC on the same page) and **connecting** Vue.js globally via CDN.

This will extremely reduce the size of you compiled SFC :point_up:

```diff
// src/js/store/index.js

- import Vue from "vue";
...
```

```diff
// src/js/lang/index.js

- import Vue from 'vue'
...
```

```diff
// src/js/partial/greeting/main.js

- import Vue from 'vue'
...
```

```diff
// src/js/partial/counter/main.js

- import Vue from 'vue'
```

```diff
// views/index.html

...
+ <script src="https://unpkg.com/vue"></script>
...

```