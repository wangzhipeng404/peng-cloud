<template>
  <component
    v-for="item in views"
    :key="item.id"
    :is="item.key" 
    v-bind="item.props"
  >
    <template v-if="item.children && item.children.length > 0">
      <page-render :views="item.children" />
    </template>
  </component>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
  views: {
    type: Array,
    default: () => []
  }
})
</script>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'page-render',
})
</script>