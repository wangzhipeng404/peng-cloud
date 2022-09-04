<template>
  <Form
    :model="values"
    name="basic"
    autocomplete="off"
    :label-width="100"
  >
    <Form.Item :label="item.text" v-for="item in config" :key="item.name" :name="item.name">
      <Select 
        v-model:value="values[item.name]"
        v-if="item.type === 'select'"
      >
        <Select.Option
          :value="option.value"
          v-for="option in item.options"
          :key="option.value"
        >
          {{option.text}}
        </Select.Option>
      </Select>
      <Input v-model:value="values[item.name]" v-else />
    </Form.Item>
  </Form>
</template>

<script setup>
import { defineProps, defineEmits, ref, watchEffect } from 'vue';
import { Form, Input, Select } from 'ant-design-vue';
const emits = defineEmits(['update:value'])
const props = defineProps({
  config: {
    type: Array,
    default: () => []
  },
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