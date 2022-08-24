import { defineComponent, h, computed, defineAsyncComponent } from 'vue';
import { createComponent } from '../../utils/component'


export default defineComponent({
  name: 'x-shell',
  props: {
    script: {
      type: String,
    }
  },
  setup (props) {
    const component = computed(() => {
      let comp = {}
      if (!props.script) {
        return { render () {
          return h('van-loading')
        }}
      }
      try {
        comp = defineAsyncComponent(() => createComponent(props.script))
      } catch (e) {
        comp = { 
          render () {
            h('div', e)
          }
        }
      }
      return comp
    })
    return {
      component
    }
  },
  render () {
    return h(this.component);
  },
});
