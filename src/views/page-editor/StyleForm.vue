<template>
  <Form
    :model="values"
    name="basic"
    autocomplete="off"
    :label-width="100"
  >
    <Form.Item label="弹性比例" name="flex">
      <InputNumber v-model:value="values.flex" />
    </Form.Item>
    <Form.Item label="宽度" name="width">
      <InputNumber v-model:value="values.width" />
    </Form.Item>
    <Form.Item label="高度" name="height">
      <InputNumber v-model:value="values.height" />
    </Form.Item>
    <Form.Item label="背景" name="background">
      <Input v-model:value="values.background" />
    </Form.Item>
    <Form.Item label="外边距" name="margin">
      <Input.Group>
        <InputNumber v-model:value="values['margin-top']"  placeholder="上边距"/>
        <InputNumber v-model:value="values['margin-right']" placeholder="右边距"/>
        <InputNumber v-model:value="values['margin-bottom']" placeholder="下边距" />
        <InputNumber v-model:value="values['margin-left']" placeholder="左边距"/>
      </Input.Group>
    </Form.Item>
    <Form.Item label="内边距" name="padding">
      <Input.Group>
        <InputNumber v-model:value="values['padding-top']"  placeholder="上边距"/>
        <InputNumber v-model:value="values['padding-right']" placeholder="右边距"/>
        <InputNumber v-model:value="values['padding-bottom']" placeholder="下边距" />
        <InputNumber v-model:value="values['padding-left']" placeholder="左边距"/>
      </Input.Group>
    </Form.Item>
  </Form>
</template>

<script setup>
import { defineProps, defineEmits, ref, watchEffect } from 'vue';
import { Form, Input, InputNumber, } from 'ant-design-vue';
const emits = defineEmits(['update:value'])
const props = defineProps({
  value: {
    type: Object,
    default: () => {}
  }
})

const values = ref(props.value)

watchEffect(() => {
  emits('update:value', values.value)
})
</script>