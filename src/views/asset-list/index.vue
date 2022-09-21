<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <PageContainer>
    <div class="filter-wrap">
      <Form layout="inline" :model="filterState">
        <Form.Item label="资源名称" name="name">
          <Input v-model:value="filterState.name" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" @click="onSearch">搜索</Button>
        </Form.Item>
        <Form.Item>
          <Button @click="onReset">重置</Button>
        </Form.Item>
        <Form.Item>
          <Upload
            :customRequest="onUploader"
            :showUploadList="false"
          >
            <Button type="primary" ghost :loading="uploading">上传</Button>
          </Upload>
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
import { PageContainer } from '@ant-design-vue/pro-layout'
import { Table, Form, Input, Button, Popconfirm, message, Upload, Image } from 'ant-design-vue'
import { FileUnknownOutlined } from '@ant-design/icons-vue'
import { findAssets, deleteAsset } from '../../service/asset'
import { put } from '../../utils/oss'
import dayjs from 'dayjs'

const uploading = ref(false)
const dataSource = ref([])
const filteredData = ref(dataSource.value)
const onSearch = () => {
  filteredData.value = dataSource.value.filter(d => d.name.indexOf(filterState.name) > -1 && d.type.indexOf(filterState.type)  -1)
}
const onReset = () => {
  filterState.name = ''
  filterState.type = ''
  filteredData.value = dataSource.value
}

const dir = 'test/assets/'

const getData = async () => {
  const res = await findAssets(dir)
  console.log(res)
  dataSource.value = res.objects.map(o => {
    return {
      ...o,
      fileName: o.name.replace(dir, ''),
      lastModified: dayjs(o.lastModified).format('YYYY-MM-DD HH:mm:ss')
    }
  })
  onSearch()
}

const onDelete = async (id) => {
  await deleteAsset(id)
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
    dataIndex: 'fileName',
    key: 'fileName',
  },
  {
    title: 'url',
    dataIndex: 'url',
    key: 'url',
    ellipsis: true
  },
  {
    title: '预览',
    key: 'preview',
    customRender: ({ record }) => /\.(jpg|jpeg|png|GIF|JPG|PNG)$/.test(record.fileName) ? (
      <div class="image-wrap">
        <Image width={50} height={50} src={record.url} />
      </div>
    ) : (<FileUnknownOutlined style={{ fontSize: '50px', color: '#CCCCCC' }} />)
  },
  {
    title: '最后更新时间',
    dataIndex: 'lastModified',
    key: 'lastModified',
  },
  {
    title: '操作', 
    dataIndex: 'action',
    customRender: ({ record }) => {
      return (
        <>
          <Popconfirm
            title="确认删除此资源？"
            okText="确认"
            cancelText="取消"
            onConfirm={() => onDelete(record.name)}
          >
            <Button size="small" type="link" onClick={() => console.log(record)}>删除</Button>
          </Popconfirm>
        </>
      )
    }
  }
])

const onUploader = ({ 
  onError,
  onSuccess,
  file
}) => {
  uploading.value = true
  put(`${dir}${file.name}`, file).then(() => {
    onSuccess()
    getData()
    uploading.value = false
  }).catch(() => {
    onError()
  })
}

onMounted(() => {
  getData()
})
</script>

<style lang="stylus">
.filter-wrap
  padding-bottom 16px
.image-wrap
  width 50px
  height 50px
  overflow hidden
</style>