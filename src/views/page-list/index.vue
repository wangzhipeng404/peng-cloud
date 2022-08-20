<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <PageContainer>
    <div class="filter-wrap">
      <Form layout="inline" :model="filterState">
        <Form.Item label="页面名称" name="name">
          <Input v-model:value="filterState.name" />
        </Form.Item>
        <Form.Item label="页面key" name="key">
          <Input v-model:value="filterState.key" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" @click="onSearch">搜索</Button>
        </Form.Item>
        <Form.Item>
          <Button @click="onReset">重置</Button>
        </Form.Item>
      </Form>
    </div>
    <div class="operation-wrap">
      <Button type="primary" @click="onAdd">新增</Button>
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
import dayjs from 'dayjs'

const router = useRouter()
const dataSource = ref([])
const filteredData = ref(dataSource.value)
const onSearch = () => {
  filteredData.value = dataSource.value.filter(d => d.name.indexOf(filterState.name) > -1 && d.key.indexOf(filterState.key)  -1)
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
const filterState = reactive({
  name: '',
  key: ''
})

const columns = ref([
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'key',
    dataIndex: 'key',
    key: 'key',
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
})
</script>

<style lang="stylus">
.operation-wrap
  padding 16px 0
</style>