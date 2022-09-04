<template>
  <x-shell :script="script" v-bind="props" />
</template>

<script>
import { onMounted, ref } from 'vue'
import Shell from '../../components/Shell/Shell'
import '@vant/touch-emulator'

export default {
  name: 'm-preview',
  components: {
    [Shell.name]: Shell
  },
  setup () {
    const script = ref('')
    const style = ref('')
    const props = ref({})
    const onMessage = (e) => {
      const { data: { type, data, key } } = e
      if (type == 'editore2preview') {
        console.log(type, key)
        script.value = data.script
        if (data.props) {
          try {
            props.value = JSON.parse(data.props)
          } catch(e) {
            console.log('解析props出错')
            console.log(e)
          }
        }
      }
    }
    onMounted(() => {
      window.addEventListener('message', onMessage)
      // window.opener.postMessage({ type: 'preview2editor', data: {}, key: 'mounted' }, '*')
      window.parent.postMessage({ type: 'preview2editor', data: {}, key: 'mounted' }, '*')
    })
    return {
      script,
      style,
      props
    }
  }
}
</script>

<style lang="stylus">
body::-webkit-scrollbar
  width 0
</style>