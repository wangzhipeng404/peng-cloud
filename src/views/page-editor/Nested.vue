<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <component 
    :is="componentsMap.has(item.type) ? componentsMap.get(item.type) : item.type"
    v-bind="item"
    :class="{ 
      active: currentItem && item.id == currentItem.id,
      'min-height': item.childNames && item.childNames.length > 0
    }"
    @click.stop="selectItem(item)"
    class="item-content"
  >
    <span class="component-name">{{item.name}}</span>
    <draggable
      v-if="item.childNames && item.childNames.length > 0"
      class="dragArea"
      :list="item.items"
      :group="group"
      :item-key="itemKey"
      @change="log"
    >
      <template #item="{ element }">
        <nested-draggable
          :item="element" 
          :item-key="itemKey"
          :group="group"
          :components-map="componentsMap"
        />
      </template>
    </draggable>
  </component>
</template>
<script setup>
import { defineProps, inject } from 'vue'
import draggable from "vuedraggable";
const { item: currentItem, selectItem } = inject('current')
defineProps({
  itemKey: {
    type: String,
    default: 'id',
  },
  group: {
    type: [String, Object],
    default: () => ({ name: 'group' })
  },
  item: {
    required: true,
    type: Object
  },
  componentsMap: {
    type: Map,
    default: () => new Map()
  }
})


const log = (evt) => {
  console.log(evt)
}

</script>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'nested-draggable',
})
</script>
<style lang="stylus" scoped>
.item-content
  position relative
  border 1px dashed #595959
  background rgba(255, 255, 255, 1)
.preview-component
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  z-index 0
.component-name
  position absolute
  top 10px
  left 10px
  opacity 0.5
  font-size 12px
  z-index 9
.delete-icon
  position absolute
  top 10px
  right 10px
  color red
  z-index 1
.dragArea
  box-sizing border-box
  display flex
  flex 1
  overflow-y auto
.active
  border-color #40a9ff
.min-height
  min-height 100px
</style>