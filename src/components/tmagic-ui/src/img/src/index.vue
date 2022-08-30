<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <img class="magic-ui-img" :src="config.src" @click="clickHandler" />
</template>
<script>
import { defineComponent } from 'vue';
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

    return {
      clickHandler() {
        if (props.config.url) window.location.href = props.config.url;
      },
    };
  },
});
</script>
