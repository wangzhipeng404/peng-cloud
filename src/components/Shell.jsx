import { onMounted, onUnmounted, defineComponent, ref, h, computed, watchEffect } from 'vue';
import { insertStyle, createComponent } from './parser'


export default defineComponent({
  name: 'x-shell',
  props: {
    script: {
      type: String,
    },
    styl: {
      type: String
    }
  },
  setup (props) {
    const styleEl = ref('')
    const component = computed(() => {
      let comp = {}
      if (!props.script) {
        return { render () {
          return h('div', '.....')
        }}
      }
      try {
        comp = createComponent(props.script)
      } catch (e) {
        comp = { 
          render () {
            h('div', e)
          }
        }
      }
      return comp
    })
    watchEffect(() => {
      styleEl.value && styleEl.value.remove()
      styleEl.value = insertStyle(props.styl)
    })
    onMounted(() => { 
      styleEl.value = insertStyle(props.styl)
    })
    onUnmounted(() => {
      styleEl.value && styleEl.value.remove()
    })
    return {
      component
    }
  },
  render () {
    return h(this.component);
  },
});
