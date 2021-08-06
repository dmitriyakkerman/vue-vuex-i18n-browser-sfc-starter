import Vue from 'vue';
import {store} from "../store";
import Example from "./components/Example.vue";

Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(Example),
}).$mount('.example');