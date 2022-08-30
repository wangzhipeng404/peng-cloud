<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <m-editor 
      ref="editor"
      v-model="data"
      :menu="menu"
      :runtime-url="runtimeUrl"
      :props-configs="propsConfigs"
      :props-values="propsValues"
      :component-group-list="componentGroupList"
      :moveable-options="moveableOptions"
    >
    </m-editor>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { FolderOpened, SwitchButton, Tickets, ArrowLeft, Finished, Document } from '@element-plus/icons-vue'
import { useRouter } from "vue-router";
import { NodeType } from '@tmagic/schema';

const router = useRouter()
const editor = ref()
const menu = ref({
  left: [
    {
      type: 'button',
      text: '返回',
      icon: ArrowLeft,
      handler: () => {
        if (router) {
          router.push('/');
        }
      },
    },
  ],
  center: ['delete', 'undo', 'redo', 'zoom-in', 'zoom-out'],
  right: [
    {
      type: 'button',
      text: '保存',
      icon: Finished,
      handler: () => {
        // commitHandler();
      },
    },
    // {
    //   type: 'component',
    //   component: PublishPageList,
    // },
    // {
    //   type: 'component',
    //   component: ActInfoDrawer,
    // },
    {
      type: 'button',
      icon: Document,
      text: '源码',
      handler: (service) => service?.uiService.set('showSrc', !service?.uiService.get('showSrc')),
    },
  ],
})

const data = ref({
  type: 'app',
  id: 'app_1',
  items: []
})

const runtimeUrl = "/#/runtime?localPreview=true&page=index"
const propsConfigs = [
  // 组件属性列表
]
const propsValues = [
  // 组件默认值
]

const componentGroupList = ref([
  {
    title: '容器',
    items: [
      {
        icon: FolderOpened,
        text: '组',
        type: 'magic-ui-container',
      },
    ],
  },
  {
    title: '基础组件',
    items: [
      {
        icon: Tickets,
        text: '文本',
        type: 'magic-ui-text',
      },
      {
        icon: SwitchButton,
        text: '按钮',
        type: 'magic-ui-button',
      },
    ],
  },
])

const moveableOptions = (core) => {
  const options = {};
  const id = core?.dr?.target?.id;
  if (!id || !editor.value) return options;
  const node = editor.value.editorService.getNodeById(id);
  if (!node) return options;
  const isPage = node.type === NodeType.PAGE;
  options.draggable = !isPage;
  options.resizable = !isPage;
  return options;
}
</script>

<style lang="stylus">
  .container
    width 100%
    height 100%
    display flex

  .m-editor
    flex 1
    height 100%
</style>