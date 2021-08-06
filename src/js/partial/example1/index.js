import Vue from 'vue';
import {store} from "../../store";
import {i18n} from "../../lang";
import Example1 from "./components/Example1.vue";

Vue.config.productionTip = false;

new Vue({
    store,
    i18n,
    render: h => h(Example1),
}).$mount('.example1');