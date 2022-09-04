<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <PageContainer :content="content">
    <div class="container">
      <div class="left">
        <div class="top">
          <List class="components-list">
            <draggable :list="componentList" :sort="false" :group="{ name: 'people', pull: 'clone', put: false }"
              :clone="cloneComponent" @change="log" item-key="id">
              <template #item="{ element }">
                <List.Item class="list-item">
                  <List.Item.Meta :title="element.name" :description="element.key"></List.Item.Meta>
                </List.Item>
              </template>
            </draggable>
          </List>
        </div>
        <div class="bottom">
          <div class="delete-wrap">
            <div class="delete-content">
              <DeleteOutlined fill="#ff4d4f" :style="{ opacity: 0.6 }" />
              <div class="delete-hint">拖到此处删除</div>
            </div>
          </div>
          <draggable 
            :list="deleteList"
            :sort="false"
            group="people"
            :put="false"
            @change="log"
            item-key="id"
            class="delete-list"
          >
              <template #item>
                <div />
              </template>
          </draggable>
        </div>
      </div>
      <div class="middle">
          <draggable
            class="dragArea view-list"
            :list="viewList"
            group="people"
            item-key="id"
            @change="log"
          >
            <template #item="{element}">
              <Nested
                :item="element"
                group="people"
                item-key="id"
                :components-map="componentsMap"
              />
            </template>
          </draggable>
      </div>
      <div class="right">
        <Tabs>
          <Tabs.TabPane key="1" tab="基本属性">
            <PropsForm
              :config="currentConfig"
              v-model:value="currentItem"
              v-if="currentItem"
              :key="currentItem.id"
            />
          </Tabs.TabPane>
          <Tabs.TabPane key="2" tab="布局属性">
            <StyleForm
              v-model:value="currentItem.style"
              v-if="currentItem"
              :key="currentItem.id"
            />
          </Tabs.TabPane>
          <Tabs.TabPane key="3" tab="Schema">
            <div class="tab-content">
                <codemirror
                  v-model="schema"
                  placeholder="Code goes here..."
                  :style="{ height: '100%' }"
                  :autofocus="true"
                  :indent-with-tab="true"
                  :tab-size="2"
                  :extensions="extensions"
                />
            </div>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  </PageContainer>
</template>

<script setup>
import { PageContainer } from '@ant-design-vue/pro-layout';
import { onMounted, ref, reactive, toRaw, provide, watchEffect, computed } from 'vue';
import { List, Form, message, Button, Input, Tabs } from 'ant-design-vue';
import { DeleteOutlined } from '@ant-design/icons-vue';
import draggable from 'vuedraggable'
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'
import { keymap } from "@codemirror/view"
import { findComponents } from '../../service/compoment'
import { createComponent } from '@/utils/component';
import { getPage, savePage } from '@/service/page';
import { useRoute } from 'vue-router';
import Nested from './Nested.vue'
import { uuid } from '@/utils/uuid';
import PropsForm from './PropsForm.vue'
import StyleForm from './StyleForm.vue'

const currentItem = ref(null)
const selectItem = item => {
  console.log(item)
  currentItem.value = item
}
provide('current', {
  item: currentItem,
  selectItem,
})
const route = useRoute()
const fromRef = ref(null)
const formState = reactive({
  id: +route.params.id,
  name: '',
  type: '',
})
const formRule = reactive({
  name: [{ required: true, message: '请输入页面名称' }],
  key: [{ required: true, message: '请输入页面key' }],
})
const componentsMap = new Map()
const deleteList = [{ id: 1 }]
const componentList = ref([
  {
    id: -1,
    name: 'Row',
    type: 'van-row',
    childNames: ['van-col'],
    style: { display: 'flex' }
  },
  {
    id: -2,
    name: 'Col',
    type: 'van-col',
    childNames: ['*'],
    style: { display: 'flex' },
    span: '12'
  },
  {
    id: -3,
    name: '图片',
    type: 'van-image',
    childNames: [],
    style: {
    },
    width: '100px',
    height: '100px',
    src: '',
  }
])
const viewList = ref([])
const schema = ref('[]')
const propsConfig = ref({
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
const currentConfig = computed(() => {
  if (currentItem.value) {
    console.log('current', currentItem.value, currentItem.value.type)
    console.log('currentConfig', propsConfig.value[currentItem.value.type])
    return propsConfig.value[currentItem.value.type]
  }
  return []
})
watchEffect(() => {
  schema.value = JSON.stringify(viewList.value, null, 2)
})
const extensions = [
  javascript(), 
  oneDark,
  keymap.of([{
    key: "Ctrl-s",
    run() { 
      viewList.value = JSON.parse(schema.value)
      return true
    }
  }])
]
const log = (evt) => {
  console.log(evt)
}

const cloneComponent = (item) => {
  return {
    ...item,
    id: uuid(10),
    items: []
  };
}

const onSubmit = async () => {
  await fromRef.value.validate()
  if (viewList.value.length == 0) {
    message.error({ content: '请拖动组件到页面内', duration: 3 })
    return
  }
  console.log('reust之前')
  const result = {
    name: formState.name,
    type: formState.type,
    protocl: JSON.stringify({
      items: toRaw(viewList.value)
    })
  }
  console.log(result)
  if (formState.id) {
    result.id = +formState.id
  }
  try {
    console.log('开始保存')
    console.log(result)
    const id = await savePage(result)
    formState.id = id
  } catch (e) {
    console.log('出错了')
    console.error(e)
    message.error({ content: e })
    return
  }
  message.success({ content: '保存成功', duration: 3 })
}
const content = () => (
  <>
    <Form layout="inline" rules={formRule} ref={fromRef} model={formState} hideRequiredMark >
      <Form.Item label="页面名称" name="name">
        <Input v-model:value={formState.name} />
      </Form.Item>
      <Form.Item label="页面key" name="type">
        <Input v-model:value={formState.type} disabled={!!formState.id} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={onSubmit}>保存</Button>
      </Form.Item>
    </Form>
  </>
)

onMounted(async () => {
  const res = await findComponents()
  await Promise.all(res.map(item => {
    return createComponent(item.script, item.type).then(res => {
      console.log(res)
      componentsMap.set(item.type, res)
    })
  }))
  componentList.value = [
    ...componentList.value, 
    ...res.map(item => {
      // eslint-disable-next-line no-unused-vars
      const { script, code, propsConfigs, initValues, eventConfigs, createTime, updateTime, type, ...others } = item
      let itemProps = {}
      try {
        itemProps = JSON.parse(initValues)
      } catch (e) {
        console.log('解析initValue出错')
        console.log(e)
      }
      let config = []
      try {
        config = JSON.parse(propsConfigs)
      } catch (e) {
        console.log('解析propsConfigs出错')
        console.log(e)
      }
      propsConfig.value[type] = config
      return {
        ...others,
        ...itemProps,
        type,
        style: { flex: 1 }
      }
    }
  )]
  console.log('propsConfig', propsConfig.value)
  if (route.params.id) {
    console.log(route.params.id)
    getPage(route.params.id).then(res => {
      if (res) {
        formState.name = res.name
        formState.type = res.type
        viewList.value = JSON.parse(res.protocl).items
      }
    })
  }
})
</script>

<style lang="stylus" scoped>
.container
  display flex
  height calc(100vh - 200px)
  .left, .right
    width 300px
    border 1px soild #eee
    height 100%
    overflow auto
    background #fff
  .middle
    box-sizing border-box
    flex-grow 1
    flex-shrink 0
    margin 0 16px
    height 100%
    max-width 375px
    overflow-x hidden
    overflow-y auto
    background #fff
    scrollbar-width none
    -ms-overflow-style none
    overflow-x hidden
    overflow-y auto
    &::-webkit-scrollbar
      display none
  .components-list
    width 100%
    height 100%
    overflow auto
    .list-item
      padding 4px 16px
      border-bottom 1px solid #eee
  .left
    display flex
    flex-direction column
    .top
      flex 1
    .bottom
      position relative
      height 80px
      width 100%
      display flex
      overflow hidden
      .delete-list
        flex 1
        z-index 9
      .delete-wrap
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        border 1px dashed #ff4d4f
        flex 1
        font-size 16px
        color #ff4d4f
        background #fff1f0
        overflow hidden
        .delete-content
          height 100%
          display flex
          flex-direction column
          justify-content center
          text-align center
          .delete-hint
            margin-top 4px
            font-size 10px
  .right
    flex 1
    padding 0 16px
    .tab-content
      height calc(100vh - 265px)
  .view-list
    box-sizing border-box
    min-width 300px
    width 100%
    height 500px
    padding-bottom 20px
    overflow auto
    flex-wrap wrap
</style>