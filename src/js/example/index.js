import Vue from 'vue';
import Example from "./components/Example.vue";

Vue.config.productionTip = false;

new Vue({
    render: h => h(Example),
}).$mount('.example');