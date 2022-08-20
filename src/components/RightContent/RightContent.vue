<template>
  <div style="margin-right: 12px">
    <Space>
      <a style="padding: 0 12px; display: inline-block; user-select: none" @click="handleClick"><BgColorsOutlined /></a>
      <Dropdown>
        <template #overlay>
          <Menu>
            <Menu.Item>
              <template #icon>
                <SettingOutlined />
              </template>
              <span>个人设置</span>
            </Menu.Item>
            <Menu.Item>
              <template #icon>
                <LogoutOutlined />
              </template>
              <span>退出登录</span>
            </Menu.Item>
          </Menu>
        </template>
        <Avatar shape="square" size="small">
          <template #icon>
            <UserOutlined />
          </template>
          {{ currentUser.nickname }}
        </Avatar>
      </Dropdown>
    </Space>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { Menu, Space, Dropdown, Avatar } from 'ant-design-vue'
import { UserOutlined, SettingOutlined, LogoutOutlined, BgColorsOutlined } from '@ant-design/icons-vue';
import { apply, randomTheme } from '../../hooks/useTheme';

defineProps({
  currentUser: {
    nickname: '',
    avatar: ''
  }
})

const handleClick = () => {
  apply(randomTheme());
};
</script>
