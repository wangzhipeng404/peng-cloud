<template>
  <el-radio-group size="small" v-model="viewerDevice" :class="viewerDevice" @change="deviceSelect">
    <el-radio-button label="phone">Phone</el-radio-button>
    <el-radio-button label="pad">Pad</el-radio-button>
    <el-radio-button label="pc">PC</el-radio-button>
  </el-radio-group>
</template>

<script>
import { defineComponent, ref } from 'vue';

import { editorService } from '@tmagic/editor';

const devH = {
  phone: 817,
  pad: 1024,
  pc: 900,
};

const devW = {
  phone: 375,
  pad: 768,
  pc: 1600,
};

const getDeviceHeight = (viewerDevice) => devH[viewerDevice];

const getDeviceWidth = (viewerDevice) => devW[viewerDevice];

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      default: () => ({
        width: 375,
        height: 817,
      }),
    },
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const calcFontsize = (width) => {
      const fontSize = width / 3.75;
      const { iframe } = editorService.get('stage').renderer;
      if (!iframe?.contentWindow) return;
      iframe.contentWindow.document.documentElement.style.fontSize = `${fontSize}px`;
    };

    const viewerDevice = ref('phone');

    return {
      viewerDevice,

      deviceSelect(device) {
        const width = getDeviceWidth(device);
        const height = getDeviceHeight(device);
        emit('update:modelValue', {
          width,
          height,
        });

        calcFontsize(width);
      },
    };
  },
});
</script>

<style lang="stylus">
.m-editor-workspace {
  * {
    user-select: none;
  }

  .el-slider {
    position: absolute;
    bottom: 40px;
    left: 20px;
    width: 250px;
    opacity: 0.5;
    transition: opacity 1s;
  }

  .el-slider:hover {
    opacity: 1;
  }

  .el-radio-group {
    position: absolute;
    top: 10px;
    right: 40px;
    z-index: 10;
  }

  .viewer-scrollbar > .el-scrollbar__bar {
    display: none;
  }

  .select-component {
    text-align: center;
    transform: translate3d(0, -70px, 0);

    p {
      margin-top: 8px;
    }
  }

  .close-pop-button {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
}
</style>
