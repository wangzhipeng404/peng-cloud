<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <PageContainer>
    <Row :gutter="32" >
      <Col :span="8">
        <Card>
          <Statistic title="页面数量" :value="pagesCount" />
        </Card>
      </Col>
      <Col :span="8">
        <Card>
          <Statistic title="组件数量" :value="componentsCount" />
        </Card>
      </Col>
      <Col :span="8">
        <Card>
          <Statistic title="库数量" :value="libsCount" />
        </Card>
      </Col>
    </Row>
  </PageContainer>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Statistic, Row, Col, Card } from 'ant-design-vue'
import { PageContainer } from "@ant-design-vue/pro-layout"
import { countPage } from '@/service/page'
import { countComponent } from '@/service/compoment'
import { countLib } from '@/service/lib'
const pagesCount = ref(0)
const componentsCount = ref(0)
const libsCount = ref(0)

onMounted(async () => {
  pagesCount.value = await countPage()
  componentsCount.value = await countComponent()
  libsCount.value = await countLib()
})
</script>