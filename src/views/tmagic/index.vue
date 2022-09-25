<!-- eslint-disable vue/multi-word-component-names -->
<style lang="stylus">
  #tmagic-app
    width 100%
    height 100%
</style>

<template>
  <div id="tmagic-app" ref="elRef"></div>
</template>

<script setup>
if (typeof window.global === 'undefined') {
  window.global = window;
}
import { createApp, onMounted, ref } from 'vue'
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";

import MagicEditor from "@tmagic/editor";
import MagicForm from "@tmagic/form";

import "element-plus/dist/index.css";
import "@tmagic/editor/dist/style.css";
import "@tmagic/form/dist/style.css";
import App from './editor.vue';

const elRef = ref()
const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(MagicEditor);
app.use(MagicForm);
onMounted(() => {
  app.mount(elRef.value);
})

</script>