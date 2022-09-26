<template>
  <component :is="comp" v-bind="props" />
</template>

<script>
import { onMounted, ref, shallowRef, h, defineAsyncComponent } from 'vue'
import '@vant/touch-emulator'
import { createComponent } from '@/utils/component'

export default {
  name: 'm-preview',
  setup () {
    const props = ref({})
    const comp = shallowRef({ render () { h('div') }})
    const onMessage = (e) => {
      const { data: { type, data, key } } = e
      if (type == 'editore2preview') {
        console.log(type, key)
        comp.value = defineAsyncComponent(() => createComponent(data.script))
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
      props,
      comp
    }
  }
}
</script>

<style lang="stylus">
body::-webkit-scrollbar
  width 0
</style>