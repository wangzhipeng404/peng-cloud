export const tp0 = `
<template>
  <div>
  <div class="blue">hello word</div>
  <input v-model="val" />
  </div>
</template>
<script setup>
  const val = ref('')
  onMounted(() => {
    console.log('onMounted')
  })
  watchEffect(() => {
    console.log(val.value)
  })
</script>
<style lang="styl" scoped>
.blue
  color blue
</style>
`;

export const tp1 = `
<template>
  <div>
  <div class="blue">hello word</div>
  <input v-model="val" />
  </div>
</template>
<script>
export default defineComponent({
  setup () {
    const val = ref('')
    onMounted(() => {
      console.log('onMounted')
    })
    watchEffect(() => {
      console.log(val.value)
    })
    return { val }
    // return () => (<input v-model={val.value} />)
  }
})
</script>
`

export const tp2 = `
<template>
  <div>
    <div class="blue">hello word</div>
    <input v-model="val" />
  </div>
</template>
<script>
export default defineComponent({
  data () {
    return {
      val: ''
    }
  },
  watch: {
    val (val) {
      console.log(val)
    }
  },
  mounted () {
    console.log('imoport')
    console.log('onMounted')
  }
})
</script>
<style lang="stylus" scoped>
.blue {
  color: blue;
}
</style>
`;

export const tp3 = `
<script>
export default defineComponent({
  data () {
      return {
        list: [],
        loading: false,
        finished: false,
        refreshing: false,
      }
  },
  methods: {
    onLoad() {
      if (this.timer) return;
      this.loading = true
      this.timer = setTimeout(() => {
        for (let i = 0; i < 20; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;
        this.refreshing = false
        if (this.list.length >= 80) {
          this.finished = true;
        }
        this.timer = null
      }, 2000);
    },
    onRefresh() {
      this.refreshing = true
      this.list = []
      this.finished = false;
      this.onLoad();
    },
    onRowClick (e) {
      console.log(e)
    }
  },
  render () {
      return (
        <van-pull-refresh v-model={this.refreshing} onRefresh={this.onRefresh}>
          <van-list
            v-model:loading={this.loading}
            finished={this.finished}
            finished-text="没有更多了"
            loading-text="正在加载"
            onLoad={this.onLoad}
          >
            {this.list.map((item) => (
              <van-cell
                key={item}
                title={item}
                onClick={() => this.onRowClick(item)} 
              />
            ))}
          </van-list>
        </van-pull-refresh>
      )
  }
})
</script>
<style lang="styl">
.van-cell__title
  color red
  text-align center
</style>
`