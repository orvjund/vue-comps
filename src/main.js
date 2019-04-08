import Unicon from 'vue-unicons';
import { uniSearch } from 'vue-unicons/src/icons';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import('normalize.css');

Unicon.add(uniSearch);
Vue.use(Unicon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
