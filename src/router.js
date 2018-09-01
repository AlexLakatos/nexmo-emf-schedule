import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);
let day = new Date().getDay();

if (day < 6) {
  day = 'friday';
} else if (day == 6) {
  day = 'saturday';
} else {
  day = 'sunday';
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: `/schedule/${day}`,
    },
    {
      path: '/talk/:slug',
      name: 'talk',
      component: () => import('./views/Talk.vue'),
    },
    {
      path: '/schedule/:day',
      name: 'schedule',
      component: () => import('./views/Schedule.vue'),
    },
  ],
});
