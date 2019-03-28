import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

 
library.add(faUserSecret)
import {
  faCoffee,
  faShieldAlt,
  faFingerprint,
  faCaretRight,
  faLaptop,
 faBars,
 faSquare,
 faCalendar,
 faCircle,
 faPencilAlt,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons"; //fas fa

import {
  faLinkedinIn,
  faFacebookSquare,
  faTwitter,
  faGoogle,
  faYoutube,
  faInstagram,
  faDribbble
} from "@fortawesome/free-brands-svg-icons"; //fab
import { faCommentAlt } from "@fortawesome/free-regular-svg-icons"; //far
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCoffee, faCircle,faPencilAlt,faBars,faCalendar, faSquare, faQuoteLeft,faChevronRight,faLaptop); //fas

library.add(); //far
library.add(faLinkedinIn); //fab
library.add(
  faCoffee,
  faShieldAlt,
  faFingerprint,
  faCaretRight,
  faLaptop,
  faChevronRight
); //fas
library.add(faCommentAlt); //far
library.add(
  faLinkedinIn,
  faFacebookSquare,
  faTwitter,
  faGoogle,
  faYoutube,
  faInstagram,
  faDribbble
); //fab

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
