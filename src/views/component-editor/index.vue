<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Spin :spinning="loading">
    <PageContainer
      :content="content"
    >
      <Tabs 
        tabPosition="left"
        style="background: #ffffff;"
        size="small"
      >
        <TabPane key="10" tab="组件代码">
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
                :modes="modes"
              />
            </div>
            <div class="preview-container">
              <Tabs centered>
                <TabPane key="1" tab="预览">
                  <div class="preview-wrap">
                    <iframe
                      :src="iframeSrc"
                      frameborder="0"
                      style="height: 100%;width: 100%;"
                      id="preview-iframe"
                      sandbox="allow-same-origin allow-forms allow-scripts allow-top-navigation-to-custom-protocols allow-top-navigation-by-user-activation allow-top-navigation"
                    />
                  </div>
                </TabPane>
                <TabPane key="2" tab="编译结果">
                  <div class="preview-wrap">
                    <codemirror
                      v-model="parsedCode"
                      placeholder="Code goes here..."
                      :style="{ height: '100%' }"
                      :autofocus="true"
                      :indent-with-tab="true"
                      :tab-size="2"
                      :extensions="extensions"
                      disabled
                    />
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </TabPane>
        <TabPane key="30" tab="属性配置">
          <Tabs>
            <TabPane key="301" tab="属性配置">
                <div class="container">
                  <div :style="{ height: 'calc(100vh - 300px)' }">
                    <Space 
                      style="display: flex; margin-bottom: 16px"
                    >
                      <div class="field">属性标签</div>
                      <div class="field">配置类型</div>
                      <div class="field">属性name</div>
                      <div class="field">默认值</div>
                    </Space>
                    <Form
                      ref="propsFormRef"
                      name="props-form"
                      :model="propsModel"
                    >
                      <Space
                        v-for="(prop, index) in propsModel.props"
                        :key="prop.key"
                        style="display: flex;"
                        align="baseline"
                      >
                        <Form.Item
                          :name="['props', index, 'text']"
                          :rules="{
                            required: true,
                            message: '属性标签',
                          }"
                        >
                          <Input v-model:value="prop.text" placeholder="属性标签" class="field" />
                        </Form.Item>
                        <Form.Item
                          :name="['props', index, 'type']"
                          :rules="{
                            required: true,
                            message: '配置类型',
                          }"
                        >
                          <Select v-model:value="prop.type" placeholder="配置类型" class="field">
                            <Option value="input">文本</Option>
                            <Option value="select">选项</Option>
                            <Option value="number">数字</Option>
                          </Select>
                        </Form.Item>
                        <Form.Item
                          :name="['props', index, 'name']"
                          :rules="{
                            required: true,
                            message: '属性name',
                          }"
                        >
                          <Input v-model:value="prop.name" placeholder="属性name" class="field" />
                        </Form.Item>
                        <Form.Item
                          :name="['props', index, 'value']"
                          :rules="{
                            required: false,
                            message: '默认值',
                          }"
                        >
                          <Input v-model:value="prop.value" placeholder="默认值" class="field" />
                        </Form.Item>
                        <MinusCircleOutlined @click="removeProp(index)" />
                      </Space>
                      <Form.Item>
                        <Button type="dashed" block @click="addProp">
                          <PlusOutlined />
                          添加属性
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
            </TabPane>
            <TabPane key="302" tab="JSON">
              <div class="container">
                <div class="editor-wrap">
                  <codemirror
                    readOnly
                    v-model="propsConfig"
                    placeholder="Code goes here..."
                    :style="{ height: 'calc(100vh - 300px)' }"
                    :autofocus="true"
                    :indent-with-tab="true"
                    :tab-size="2"
                    :extensions="extensions"
                    mode="application/json"
                    :lint="true"
                    :gutters="['CodeMirror-lint-markers']"
                  />
                </div>
              </div>
            </TabPane>
          </Tabs>
        </TabPane>
        <TabPane key="40" tab="事件配置">
          <div class="container">
            <div class="editor-wrap">
              <codemirror
                v-model="formState.evnets"
                placeholder="Code goes here..."
                :style="{ height: 'calc(100vh - 200px)' }"
                :autofocus="true"
                :indent-with-tab="true"
                :tab-size="2"
                :extensions="extensions"
                mode="application/json"
                :lint="true"
                :gutters="['CodeMirror-lint-markers']"
              />
            </div>
          </div>
        </TabPane>
      </Tabs>
    </PageContainer>
  </Spin>
</template>

<script setup>
  import { onMounted, reactive, ref, watchEffect } from 'vue'
  import { useRoute } from 'vue-router'
  import { Button, Form, Input, message, Tabs, Select, Space, Spin } from 'ant-design-vue'
  import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons-vue'
  import { PageContainer } from '@ant-design-vue/pro-layout'
  import { Codemirror } from 'vue-codemirror'
  import { javascript } from '@codemirror/lang-javascript'
  import { json } from '@codemirror/lang-json'
  import { oneDark } from '@codemirror/theme-one-dark'
  import { keymap } from "@codemirror/view"
  import { parser } from '../../utils/parser'
  import { errorMessage } from '@/utils/component'
  import { tp0 } from './testSFC'
  import { saveComponent, getComponent } from '../../service/compoment'
  const { TabPane } = Tabs
  const { Option } = Select
  const loading = ref(false)
  const route = useRoute()
  const fromRef = ref(null)
  const propsFormRef = ref(null)
  const propsModel = reactive({
    props: []
  })
  const propsConfig = ref(JSON.stringify([], null, 2))
  const formState = reactive({
    id: +route.params.id,
    name: '',
    type: '',
    code: tp0,
    evnets:JSON.stringify([{}], null, 2)
  })
  const formRule = reactive({
    name: [{ required: true, message: '请输入组件名称' }],
    type: [{ required: true, message: '请输入组件key' }],
    code: [{ required: true, message: '请输入代码' }],
  })
  const iframeSrc = ref(`${location.origin}/preview/index.html`)
  const iframeRef = ref('')
  const parsedCode = ref('')
  // const previewWindow = ref('')
  const addProp = () => {
    propsModel.props.push({
      key: new Date().getTime().toString(),
      type: 'input',
      text: '',
      name: '',
      value: ''
    })
  }
  const removeProp = (index) => {
    propsModel.props.splice(index, 1)
  }
  watchEffect(() => {
    propsConfig.value = JSON.stringify(propsModel.props, null, 2)
  })
  const sendMessage = (data) => {
    iframeRef.value.contentWindow?.postMessage({ 
      type: 'editore2preview',
      data,
    }, '*')
  }
  const onPreview = async () => {
    try {
      const { minify, raw } = await parser(formState.code)
      parsedCode.value = raw
      // previewWindow.value.postMessage({ type: 'editore2preview', data: res }, '*')
      sendMessage({
        script: minify,
        props: formState.initValues
      })
    } catch(e) {
      sendMessage({
        script: errorMessage(e),
        props: formState.initValues
      })
      console.log('preview 出错',e)
    }
  }
  const modes = [
    {
      value: 'css',
      label: 'CSS'
    },
    {
      value: 'javascript',
      label: 'Javascript'
    },
    {
      value: 'html',
      label: 'XML/HTML'
    }
  ]
  const extensions = [
    javascript(), 
    json(),
    oneDark,
    keymap.of([
      {
        key: "Ctrl-s",
        run() { 
          onPreview()
          return true
        }
      },
      {
        key: "Ctrl-S",
        run() { 
          onPreview()
          return true
        }
      }
    ])
  ]

  let error = null
  const onMessage = (e) => {
  const { data: { type, key } } = e
  if (type == 'preview2editor') {
    iframeRef.value = document.getElementById('preview-iframe')
    iframeRef.value.contentWindow.addEventListener("unhandledrejection", function(e){
      e.preventDefault(); // 阻止异常向上抛出
      console.log('捕获到异常：', e);
      error = e.reason
      iframeRef.value.contentWindow.location.reload(true)
    });
    iframeRef.value.contentWindow.onerror = (message, source, lineno, colno, error) => {
      console.log('捕获到 iframe 异常：', {message, source, lineno, colno, error});
    };
    console.log(type, key)
    if (key === 'mounted') {
      if (iframeRef.value) {
        if (error) {
          sendMessage({
            script: errorMessage(error),
            props: '{}'
          })
          error = null
        } else {
          onPreview()
        }
      }
    }
  }
}
  onMounted(() => {
    window.addEventListener('message', onMessage)
  })
  const onSubmit = async () => {
    await fromRef.value.validate()
    if (!formState.code) {
      message.error({ content: '请输入组件代码', duration: 3 })
      return
    }
    if (propsModel.props.length > 0 && propsFormRef.value) {
      try {
        await propsFormRef.value.validate()
      } catch (e) {
        console.error(e)
        message.error({ content:  '请完善属性配置项', duration: 3 })
        return
      }
      if (propsModel.props.length !== [...new Set(propsModel.props.map(p => p.name))].length) {
        message.error({ content:  '存在相同的属性名', duration: 3 })
        return
      }
    }
    let parseRes = ''
    try {
      const { minify } = await parser(formState.code)
      parseRes = minify
    } catch (e) {
      console.error(e)
      message.error({ content:  '编译出错啦，请预览成功再保存', duration: 3 })
      return
    }
    const result = {
      name: formState.name,
      type: formState.type,
      code: formState.code,
      script: parseRes,
      props: propsConfig.value,
      evnets: formState.evnets
    }
    if (formState.id) {
      result.id = +formState.id
    }
    loading.value = true
    try {
      console.log('before save')
      const id = await saveComponent(result)
      formState.id = id
      loading.value = false
    } catch (e) {
      console.error(e)
      message.error({ content: e })
      loading.value = false
      return
    }
    message.success({ content: '保存成功', duration: 3 })
  }
  const content = () => (
    <>
      <Form layout="inline" rules={formRule} ref={fromRef} model={formState} hideRequiredMark >
        <Form.Item label="中文名称" name="name">
          <Input v-model:value={formState.name} />
        </Form.Item>
        <Form.Item label="英文名称" name="type">
          <Input v-model:value={formState.type} disabled={!!formState.id}/>
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
      loading.value = true
      getComponent(route.params.id).then(res => {
        if (res) {
          formState.name = res.name
          formState.type = res.type
          formState.code = res.code
          propsModel.props = res.props || []
          formState.evnets = JSON.stringify(res.events || [{}], null, 2)
        }
        loading.value = false
      }).catch(() => {
        loading.value = false
      })
    }
  })
</script>

<style lang="stylus" scoped>
.container
  display flex
  & /deep/ .cm-scroller:-webkit-scrollbar
    width 0 !important
  .editor-wrap
    flex 1
  .preview-container
    flex-shrink 0
    padding 0 16px
    width 407px
    background-color #fff
    .preview-wrap
      border-radius 10px
      height: 60vh
      border: 1px solid #eee
      .cm-content
        word-break break-word
    #preview-iframe
      border-radius: 10px
    #preview-iframe::-webkit-scrollbar
      width 0
    #preview-iframe html::-webkit-scrollbar
      width 0
    #preview-iframe body::-webkit-scrollbar
      width 0
.field
  width 150px
</style>