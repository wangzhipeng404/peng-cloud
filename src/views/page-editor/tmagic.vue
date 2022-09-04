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
import { ref, onMounted } from "vue";
import { FolderOpened, Tickets, Finished, Document } from '@element-plus/icons-vue'
// import { useRouter } from "vue-router";
import { NodeType } from '@tmagic/schema';
import { editorService, propsService } from '@tmagic/editor';
import { findComponents } from "@/service/compoment";
import { message } from "ant-design-vue";
import { findPages } from "@/service/page";

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

const runtimeUrl = `${location.pathname}#/runtime`
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

})


const componentGroupList = ref([
  {
    title: '容器',
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
  const res = await findComponents()
  componentGroupList.value.push({
    title: '自定义组件',
    items: res.map(c => {
      // eslint-disable-next-line no-unused-vars
      const { script, code, propsConfigs: configs, initValues, eventConfigs, createTime, updateTime, type, ...others } = c
      let initVal = {}
      try {
        initVal = JSON.parse(initValues)
      } catch (e) {
        console.log('解析initValue出错')
        console.log(e)
      }
      propsService.setPropsValues(c.type, initVal)
      let config = []
      try {
        config = JSON.parse(configs)
      } catch (e) {
        console.log('解析propsConfigs出错')
        console.log(e)
      }
      propsService.setPropsConfig(c.type, config)
      return {
        icon: Tickets,
        text: c.name,
        type: c.type
      }
    })
  })
  console.log(propsConfigs.value)
  const pages = await findPages()
  const items = pages.map(p => {
    const { protocl, ...others } = p
    return {
      ...others,
      items: JSON.parse(protocl).items
    }
  })
  console.log(data.value)
  data.value.items.push(...items)
  console.log(editorService.set('root', data.value))
  editorService.set('page', data.value.items[0])
  editorService.set('parent', data.value.items[0])
  propsService.getPropsConfig('van-image').then(res => {
    console.log(res)
  })
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