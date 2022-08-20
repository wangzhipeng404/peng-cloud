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
        <van-row>
          <draggable class="view-list" :list="list2" group="people" @change="log" item-key="id">
            <template #item="{ element }">
              <van-col span="24">
                <component :is="element.type == 1 ? element.key : componentsMap.get(element.key)"
                  v-bind="element.props" />
              </van-col>
            </template>
          </draggable>
        </van-row>
      </div>
      <div class="right">

      </div>
    </div>
  </PageContainer>
</template>

<script setup>
import { PageContainer } from '@ant-design-vue/pro-layout';
import { onMounted, ref, reactive, toRaw } from 'vue';
import { List, Form, message, Button, Input } from 'ant-design-vue';
import draggable from 'vuedraggable'
import { findComponents } from '../../service/compoment'
import { createFile } from '@/utils/parser';
import { getPage, savePage } from '@/service/page';
import { useRoute } from 'vue-router';

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

const list1 = ref([
  {
    name: '图片',
    key: 'van-image',
    type: '1',
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
    id: new Date().getTime().toString(32).substring(3,)
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
    protocl: {
      views: toRaw(list2.value)
    }
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
    return createFile(item.script, item.key).then(res => {
      console.log(res)
      componentsMap.set(item.key, res)
    })
  }))
  list1.value = [...list1.value, ...res]
  if (route.params.id) {
    console.log(route.params.id)
    getPage(route.params.id).then(res => {
      if (res) {
        formState.name = res.name
        formState.key = res.key
        list2.value = res.protocl.views
      }
    })
  }
})
</script>

<style lang="stylus" scoped>
.container
  display flex
  .left, .right
    width 300px
    border 1px soild #eee
    height 500px
    overflow auto
    background #fff
  .middle
    flex 1
    margin 0 16px
    border 1px soild #eee
    height 500px
    overflow auto
    background #fff
  .components-list
    width 100%
    height 100%
    overflow auto
    .list-item
      padding 4px 16px
      border-bottom 1px solid #eee
  .view-list
    width 100%
    height 500px
    overflow auto
    .view-item
      padding 8px
      border-bottom 1px solid #eee
</style>