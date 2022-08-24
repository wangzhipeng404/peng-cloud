<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <PageContainer :content="content">
    <div class="container">
      <div class="left">
        <List class="components-list">
          <draggable :list="list1" :sort="false" :group="{ name: 'people', pull: 'clone', put: false }"
            :clone="cloneDog" @change="log" item-key="id">
            <template #item="{ element }">
              <List.Item class="list-item">
                <List.Item.Meta :title="element.name" :description="element.key"></List.Item.Meta>
              </List.Item>
            </template>
          </draggable>
        </List>
      </div>
      <div class="middle">
          <draggable
            class="dragArea view-list"
            :list="list2"
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
        <div class="top">
          <Tabs centered>
            <Tabs.TabPane key="1" tab="基本属性">

            </Tabs.TabPane>
            <Tabs.TabPane key="2" tab="布局属性">
              
            </Tabs.TabPane>
          </Tabs>
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
    </div>
  </PageContainer>
</template>

<script setup>
import { PageContainer } from '@ant-design-vue/pro-layout';
import { onMounted, ref, reactive, toRaw, provide } from 'vue';
import { List, Form, message, Button, Input, Tabs } from 'ant-design-vue';
import { DeleteOutlined } from '@ant-design/icons-vue';
import draggable from 'vuedraggable'
import { findComponents } from '../../service/compoment'
import { createComponent } from '@/utils/component';
import { getPage, savePage } from '@/service/page';
import { useRoute } from 'vue-router';
import Nested from './Nested.vue'

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
  key: '',
})
const formRule = reactive({
  name: [{ required: true, message: '请输入页面名称' }],
  key: [{ required: true, message: '请输入页面key' }],
})
const componentsMap = new Map()

const deleteList = [{ id: 1 }]
const list1 = ref([
  {
    id: -1,
    name: 'Row',
    key: 'van-row',
    type: '1',
    childNames: ['van-col'],
    props: {
      style: { flex: 1 }
    }
  },
  {
    id: -2,
    name: 'Col',
    key: 'van-col',
    type: '1',
    childNames: ['*'],
    props: {
      style: { display: 'flex', flex: 1 },
      span: '24'
    }
  },
  {
    id: -3,
    name: '图片',
    key: 'van-image',
    type: '1',
    childNames: [],
    props: {
      width: '100',
      height: '100',
      src: '',
    }
  }
])
const list2 = ref([])

const log = (evt) => {
  console.log(evt)
}

const cloneDog = (component) => {
  return {
    ...component,
    id: new Date().getTime().toString(32).substring(3,),
    children: []
  };
}

const onSubmit = async () => {
  await fromRef.value.validate()
  if (list2.value.length == 0) {
    message.error({ content: '请拖动组件到页面内', duration: 3 })
    return
  }
  const result = {
    type: '2',
    name: formState.name,
    key: formState.key,
    protocl: JSON.stringify({
      views: toRaw(list2.value)
    })
  }
  if (formState.id) {
    result.id = +formState.id
  }
  try {
    const id = await savePage(result)
    formState.id = id
  } catch (e) {
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
      <Form.Item label="页面key" name="key">
        <Input v-model:value={formState.key} disabled={!!formState.id} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={onSubmit}>保存</Button>
      </Form.Item>
    </Form>
  </>
)

onMounted(() => {
})

onMounted(async () => {
  const res = await findComponents()
  await Promise.all(res.map(item => {
    return createComponent(item.script, item.key).then(res => {
      console.log(res)
      componentsMap.set(item.key, res)
    })
  }))
  list1.value = [
    ...list1.value, 
    ...res.map(item => ({ 
      ...item, 
      props: {
        style: { flex: 1 }
      }
    }))]
  if (route.params.id) {
    console.log(route.params.id)
    getPage(route.params.id).then(res => {
      if (res) {
        formState.name = res.name
        formState.key = res.key
        list2.value = JSON.parse(res.protocl).views
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
    flex 1
    margin 0 16px
    height 100%
    max-width 600px
    overflow-x hidden
    overflow-y auto
    background #fff
  .components-list
    width 100%
    height 100%
    overflow auto
    .list-item
      padding 4px 16px
      border-bottom 1px solid #eee
  .right
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
  .view-list
    box-sizing border-box
    min-width 300px
    width 100%
    height 500px
    padding-bottom 20px
    overflow auto
    flex-wrap wrap
</style>