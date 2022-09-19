<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <PageContainer>
    <div class="filter-wrap">
      <Form layout="inline" :model="filterState">
        <Form.Item label="页面名称" name="name">
          <Input v-model:value="filterState.name" />
        </Form.Item>
        <Form.Item label="英文名" name="type">
          <Input v-model:value="filterState.type" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" @click="onSearch">搜索</Button>
        </Form.Item>
        <Form.Item>
          <Button @click="onReset">重置</Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" @click="onAdd" ghost>新增</Button>
        </Form.Item>
      </Form>
    </div>
    <div class="table-wrap">
      <Table
        class="table"
        :dataSource="filteredData"
        :columns="columns"
        size="middle"
      />
    </div>
  </PageContainer>
</template>
<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { PageContainer } from '@ant-design-vue/pro-layout'
import { Table, Form, Input, Button, Divider, Popconfirm, message } from 'ant-design-vue'
import { findPages, deletePage } from '../../service/page'
import { updateSetting, getSetting } from '@/service/setting'
import dayjs from 'dayjs'
import { HomeTwoTone } from '@ant-design/icons-vue'

const router = useRouter()
const dataSource = ref([])
const filteredData = ref(dataSource.value)
const indexSetting = ref({
  key: 'index',
  value: '',
})

const onSearch = () => {
  filteredData.value = dataSource.value.filter(d => d.name.indexOf(filterState.name) > -1 && d.type.indexOf(filterState.type)  -1)
}
const onReset = () => {
  filterState.name = ''
  filterState.key = ''
  filteredData.value = dataSource.value
}

const getData = async () => {
  const res = await findPages()
  dataSource.value = res.map(com => {
      return {
        ...com,
        createTime: dayjs(+com.createTime).format('YYYY-MM-DD HH:mm:ss'),
        updateTime: dayjs(+com.updateTime).format('YYYY-MM-DD HH:mm:ss'),
      }
    })
    onSearch()
}
const onAdd = () => router.push({ name: 'pageEditor' })
const onDelete = async (id) => {
  await deletePage(id)
  getData()
  message.success({
    content: '删除成功',
    duration: 3
  })
}

const onIndex = async (pageid) => {
  try {
    indexSetting.value.value = pageid
    const id = await updateSetting('index', pageid)
    indexSetting.value.id = id
  } catch (e) {
    console.error(e)
    message.error({ content: e , duration: 3 })
    return
  }
  message.success({ content: '保存成功', duration: 3 })
}
const filterState = reactive({
  name: '',
  type: ''
})

const columns = ref([
  {
    title: '',
    key: 'icon',
    width: 20,
    customRender: ({record }) => record.id == indexSetting.value.value && <HomeTwoTone />
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '英文名',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: '最后更新时间',
    dataIndex: 'updateTime',
    key: 'updateTime',
  },
  {
    title: '操作', 
    dataIndex: 'action',
    customRender: ({ record }) => {
      return (
        <>
          <Button size="small" type="link" onClick={() => router.push({ name: 'pageEditor', params: { id: record.id }})}>编辑</Button>
          <Divider type="vertical" />
          <Popconfirm
            title="确认设定此页设为首页"
            okText="确认"
            cancelText="取消"
            onConfirm={() => onIndex(record.id)}
          >
            <Button size="small" type="link" onClick={() => console.log(record)}>设为首页</Button>
          </Popconfirm>
          <Divider type="vertical" />
          <Popconfirm
            title="确认删除此组件？"
            okText="确认"
            cancelText="取消"
            onConfirm={() => onDelete(record.id)}
          >
            <Button size="small" type="link" onClick={() => console.log(record)}>删除</Button>
          </Popconfirm>
        </>
      )
    }
  }
])

onMounted(() => {
  getData()
  getSetting('index').then(res => {
    if (res) {
      indexSetting.value = { ...res }
      console.log(indexSetting.value)
    }
  }).catch(e => {
    console.log(e)
  })
})
</script>

<style lang="stylus">
.filter-wrap
  padding-bottom 16px
</style>