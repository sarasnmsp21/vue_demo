import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons' //fas fa

import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons' //fab
import {  } from '@fortawesome/free-regular-svg-icons' //far

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faCoffee) //fas
library.add() //far
library.add(faLinkedinIn) //fab

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(BootstrapVue)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
