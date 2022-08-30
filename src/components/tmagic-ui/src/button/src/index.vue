<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button class="magic-ui-button" @click="clickHandler">
    <slot>
      <magic-ui-text :config="textConfig"></magic-ui-text>
    </slot>
  </button>
</template>
<script>
import { computed, defineComponent, getCurrentInstance, reactive } from 'vue';
import useApp from '../../useApp';

export default defineComponent({
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },

    model: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    useApp(props);
    const vm = getCurrentInstance()?.proxy;
    const actions = reactive([]);
    const actualActions = computed(() => [
      typeof props.config.preAction === 'function' ? props.config.preAction : () => true,
      ...actions,
      typeof props.config.postAction === 'function' ? props.config.postAction : () => true,
    ]);
    function pushAction(action) {
      actions.push(action);
    }
    async function clickHandler() {
      for (const fn of actualActions.value) {
        if (typeof fn === 'function') {
          const ret = await fn(vm, { model: props.model });
          if (ret === false) {
            break;
          }
        }
      }
    }

    const textConfig = computed(() => ({
      type: 'text',
      text: props.config?.text || '',
      disabledText: props.config?.disabledText || '',
      html: props.config?.html || '',
    }));

    return {
      pushAction,
      clickHandler,
      textConfig,
    };
  },
});
</script>
