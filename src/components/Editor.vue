<template>
  <div class="container">
    <div class="editor-wrap">
      <div class="btn-wrap">
        <el-button-group>
          <el-button type="primary" size="small">保存</el-button>
          <el-button type="primary" size="small" @click="onPreview">预览</el-button>
        </el-button-group>
      </div>
      <codemirror
        v-model="code"
        placeholder="Code goes here..."
        :style="{ height: '100vh' }"
        :autofocus="true"
        :indent-with-tab="true"
        :tab-size="2"
        :extensions="extensions"
      />
    </div>
    <div class="preview-container">
      <div class="preview-wrap">
        <iframe
          src="http://localhost:8082"
          frameborder="0"
          style="height: 70vh;width: 100%;"
          id="preview-iframe"
          sandbox="allow-same-origin allow-forms allow-scripts allow-top-navigation-to-custom-protocols allow-top-navigation-by-user-activation allow-top-navigation"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { onMounted, ref } from 'vue'
  import { Codemirror } from 'vue-codemirror'
  import { javascript } from '@codemirror/lang-javascript'
  import { oneDark } from '@codemirror/theme-one-dark'
  import { parser } from './parser'
  import { tp0 } from './testSFC'
  export default {
    name: 'x-editor',
    components: {
      Codemirror,
    },
    setup() {
      const iframeRef = ref('')
      // const previewWindow = ref('')
      const code = ref(tp0)
      const extensions = [javascript(), oneDark]
      const onPreview = () => {
        try {
        const res = parser(code.value)
        // previewWindow.value.postMessage({ type: 'editore2preview', data: res }, '*')
        iframeRef.value.contentWindow.postMessage({ type: 'editore2preview', data: res }, '*')
        } catch(e) {
          console.log(e)
        }
      }
      const onMessage = (e) => {
      const { data: { type, key } } = e
      if (type == 'preview2editor') {
        console.log(type, key)
        if (key === 'mounted') {
          onPreview()
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
      return {
        code,
        extensions,
        iframeRef,
        onPreview
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
    position relative
    .btn-wrap
      position absolute
      right 24px
      top 4px
      z-index 99
  .preview-container
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