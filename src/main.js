import Unicon from 'vue-unicons';
import { uniSearch, uniPlay } from 'vue-unicons/src/icons';
import animate from 'animate.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import('normalize.css');

Unicon.add([uniSearch, uniPlay]);
Vue.use(Unicon);
Vue.use(animate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
