<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <img class="magic-ui-qrcode" :src="imgUrl" />
</template>

<script>
import { defineComponent, ref, watch } from 'vue';
import QRCode from 'qrcode'
import useApp from '../../useApp';

export default defineComponent({
  props: {
    config: {
      type: Object ,
      default: () => ({}),
    },

    model: {
      type: Object,
      default: () => ({}),
    },
  },

  setup(props) {
    useApp(props);
    const imgUrl = ref();

    watch(
      () => props.config.url,
      (url = '') => {
        QRCode.toDataURL(url, (e, url) => {
          if (e) console.error(e);
          imgUrl.value = url;
        });
      },
      {
        immediate: true,
      },
    );

    return {
      imgUrl,
    };
  },
});
</script>
