import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCameraRetro, faTerminal, faRetweet } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faGithub,
  faMedium,
  faDev,
} from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

import router from './router';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

library.add(faCameraRetro, faLinkedin,
  faInstagram, faMedium, faDev, faCopyright,
  faTerminal, faGithub, faTwitter, faRetweet, faComment, faHeart);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(require('vue-moment'));

Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
