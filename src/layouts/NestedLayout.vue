<template>
  <pro-layout
    v-model:selectedKeys="baseState.selectedKeys"
    v-model:openKeys="baseState.openKeys"
    :collapsed="false"
    :loading="loading"
    :breadcrumb="{ routes: breadcrumb }"
    :header-render="false"
    :fix-siderbar="true"
    :collapsed-button-render="true"
    :menu-data="routes"
    disable-content-margin
    style="min-height: 100vh"
    iconfont-url="//at.alicdn.com/t/font_2804900_2sp8hxw3ln8.js"
  >
    <template #menuHeaderRender>
      <a>
        <img src="/favicon.svg" />
      </a>
    </template>
    <!-- custom right-content -->
    <template #rightContentRender>
      <div style="margin-right: 12px">
        <a-avatar shape="square" size="small">
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
      </div>
    </template>

    <template #headerContentRender>
      <div style="height: 100%; display: flex; align-items: center">
        <a-breadcrumb>
          <a-breadcrumb-item v-for="item of breadcrumb" :key="item.path">
            <router-link :to="{ path: item.path, item: item.params }">
              {{ item.breadcrumbName }}
            </router-link>
          </a-breadcrumb-item>
        </a-breadcrumb>
      </div>
    </template>

    <!-- content begin -->
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </pro-layout>
</template>

<script setup>
import { computed, reactive, ref, watchEffect, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getMenuData, clearMenuItem } from '@ant-design-vue/pro-layout';

const loading = ref(false);
const watermarkContent = ref('Pro Layout');
const router = useRouter();
const { menuData } = getMenuData(clearMenuItem(router.getRoutes()));
// flat menus
const routes = menuData.map(item => {
  return {
    ...item,
    children: null,
  };
});
const cachedMap = menuData.reduce((pre, cur) => {
  const key = cur.name || cur.path;
  const child = cur.children || [];
  pre[key] = child;
  return pre;
}, {});

console.log('cachedMap', cachedMap);

const baseState = reactive({
  selectedKeys: ['/welcome'],
  openKeys: [],
  childrenSelectedKeys: [],
  childrenOpenKeys: [],
  collapsed: false,
});
const breadcrumb = computed(() =>
  router.currentRoute.value.matched.concat().map(item => {
    return {
      path: item.path,
      icon: item.meta.icon,
      params: item.meta?.params,
      breadcrumbName: item.meta.title || '',
    };
  }),
);
watchEffect(() => {
  if (router.currentRoute) {
    const matched = router.currentRoute.value.matched.concat();
    baseState.selectedKeys = matched.filter(r => r.name !== 'index').map(r => r.path);
    baseState.childrenSelectedKeys = matched.filter(r => r.name !== 'index').map(r => r.path);
    baseState.childrenOpenKeys = matched.filter(r => r.path !== router.currentRoute.value.path).map(r => r.path);
  }
});
onMounted(() => {
  loading.value = true;
  new Promise(resolve => {
    setTimeout(() => {
      resolve('Sendya <18x@loacg.com>');
    }, 2000);
  }).then(res => {
    watermarkContent.value = res;
    loading.value = false;
  });
});
</script>
