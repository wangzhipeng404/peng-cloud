<template>
  <component
    v-for="item in views"
    :key="item.id"
    :is="item.type" 
    v-bind="item"
  >
    <template v-if="item.items && item.items.length > 0">
      <page-render :views="item.items" />
    </template>
  </component>
</template>

<script setup>
import { defineProps, watchEffect } from 'vue';
const props = defineProps({
  views: {
    type: Array,
    default: () => []
  }
})
watchEffect(() => {
  console.log(props.vues)
})
</script>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'page-render',
})
</script>