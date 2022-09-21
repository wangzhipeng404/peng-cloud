<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Render :views="pageInfo.protocl.items" />
  <van-empty v-if="noIndex" description="找不到首页" />
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'
import Render from '@/components/Render'
import { getPage } from '@/service/page'
import { onMounted, ref } from 'vue';
import { Dialog } from 'vant';
import { getSetting } from '@/service/setting';

const noIndex = ref(false)
const router = useRouter()
const route = useRoute()
const pageInfo = ref({
  protocl: {
    items: []
  }
})

const notFound = async () => {
  try {
    const indexSetting = await getSetting('index')
    console.log(indexSetting)
    if (indexSetting && indexSetting.value) {
      router.replace({
        path: `/page/${indexSetting.value}`,
      })
      loadPage(indexSetting.value)
    } else {
      Dialog.alert({
        title: '提示信息',
        message: '找不到对应的页面,请先去后台添加页面'
      }).then(() => {
        noIndex.value = true
      })
    }
  } catch (e) {
    Dialog.alert({
      title: '提示信息',
      message: '找不到对应的页面,请先去后台添加页面'
    }).then(() => {
      noIndex.value = true
    })
  }
}

async function loadPage (id) {
  if (!id) {
    notFound()
    return
  }
  try {
    const res = await getPage(id)
    if (res) {
      pageInfo.value = {
        ...res,
        protocl: res.protocl
      }
    } else {
      notFound()
    }
  } catch (e) {
    console.log(e)
    notFound()
  }
  
}

onMounted(() => {
  loadPage(route.params.id)
})
</script>