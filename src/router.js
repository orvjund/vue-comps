import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/About',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/Draw',
      name: 'Draw',
      component: () => import(/* webpackChunkName: "draw" */ './views/Draw.vue'),
    },
  ],
});
