import { createRouter, createWebHashHistory } from 'vue-router';


export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      meta: { title: '首页' },
      redirect: '/page',
    },
    {
      name: 'page',
      path: '/page/:id?',
      meta: { title: '页面', icon: 'icon-icon-test' },
      component: () => import('../views/page/index.vue'),
    },
  ],
});
