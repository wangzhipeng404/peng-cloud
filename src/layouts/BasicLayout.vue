<template>
  <pro-layout
    v-model:collapsed="state.collapsed"
    v-model:selectedKeys="state.selectedKeys"
    v-model:openKeys="state.openKeys"
    :loading="loading"
    :menu-data="menuData"
    :breadcrumb="{ routes: breadcrumb }"
    disable-content-margin
    disable-content-padding
    style="min-height: 100vh"
    iconfont-url="//at.alicdn.com/t/font_2804900_2sp8hxw3ln8.js"
    v-bind="proConfig"
  >
    <template #menuHeaderRender>
      <router-link :to="{ path: '/' }">
        <img src="~@/assets/logo.svg" />
        <h1>Peng Cloud</h1>
      </router-link>
    </template>
    <template #rightContentRender>
      <RightContent :current-user="currentUser" />
    </template>
    <!-- custom breadcrumb itemRender  -->
    <template #breadcrumbRender="{ route, params, routes }">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        <HeartOutlined />
        {{ route.breadcrumbName }}
      </span>
      <router-link v-else :to="{ path: route.path, params }">
        <SmileOutlined />
        {{ route.breadcrumbName }}
      </router-link>
    </template>
    <SettingDrawer v-model="proConfig" />
    <RouterView v-slot="{ Component, route }">
      <transition name="slide-left" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </RouterView>
  </pro-layout>
</template>

<script setup>
import { reactive, ref, computed, watch } from 'vue'
import { useRouter, RouterView, RouterLink } from 'vue-router';
import { getMenuData, clearMenuItem } from '@ant-design-vue/pro-layout';
import { SmileOutlined, HeartOutlined } from '@ant-design/icons-vue';
import RightContent  from '../components/RightContent/RightContent.vue'
import SettingDrawer from '../components/SettingDrawer/SettingDrawer.vue'

const router = useRouter();
const { menuData } = getMenuData(clearMenuItem(router.getRoutes()));

const state = reactive({
  collapsed: false, // default collapsed
  openKeys: [], // defualt openKeys
  selectedKeys: [], // default selectedKeys
});
const loading = ref(false);
const proConfig = ref({
  layout: 'side',
  navTheme: 'dark',
  headerTheme: 'dark',
  fixedHeader: true,
  fixSiderbar: true,
  splitMenus: true,
});
const breadcrumb = computed(() =>
  router.currentRoute.value.matched.concat().map(item => {
    return {
      path: item.path,
      breadcrumbName: item.meta.title || '',
    };
  }),
);
const currentUser = reactive({
  nickname: 'Admin',
  avatar: 'A',
});

watch(
  router.currentRoute,
  () => {
    const matched = router.currentRoute.value.matched.concat();
    state.selectedKeys = matched.filter(r => r.name !== 'index').map(r => r.path);
    state.openKeys = matched.filter(r => r.path !== router.currentRoute.value.path).map(r => r.path);
  },
  {
    immediate: true,
  },
);
</script>
