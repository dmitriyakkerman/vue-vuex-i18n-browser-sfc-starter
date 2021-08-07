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
4. Configure entry points in `webpack.config.js`.
5. Build your standalone JS files using one of these commands:

Build mode
```js
npm run build
```

Builed watch mode
```js
npm run start
```

This will create minified js files in `dist/js` folder.

6. Create view files in `views` folder and empty root selectors for your single file components.

```html
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

7. Connect your standalone files to the webpage.

8. Enjoy! 🎉