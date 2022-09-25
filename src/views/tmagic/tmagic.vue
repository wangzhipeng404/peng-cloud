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
      :event-method-list="eventMethodList"
      :component-group-list="componentGroupList"
      :moveable-options="moveableOptions"
    >
    </m-editor>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { FolderOpened, Tickets, Finished, Document } from '@element-plus/icons-vue'
// import { useRouter } from "vue-router";
import { NodeType } from '@tmagic/schema';
import { propsService } from '@tmagic/editor';
import { findComponents, getComponent } from "@/service/compoment";
import { message } from "ant-design-vue";
import { asyncLoadJs } from '@tmagic/utils';
import componentGroups from './configs/componentGroupList';
// import { findPages, getPage } from "@/service/page";

// const router = useRouter()
const editor = ref()
const menu = ref({
  left: [
    // {
    //   type: 'button',
    //   text: '返回',
    //   icon: ArrowLeft,
    //   handler: () => {
    //     if (router) {
    //       router.push('/');
    //     }
    //   },
    // },
  ],
  center: ['delete', 'undo', 'redo', 'zoom-in', 'zoom-out'],
  right: [
    {
      type: 'button',
      text: '保存',
      icon: Finished,
      handler: () => {
        message.info('功能还在开发中')
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

const runtimeUrl = `/playground/index.html`
const propsConfigs = ref({
  'van-row': [{
    text: '间隔',
    name: 'gutter'
  }],
  'van-col': [{
    type: 'select',
    text: '占比',
    name: 'span',
    options: [
      { text: '24', value: 24 },
      { text: '16', value: 16 },
      { text: '12', value: 12 },
      { text: '8', value: 8 },
      { text: '6', value: 6 },
      { text: '4', value: 4 },
      { text: '3', value: 3 },
      { text: '2', value: 2 },
      { text: '1', value: 1 },
    ]
  }],
  'van-image': [
    {
      name: 'width',
      text: '宽度',
    },
    {
      name: 'height',
      text: '高度',
    },
    {
      name: 'src',
      text: '图片地址',
    },
  ]
})
const propsValues = ref({
  'van-image': {
    width: 100,
    height: 100,
  }
})
const eventMethodList = ref([])

const componentGroupList = ref([
  ...componentGroups,
  {
    title: '容器2',
    items: [
      {
        icon: FolderOpened,
        text: 'Row',
        type: 'van-row',
      },
      {
        icon: FolderOpened,
        text: 'Col',
        type: 'van-col',
      },
    ],
  },
  {
    title: '基础组件',
    items: [
      {
        icon: Tickets,
        text: '图片',
        type: 'van-image',
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

onMounted(async () => {
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
      propsService.setPropsConfig(c.type, configs)
      propsService.setPropsValues(c.type, initVal)
      return {
        icon: Tickets,
        text: c.name,
        type: c.type
      }
    })
  })

  console.log(propsConfigs.value)
  // const pages = await findPages()
  // const details = await Promise.all(pages.map(p => getPage(p.id)))
  // const items = details.map(p => {
  //   const { protocl, ...others } = p
  //   return {
  //     ...others,
  //     items: protocl.items
  //   }
  // })
  // console.log(data.value)
  // data.value.items.push(...items)
  // console.log(editorService.set('root', data.value))
  // editorService.set('page', data.value.items[0])
  // editorService.set('parent', data.value.items[0])
  // propsService.getPropsConfig('van-image').then(res => {
  //   console.log(res)
  // })
})
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