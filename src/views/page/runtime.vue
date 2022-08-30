<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <magic-ui-page v-if="pageConfig" :config="pageConfig"></magic-ui-page>
</template>

<script>
import { computed, defineComponent, nextTick, provide, reactive, ref, watch } from 'vue';
import Core from '@tmagic/core';
import { getNodePath } from '@tmagic/utils';
export default defineComponent({
  setup() {
    const root = ref();
    const curPageId = ref();
    const selectedId = ref();
    const pageConfig = computed(
      () => root.value?.items?.find((item) => item.id === curPageId.value) || root.value?.items?.[0],
    );
    const app = new Core({
      config: root.value,
      platform: 'editor',
    });
    provide('app', app);
    watch(pageConfig, async () => {
      await nextTick();
      const page = document.querySelector<HTMLElement>('.magic-ui-page');
      page && window.magic.onPageElUpdate(page);
    });
    console.log(window.magic)
    window.magic?.onRuntimeReady({
      getApp() {
        return app;
      },
      updateRootConfig(config) {
        console.log('update config', config);
        root.value = config;
        app?.setConfig(config, curPageId.value);
      },
      updatePageId(id) {
        console.log('update page id', id);
        curPageId.value = id;
        app?.setPage(id);
      },
      select(id) {
        console.log('select config', id);
        selectedId.value = id;
        const el = document.getElementById(`${id}`);
        if (el) return el;
        // 未在当前文档下找到目标元素，可能是还未渲染，等待渲染完成后再尝试获取
        return nextTick().then(() => document.getElementById(`${id}`));
      },
      add({ config, parentId }) {
        console.log('add config', config);
        if (!root.value) throw new Error('error');
        if (!selectedId.value) throw new Error('error');
        if (!parentId) throw new Error('error');
        const parent = getNodePath(parentId, [root.value]).pop();
        if (!parent) throw new Error('未找到父节点');
        if (parent.id !== selectedId.value) {
          const index = parent.items?.findIndex((child) => child.id === selectedId.value);
          parent.items?.splice(index + 1, 0, config);
        } else {
          // 新增节点添加到配置中
          parent.items?.push(config);
        }
      },
      update({ config, parentId }) {
        console.log('update config', config);
        if (!root.value) throw new Error('error');
        const node = getNodePath(config.id, [root.value]).pop();
        if (!parentId) throw new Error('error');
        const parent = getNodePath(parentId, [root.value]).pop();
        if (!node) throw new Error('未找到目标节点');
        if (!parent) throw new Error('未找到父节点');
        const index = parent.items?.findIndex((child) => child.id === node.id);
        parent.items.splice(index, 1, reactive(config));
      },
      remove({ id, parentId }) {
        if (!root.value) throw new Error('error');
        const node = getNodePath(id, [root.value]).pop();
        if (!node) throw new Error('未找到目标元素');
        const parent = getNodePath(parentId, [root.value]).pop();
        if (!parent) throw new Error('未找到父元素');
        const index = parent.items?.findIndex((child) => child.id === node.id);
        parent.items.splice(index, 1);
      },
    });
    return {
      pageConfig,
    };
  },
});
</script>