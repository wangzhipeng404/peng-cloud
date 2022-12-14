<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <PageContainer :content="content">
    <div class="container">
      <div class="editor-wrap">
        <codemirror v-model="formState.code" placeholder="Code goes here..." :style="{ height: 'calc(100vh - 200px)' }"
          :autofocus="true" :indent-with-tab="true" :tab-size="2" :extensions="extensions" />
      </div>
    </div>
  </PageContainer>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Button, Form, Input, message, Upload } from 'ant-design-vue'
import { UploadOutlined } from '@ant-design/icons-vue'
import { PageContainer } from '@ant-design-vue/pro-layout'
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'
import { keymap } from "@codemirror/view"
import { saveLib, getLib } from '../../service/lib'
const route = useRoute()
const fromRef = ref(null)
const formState = reactive({
  id: +route.params.id,
  name: '',
  key: '',
  code: '',
})
const formRule = reactive({
  name: [{ required: true, message: '请输入组件名称' }],
  key: [{ required: true, message: '请输入组件key' }],
  code: [{ required: true, message: '请输入代码' }],
})
const extensions = [
  javascript(),
  oneDark,
  keymap.of([{
    key: "Ctrl-s",
    run() {
      return true
    }
  }])
]

const onSubmit = async () => {
  await fromRef.value.validate()
  if (!formState.code) {
    message.error({ content: '请输入库代码', duration: 3 })
    return
  }
  const result = {
    type: '2',
    name: formState.name,
    key: formState.key,
    code: formState.code,
  }
  if (formState.id) {
    result.id = +formState.id
  }
  try {
    const id = await saveLib(result)
    formState.id = id
  } catch (e) {
    console.error(e)
    message.error({ content: e })
    return
  }
  message.success({ content: '保存成功', duration: 3 })
}
const beforeUpload = (file) => {
  return new Promise((resovle, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      formState.code = reader.result
      reject()
      message.success('导入成功')
    }
    reader.onerror = () => {
      reject()
      message.error('导入失败')
    }
    reader.readAsText(file)
  })
}
const content = () => (
  <>
    <Form layout="inline" rules={formRule} ref={fromRef} model={formState} hideRequiredMark >
      <Form.Item label="库名称" name="name">
        <Input v-model:value={formState.name} />
      </Form.Item>
      <Form.Item label="库key" name="key">
        <Input v-model:value={formState.key} disabled={!!formState.id} />
      </Form.Item>
      <Form.Item>
        <Upload
          fileList={[]}
          showUploadList={false}
          before-upload={beforeUpload}
          accept="text/javascript"
        >
          <Button type="primary" ghost>
            <UploadOutlined />
            导入库代码
          </Button>
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={onSubmit}>保存</Button>
      </Form.Item>
    </Form>
  </>
)

onMounted(() => {
  if (route.params.id) {
    console.log(route.params.id)
    getLib(route.params.id).then(res => {
      if (res) {
        formState.name = res.name
        formState.key = res.key
        formState.code = res.code
      }
    })
  }
})
</script>

<style lang="stylus">
.container
  display flex
  & /deep/ .cm-scroller:-webkit-scrollbar
    width 0 !important
  .editor-wrap
    flex 1
  .preview-container
    flex-shrink 0
    padding 16px
    width 407px
    background-color #fff
    .preview-wrap
      border-radius 10px
      height: 70vh
      border: 1px solid #eee
    #preview-iframe
      border-radius: 10px
    #preview-iframe::-webkit-scrollbar
      width 0
    #preview-iframe html::-webkit-scrollbar
      width 0
    #preview-iframe body::-webkit-scrollbar
      width 0
</style>