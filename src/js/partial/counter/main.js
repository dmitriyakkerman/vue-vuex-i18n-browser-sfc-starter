import Vue from 'vue';
import {store} from "../../store";

import Counter from "./Counter.vue";

Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(Counter),
}).$mount('.counter');