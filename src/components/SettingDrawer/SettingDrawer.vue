<template>
  <Drawer v-model:visible="visible" :width="300" placement="right" :closable="false">
    <template #handle>
      <div class="ant-pro-setting-drawer-handle" @click="handleShowDrawer">
        <SettingOutlined v-if="!visible" />
        <CloseOutlined v-else />
      </div>
    </template>
    <div class="margin-bottom: 24px">
      <h3>导航模式</h3>
      <Radio.Group :value="modelValue.layout" @change="e => updateConf(e.target.value, 'layout')">
        <Radio value="side">左侧菜单布局</Radio>
        <Radio value="top">顶部菜单布局</Radio>
        <Radio value="mix">混合菜单布局</Radio>
      </Radio.Group>
      <Divider />
      <Row style="margin-bottom: 12px">
        <Col :span="12">固定 Header</Col>
        <Col :span="12" style="text-align: right">
          <Switch
            checked-children="开"
            un-checked-children="关"
            :checked="modelValue.fixedHeader"
            @change="checked => updateConf(checked, 'fixedHeader')"
          />
        </Col>
      </Row>
      <Row style="margin-bottom: 12px">
        <Col :span="12">固定 左侧菜单</Col>
        <Col :span="12" style="text-align: right">
          <Switch
            checked-children="开"
            un-checked-children="关"
            :checked="modelValue.fixSiderbar"
            @change="checked => updateConf(checked, 'fixSiderbar')"
          />
        </Col>
      </Row>
      <Row style="margin-bottom: 12px">
        <Col :span="12">自动分割菜单</Col>
        <Col :span="12" style="text-align: right">
          <Switch
            checked-children="开"
            un-checked-children="关"
            :checked="modelValue.splitMenus"
            @change="checked => updateConf(checked, 'splitMenus')"
          />
        </Col>
      </Row>

      <Divider />
      <h3>内容区域</h3>
      <Row style="margin-bottom: 12px">
        <Col :span="12">顶栏</Col>
        <Col :span="12" style="text-align: right">
          <Switch
            checked-children="开"
            un-checked-children="关"
            :checked="modelValue.headerRender === undefined"
            @change="checked => updateConf(checked === true && undefined, 'headerRender')"
          />
        </Col>
      </Row>
      <Row style="margin-bottom: 12px">
        <Col :span="12">页脚</Col>
        <Col :span="12" style="text-align: right">
          <Switch
            checked-children="开"
            un-checked-children="关"
            :checked="modelValue.footerRender === undefined"
            @change="checked => updateConf(checked === true && undefined, 'footerRender')"
          />
        </Col>
      </Row>
      <Row style="margin-bottom: 12px">
        <Col :span="12">菜单</Col>
        <Col :span="12" style="text-align: right">
          <Switch
            disabled
            checked-children="开"
            un-checked-children="关"
            :checked="modelValue.menu === undefined"
            @change="checked => updateConf(checked === true && undefined, 'menu')"
          />
        </Col>
      </Row>
      <Row style="margin-bottom: 12px">
        <Col :span="12">菜单头</Col>
        <Col :span="12" style="text-align: right">
          <Switch
            checked-children="开"
            un-checked-children="关"
            :checked="modelValue.menuHeaderRender === undefined"
            @change="checked => updateConf(checked === true && undefined, 'menuHeaderRender')"
          />
        </Col>
      </Row>
    </div>
  </Drawer>
</template>

<script setup>
import { ref, defineEmits, defineProps, toRaw } from 'vue'
import { SettingOutlined, CloseOutlined } from '@ant-design/icons-vue';
import { Drawer, Row, Col, Switch, Divider,Radio } from 'ant-design-vue'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {}
  }
})
const emit = defineEmits(['update:modelValue']);

const visible = ref(false);
const handleShowDrawer = () => {
  visible.value = !visible.value;
};

const updateConf = (val, type) => {
  const newVal = {
    ...toRaw(props.modelValue),
    [`${type}`]: val,
  };
  console.log('newConf', newVal);
  emit('update:modelValue', newVal);
};
</script>

<style>
.ant-pro-setting-drawer-handle {
  position: absolute;
  top: 240px;
  right: 300px;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  font-size: 16px;
  text-align: center;
  background: var(--primary-color);
  border-radius: 4px 0 0 4px;
  cursor: pointer;
  pointer-events: auto;
}
.ant-pro-setting-drawer-handle span {
    color: rgb(255, 255, 255);
    font-size: 20px;
  }
</style>
