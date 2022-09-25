import { createRouter, createWebHashHistory } from 'vue-router';
import BasicLayout  from '../layouts/BasicLayout.vue';
import Home from '../views/home/index.vue';


export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      meta: { title: 'Index' },
      component: BasicLayout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          meta: { title: 'Welcome', icon: 'icon-icon-test' },
          component: Home,
        },
        {
          name: 'pages',
          path: 'pages',
          meta: { title: 'Pages', icon: 'icon-icon-test', hideChildrenInMenu: true },
          redirect: '/pages/list',
          children: [
            {
              name: 'page-list',
              path: 'list',
              meta: { title: 'list', icon: 'icon-icon-test' },
              component: () => import(/* webpackChunkName: 'page-list' */ '../views/page-list/index.vue'),
            },
            {
              path: '/pages/editor/:id?',
              name: 'pageEditor',
              meta: { hideInMenu: true, title: 'editor', icon: 'icon-icon-test',  },
              component: () => import(/* webpackChunkName: 'page-editor' */ '../views/page-editor/index.vue'),
            },
          ]
        },
        {
          path: '/compoents',
          name: 'compoents',
          meta: { title: 'Components', icon: 'icon-icon-test', hideChildrenInMenu: true },
          redirect: '/compoents/list',
          children: [
            {
              name: 'component-list',
              path: 'list',
              meta: { title: 'list', icon: 'icon-icon-test' },
              component: () => import(/* webpackChunkName: 'component-list' */ '../views/component-list/index.vue'),
            },
            {
              path: '/compoents/editor/:id?',
              name: 'editor',
              meta: { hideInMenu: true, title: 'ediort', icon: 'icon-icon-test',  },
              component: () => import(/* webpackChunkName: 'component-editor' */ '../views/component-editor/index.vue'),
            }
          ]
        },
        {
          name: 'libs',
          path: '/libs',
          meta: { title: 'Libs', icon: 'icon-icon-test', hideChildrenInMenu: true },
          redirect: '/libs/list',
          children: [
            {
              name: 'lib-list',
              path: 'list',
              meta: { title: 'list', icon: 'icon-icon-test' },
              component: () => import(/* webpackChunkName: 'lib-list' */ '../views/lib-list/index.vue'),
            },
            {
              path: '/lib/editor/:id?',
              name: 'libEditor',
              meta: { hideInMenu: true, title: 'editor', icon: 'icon-icon-test',  },
              component: () => import(/* webpackChunkName: 'lib-editor' */ '../views/lib-editor/index.vue'),
            }
          ]
        },
        {
          name: 'assets',
          path: '/assets',
          meta: { title: 'Assets', icon: 'icon-icon-test', hideChildrenInMenu: true },
          redirect: '/assets/list',
          children: [
            {
              name: 'assets-list',
              path: 'list',
              meta: { title: 'list', icon: 'icon-icon-test' },
              component: () => import(/* webpackChunkName: 'assets-list' */ '../views/asset-list/index.vue'),
            },
          ]
        },
        {
          path: '/tmagic',
          name: 'pageTmagic',
          meta: { title: 'Tmagic', icon: 'icon-icon-test',  },
          component: () => import(/* webpackChunkName: 'page-tmagic' */ '../views/tmagic/index.vue'),
        },
      ],
    },
  ],
});
