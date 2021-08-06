import Vue from 'vue';
import {store} from "../../store";
import {i18n} from "../../lang";
import Example2 from "./components/Example2.vue";

Vue.config.productionTip = false;

new Vue({
    store,
    i18n,
    render: h => h(Example2),
}).$mount('.example2');