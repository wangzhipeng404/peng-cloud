import { createRouter, createWebHashHistory } from 'vue-router';
import BasicLayout  from '../layouts/BasicLayout.vue';
import Home from '../views/home/index.vue';
import Runtime from '../views/page/runtime'


export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      meta: { title: '首页' },
      component: BasicLayout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          meta: { title: '欢迎', icon: 'icon-icon-test' },
          component: Home,
        },
        {
          name: 'pages',
          path: 'pages',
          meta: { title: '页面管理', icon: 'icon-icon-test', hideChildrenInMenu: true },
          redirect: '/pages/list',
          children: [
            {
              name: 'page-list',
              path: 'list',
              meta: { title: '列表', icon: 'icon-icon-test' },
              component: () => import(/* webpackChunkName: 'page-list' */ '../views/page-list/index.vue'),
            },
            {
              path: '/pages/editor/:id?',
              name: 'pageEditor',
              meta: { hideInMenu: true, title: '编辑', icon: 'icon-icon-test',  },
              component: () => import(/* webpackChunkName: 'page-editor' */ '../views/page-editor/index.vue'),
            },
          ]
        },
        {
          path: '/compoents',
          name: 'compoents',
          meta: { title: '组件管理', icon: 'icon-icon-test', hideChildrenInMenu: true },
          redirect: '/compoents/list',
          children: [
            {
              name: 'component-list',
              path: 'list',
              meta: { title: '列表', icon: 'icon-icon-test' },
              component: () => import(/* webpackChunkName: 'component-list' */ '../views/component-list/index.vue'),
            },
            {
              path: '/compoents/editor/:id?',
              name: 'editor',
              meta: { hideInMenu: true, title: '编辑', icon: 'icon-icon-test',  },
              component: () => import(/* webpackChunkName: 'component-editor' */ '../views/component-editor/index.vue'),
            }
          ]
        },
        {
          name: 'libs',
          path: '/libs',
          meta: { title: '库管理', icon: 'icon-icon-test', hideChildrenInMenu: true },
          redirect: '/libs/list',
          children: [
            {
              name: 'lib-list',
              path: 'list',
              meta: { title: '列表', icon: 'icon-icon-test' },
              component: () => import(/* webpackChunkName: 'lib-list' */ '../views/lib-list/index.vue'),
            },
            {
              path: '/lib/editor/:id?',
              name: 'libEditor',
              meta: { hideInMenu: true, title: '编辑', icon: 'icon-icon-test',  },
              component: () => import(/* webpackChunkName: 'page-editor' */ '../views/lib-editor/index.vue'),
            }
          ]
        },
        {
          name: 'assets',
          path: '/assets',
          meta: { title: '静态资源', icon: 'icon-icon-test', hideChildrenInMenu: true },
          redirect: '/assets/list',
          children: [
            {
              name: 'assets-list',
              path: 'list',
              meta: { title: '列表', icon: 'icon-icon-test' },
              component: () => import(/* webpackChunkName: 'assets-list' */ '../views/asset-list/index.vue'),
            },
          ]
        },
        {
          path: '/tmagic',
          name: 'pageTmagic',
          meta: { title: 'TMagic', icon: 'icon-icon-test',  },
          component: () => import(/* webpackChunkName: 'page-tmagic' */ '../views/page-editor/tmagic.vue'),
        },
      ],
    },
    {
      name: 'preview',
      path: '/preview',
      meta: { title: '预览', icon: 'icon-icon-test', hideInMenu: true },
      component: () => import(/* webpackChunkName: 'lib-list' */ '../views/preview/Preview.vue'),
    },
    {
      name: 'runtime',
      path: '/runtime',
      meta: { title: 'runtime', icon: 'icon-icon-test', hideInMenu: true },
      component: Runtime,
    },
  ],
});
