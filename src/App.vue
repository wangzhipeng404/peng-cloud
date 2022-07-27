<template>
  <x-editor />
</template>

<script>
import Editor from './components/Editor.vue'

export default {
  name: 'App',
  components: {
    [Editor.name]: Editor
  }
}
</script>

<style lang="stylus">
* {
  margin 0
  padding 0
}
div
  box-sizing border-box
</style>
