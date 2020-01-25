import './bootstrap'
import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueTippy, { TippyComponent } from "vue-tippy";

Vue.use(VueTippy);
// Vue.component("tippy", TippyComponent);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

