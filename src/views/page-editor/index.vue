<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <PageContainer>
      <div class="container">
        <div class="left">
          <draggable
            class="components-list"
            :list="list1"
            :group="{ name: 'people', pull: 'clone', put: false }"
            :clone="cloneDog"
            @change="log"
            item-key="id"
          >
            <template #item="{ element }">
              <div class="components-item">
                {{ element.name }}
              </div>
            </template>
          </draggable>
        </div>
        <div class="middle">
          <draggable
            class="view-list"
            :list="list2"
            group="people"
            @change="log"
            item-key="id"
          >
            <template #item="{ element }">
              <div class="view-item">
                {{ element.name }}
              </div>
            </template>
          </draggable>
        </div>
        <div class="right">

        </div>
      </div>
    </PageContainer>
</template>

<script setup>
import { PageContainer } from '@ant-design-vue/pro-layout';
import { onMounted, ref } from 'vue';
import draggable from 'vuedraggable'
import { findComponents } from '../../service/compoment'

const list1 = ref([])
const list2 = ref([])

const log = (evt) => {
  window.console.log(evt);
}
const cloneDog = (component)  => {
  return {
    ...component,
    id: new Date().getTime().toString(32).substring(3,)
  };
}

onMounted(() => {
  findComponents().then(res => {
    list1.value = res
  })
})
</script>

<style lang="stylus" scoped>
.container
  display flex
  .left, .right
    width 300px
    border 1px soild #eee
    height 500px
    overflow auto
    background #fff
  .middle
    flex 1
    margin 0 16px
    border 1px soild #eee
    height 500px
    overflow auto
    background #fff
  .components-list
    width 100%
    height 100%
    overflow auto
    .components-item
      padding 8px
      border-bottom 1px solid #eee
  .view-list
    width 100%
    height 100%
    overflow auto
    .view-item
      padding 8px
      border-bottom 1px solid #eee
</style>