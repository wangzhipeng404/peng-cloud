<template>
  <m-editor
    v-model="data"
    :menu="menu"
    :runtime-url="runtimeUrl"
    :props-configs="propsConfigs"
    :props-values="propsValues"
    :component-group-list="componentGroupList"
  >
  </m-editor>
</template>

<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "App",

    setup() {
      return {
        menu: ref({
          left: [
            // 顶部左侧菜单按钮
          ],
          center: [
            // 顶部中间菜单按钮
          ],
          right: [
            // 顶部右侧菜单按钮
          ],
        }),

        data: ref({
          // 初始化页面数据
        }),

        runtimeUrl: "/runtime/vue3/playground.html",
        propsConfigs: [
          // 组件属性列表
        ],
        propsValues: [
          // 组件默认值
        ],

        componentGroupList: ref([
          // 组件列表
        ]),
      };
    },
  });
</script>

<style lang="scss">
  #app {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .m-editor {
    flex: 1;
    height: 100%;
  }
</style>