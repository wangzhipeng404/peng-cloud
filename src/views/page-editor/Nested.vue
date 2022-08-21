<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="item-content" :class="{ active: currentItem && item.id == currentItem.id }" v-bind="item.props" @click.stop="selectItem(item)">
    <span class="component-name">{{item.name}}</span>
    <component 
      :is="item.type == 1 ? item.key : componentsMap.get(item.key)"
      v-bind="item.props"
    >
      <draggable
        v-if="item.childNames.length > 0"
        class="dragArea"
        :list="item.children"
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
  </div>
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
  padding 8px
  border 1px dashed #595959
  display flex
  overflow-y auto
  min-height 100px
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
</style>