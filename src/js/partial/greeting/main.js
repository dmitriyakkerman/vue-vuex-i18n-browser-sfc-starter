import Vue from 'vue';
import {i18n} from "../../lang";

import Greeting from "./Greeting.vue";

Vue.config.productionTip = false;

new Vue({
    i18n,
    render: h => h(Greeting),
}).$mount('.greeting');