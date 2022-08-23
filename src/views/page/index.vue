<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Render :views="pageInfo.protocl.views" />
</template>
<script setup>
import { useRoute } from 'vue-router'
import Render from '@/components/Render'
import { getPage } from '@/service/page'
import { onMounted, toRefs } from 'vue';
import { Dialog } from 'vant';

const route = useRoute()
const pageId = route.params.id
let pageInfo = toRefs({
  protocl: {
    views: []
  }
})

const notFound = () => {
  Dialog.alert({
    title: '提示信息',
    message: '找不到对应的页面'
  })
}
onMounted(async () => {
  if (!pageId) {
    notFound()
    return
  }
  try {
    const res = await getPage(pageId)
    if (res) {
      res.protocl = JSON.parse(res.protocl)
      pageInfo = toRefs(res)
      console.log(pageInfo)
    } else {
      notFound()
    }
  } catch (e) {
    console.log(e)
    notFound()
  }
  
})
</script>