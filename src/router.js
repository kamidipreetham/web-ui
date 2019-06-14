import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('./views/Projects.vue'),
    },
    {
      path: '/projects/memance',
      name: 'memance',
      component: () => import('./views/Memance.vue'),
    },
    {
      path: '/projects/verify',
      name: 'verify',
      component: () => import('./views/VerifyTweet.vue'),
    },
    {
      path: '/projects/nwtest',
      name: 'nwtest',
      component: () => import('./views/Nwtest.vue'),
    },
    {
      path: '/photography',
      name: 'photography',
      component: () => import('./views/Photography.vue'),
    },
  ],
});
