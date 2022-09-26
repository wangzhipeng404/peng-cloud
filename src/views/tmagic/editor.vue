<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="editor-app">
    <m-editor
      v-model="value"
      ref="editor"
      :menu="menu"
      :runtime-url="runtimeUrl"
      :props-configs="propsConfigs"
      :props-values="propsValues"
      :event-method-list="eventMethodList"
      :component-group-list="componentGroupList"
      :default-selected="defaultSelected"
      :moveable-options="moveableOptions"
      :auto-scroll-into-view="true"
      :stage-rect="stageRect"
    >
      <template #workspace-content>
        <DeviceGroup v-model="stageRect"></DeviceGroup>
      </template>
    </m-editor>

    <el-dialog
      v-model="previewVisible"
      destroy-on-close
      custom-class="pre-viewer"
      title="预览"
      :width="stageRect && stageRect.width"
    >
      <iframe v-if="previewVisible" width="100%" :height="stageRect && stageRect.height" :src="previewUrl"></iframe>
    </el-dialog>
  </div>
</template>

<script setup>
import { computed, ref, toRaw } from 'vue';
import { Coin, Connection, Document, Tickets } from '@element-plus/icons-vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import serialize from 'serialize-javascript';
import { findComponents, getComponent } from "@/service/compoment";
import { editorService } from '@tmagic/editor';
import { NodeType } from '@tmagic/schema';
import { asyncLoadJs } from '@tmagic/utils';

import DeviceGroup from './DeviceGroup.vue';
import componentGroupLists from './configs/componentGroupList';
import dsl from './configs/dsl';

console.log(editorService)
const runtimeUrl = `../playground/index.html`;
const editor = ref();
const previewVisible = ref(false);
const value = ref(dsl);
const defaultSelected = ref(dsl.items[0].id);
const propsValues = ref()
const propsConfigs = ref({});
const eventMethodList = ref({})
const stageRect = ref({
  width: 375,
  height: 817,
});

const componentGroupList = ref([...componentGroupLists])
const previewUrl = computed(
  () => `/runtime/vue3/page/index.html?localPreview=1&page=${editor.value?.editorService.get('page').id}`,
);

const menu = {
  left: [
    {
      type: 'text',
      text: '魔方',
    },
  ],
  center: ['delete', 'undo', 'redo', 'guides', 'rule', 'zoom'],
  right: [
    {
      type: 'button',
      text: '预览',
      icon: Connection,
      handler: async (services) => {
        if (services?.editorService.get('modifiedNodeIds').size > 0) {
          try {
            await ElMessageBox.confirm('有修改未保存，是否先保存再预览', '提示', {
              confirmButtonText: '保存并预览',
              cancelButtonText: '预览',
              type: 'warning',
            });
            save();
            ElMessage.success('保存成功');
          } catch (e) {
            console.error(e);
          }
        }
        previewVisible.value = true;
      },
    },
    {
      type: 'button',
      text: '保存',
      icon: Coin,
      handler: () => {
        save();
        ElMessage.success('保存成功');
      },
    },
    '/',
    {
      type: 'button',
      icon: Document,
      tooltip: '源码',
      handler: (service) => service?.uiService.set('showSrc', !service?.uiService.get('showSrc')),
    },
  ],
};

const moveableOptions = (core) => {
  const options = {};
  const id = core?.dr?.target?.id;

  if (!id || !editor.value) return options;

  const node = editor.value.editorService.getNodeById(id);

  if (!node) return options;

  const isPage = node.type === NodeType.PAGE;

  options.draggable = !isPage;
  options.resizable = !isPage;
  options.rotatable = !isPage;

  return options;
};

const save = () => {
  localStorage.setItem(
    'magicDSL',
    serialize(toRaw(value.value), {
      space: 2,
      unsafe: true,
    }).replace(/"(\w+)":\s/g, '$1: '),
  );
  editor.value?.editorService.resetModifiedNodeId();
};
const init = async () => {
  await asyncLoadJs(`/entry/vue3/config/index.umd.js`).then(() => {
    propsConfigs.value = window.magicPresetConfigs;
  });
  await asyncLoadJs(`/entry/vue3/value/index.umd.js`).then(() => {
    propsValues.value = window.magicPresetValues;
  });
  await asyncLoadJs(`/entry/vue3/event/index.umd.js`).then(() => {
    eventMethodList.value = window.magicPresetEvents;
  });
  const res = await findComponents()
  const cusntomComponents = await Promise.all(res.map(c => getComponent(c.id)))
  componentGroupList.value.push({
    title: '自定义组件',
    items: cusntomComponents.map(c => {
      console.log(c)
      // eslint-disable-next-line no-unused-vars
      const { script, code, props: configs, events, createTime, updateTime, type, ...others } = c
      let initVal = {}
      configs.map(p => {
        initVal[p.name] = p.value
      })
      console.log('init val', initVal)
      propsConfigs.value[c.type] = configs
      propsValues[c.type] = initVal
      return {
        icon: Tickets,
        text: c.name,
        type: c.type
      }
    })
  })
}

init()
save();

editorService.usePlugin({
  beforeDoAdd: (config, parent) => {
    if (config.type === 'overlay') {
      config.style = {
        ...config.style,
        left: 0,
        top: 0,
      };

      return [config, editorService.get('page')];
    }

    return [config, parent];
  },
});
</script>

<style lang="stylus">
.editor-app {
  width: 100%;
  height: 100%;

  .m-editor {
    flex: 1;
    height: 100%;
  }

  .el-overlay-dialog {
    display: flex;
  }

  .pre-viewer {
    margin: auto;

    .el-dialog__body {
      padding: 0;
    }
  }

  .menu-left {
    .menu-item-text {
      margin-left: 10px;
    }
  }
}
</style>
