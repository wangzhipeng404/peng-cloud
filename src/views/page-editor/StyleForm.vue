<template>
  <Form
    :model="values"
    name="basic"
    autocomplete="off"
    :label-width="100"
  >
    <Form.Item label="弹性比例" name="flex">
      <Input v-model:value="values.flex" />
    </Form.Item>
    <Form.Item label="尺寸" name="width">
      <Space wrap>
        <Form.ItemRest>
          <Input v-model:value="values.width" placeholder="宽度" class="width-100" />
        </Form.ItemRest>
        <Form.ItemRest>
          <Input v-model:value="values.minWidth" placeholder="最小宽度" class="width-100" />
        </Form.ItemRest>
        <Form.ItemRest>
          <Input v-model:value="values.height" placeholder="高度" class="width-100" />
        </Form.ItemRest>
        <Form.ItemRest>
          <Input v-model:value="values.minHeight" placeholder="最小高度" class="width-100" />
        </Form.ItemRest>
      </Space>
    </Form.Item>
    <Form.Item label="背景" name="background">
      <Input v-model:value="values.background" />
    </Form.Item>
    <Form.Item label="外边距" name="margin">
      <Space wrap>
        <Form.ItemRest>
          <Input v-model:value="values.marginTop"  placeholder="上" class="width-100"/>
        </Form.ItemRest>
        <Form.ItemRest>
          <Input v-model:value="values.marginBottom" placeholder="下" class="width-100" />
        </Form.ItemRest>
        <Form.ItemRest>
          <Input v-model:value="values.marginLeft" placeholder="左" class="width-100"/>
        </Form.ItemRest>
        <Form.ItemRest>
          <Input v-model:value="values.marginRight" placeholder="右" class="width-100"/>
        </Form.ItemRest>
      </Space>
    </Form.Item>
    <Form.Item label="内边距" name="padding">
      <Space wrap>
        <Form.ItemRest>
          <Input v-model:value="values.paddingTop"  placeholder="上" class="width-100"/>
        </Form.ItemRest>
        <Form.ItemRest>
          <Input v-model:value="values.paddingBottom" placeholder="下" class="width-100" />
        </Form.ItemRest>
        <Form.ItemRest>
          <Input v-model:value="values.paddingLeft" placeholder="左" class="width-100"/>
        </Form.ItemRest>
        <Form.ItemRest>
          <Input v-model:value="values.paddingRight" placeholder="右" class="width-100"/>
        </Form.ItemRest>
      </Space>
    </Form.Item>
  </Form>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';
import { Form, Input, Space } from 'ant-design-vue';
const emits = defineEmits(['update:value'])
const props = defineProps({
  value: {
    type: Object,
    default: () => {}
  }
})

const values = ref(props.value)

watch(values, () => {
  console.log(values.value)
  emits('update:value', values.value)
}, { deep: true })
</script>

<style lang="stylus">
  .width-100
    width 100px
</style>