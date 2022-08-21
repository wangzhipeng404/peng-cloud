<template>
  <PageContainer
    :content="content"
    :extraContent="extractContent"
  >
    <div class="container">
      <div class="editor-wrap">
        <codemirror
          v-model="formState.code"
          placeholder="Code goes here..."
          :style="{ height: 'calc(100vh - 200px)' }"
          :autofocus="true"
          :indent-with-tab="true"
          :tab-size="2"
          :extensions="extensions"
        />
      </div>
      <div class="preview-container">
        <div class="preview-wrap">
          <iframe
            src="/#/preview"
            frameborder="0"
            style="height: 70vh;width: 100%;"
            id="preview-iframe"
            sandbox="allow-same-origin allow-forms allow-scripts allow-top-navigation-to-custom-protocols allow-top-navigation-by-user-activation allow-top-navigation"
          />
        </div>
      </div>
    </div>
    <Drawer
      v-model:visible="visible"
      title="属性定义"
      placement="right"
    >
      <p>todo</p>
    </Drawer>
  </PageContainer>
</template>

<script>
  import { onMounted, reactive, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { Button, Form, Input, message, Drawer } from 'ant-design-vue'
  import { PageContainer } from '@ant-design-vue/pro-layout'
  import { Codemirror } from 'vue-codemirror'
  import { javascript } from '@codemirror/lang-javascript'
  import { oneDark } from '@codemirror/theme-one-dark'
  import { keymap } from "@codemirror/view"
  import { parser } from '../../utils/parser'
  import { tp0 } from './testSFC'
  import { saveComponent, getComponet } from '../../service/compoment'

  export default {
    name: 'x-editor',
    components: {
      Codemirror,
      Drawer
    },
    setup() {
      const route = useRoute()
      const fromRef = ref(null)
      const formState = reactive({
        id: +route.params.id,
        name: '',
        key: '',
        code: tp0,
      })
      const formRule = reactive({
        name: [{ required: true, message: '请输入组件名称' }],
        key: [{ required: true, message: '请输入组件key' }],
        code: [{ required: true, message: '请输入代码' }],
      })

      const iframeRef = ref('')
      const visible = ref(false)
      // const previewWindow = ref('')
      const onPreview = async () => {
        try {
        const res = await parser(formState.code)
        // previewWindow.value.postMessage({ type: 'editore2preview', data: res }, '*')
        iframeRef.value.contentWindow.postMessage({ type: 'editore2preview', data: res }, '*')
        } catch(e) {
          console.log(e)
        }
      }
      const extensions = [
        javascript(), 
        oneDark,
        keymap.of([{
          key: "Ctrl-s",
          run() { 
            onPreview()
            return true
          }
        }])
      ]
      const onMessage = (e) => {
      const { data: { type, key } } = e
      if (type == 'preview2editor') {
        console.log(type, key)
        if (key === 'mounted') {
          if (iframeRef.value) {
            onPreview()
          }
        }
      }
    }
      onMounted(() => {
        window.addEventListener('message', onMessage)
        // if (!previewWindow.value) {
        //   previewWindow.value = window.open('http://localhost:8082/')
        // }
        iframeRef.value = document.getElementById('preview-iframe')
        iframeRef.value.onload = function () {
          onPreview()
        }
      })
      const onSubmit = async () => {
        await fromRef.value.validate()
        if (!formState.code) {
          message.error({ content: '请输入组件代码', duration: 3 })
          return
        }
        let parseRes = {}
        try {
          parseRes = await parser(formState.code)
        } catch (e) {
          console.error(e)
          message.error({ content:  '编译出错啦，请预览成功再保存', duration: 3 })
          return
        }
        const result = {
          type: '2',
          name: formState.name,
          key: formState.key,
          code: formState.code,
          script: parseRes,
        }
        if (formState.id) {
          result.id = +formState.id
        }
        try {
          const id = await saveComponent(result)
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
            <Form.Item label="组件名称" name="name">
              <Input v-model:value={formState.name} />
            </Form.Item>
            <Form.Item label="组件key" name="key">
              <Input v-model:value={formState.key} disabled={!!formState.id}/>
            </Form.Item>
            <Form.Item>
              <Button type="primary" ghost onClick={() => visible.value = true}>属性定义</Button>
            </Form.Item>
          </Form>
        </>
      )

      const extractContent = () => <Button type="primary" onClick={onSubmit}>保存</Button>

      onMounted(() => {
        if (route.params.id) {
          console.log(route.params.id)
          getComponet(route.params.id).then(res => {
            if (res) {
              formState.name = res.name
              formState.key = res.key
              formState.code = res.code
            }
          })
        }
      })
      return {
        formState,
        extensions,
        iframeRef,
        onPreview,
        Button,
        PageContainer,
        content,
        visible,
        extractContent
      }
    }
  }
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