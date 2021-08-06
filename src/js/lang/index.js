import Vue from 'vue'
import VueI18n from 'vue-i18n'

import {messages} from "./messages/example";

Vue.use(VueI18n);

export const i18n = new VueI18n({
    locale: 'en',
    messages
});