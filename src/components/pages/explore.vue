<template>
  <div>
    <van-nav-bar
      title="探索"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <van-search placeholder="发现世界的另一面" v-model="value" shape="round" />
   
  </div>
</template>

<script>
export default {
  name: 'explore',
  data() {
    return {
      value: null
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push({path: '/home'})
    },
  }
}
</script>

<style lang="stylus" scoped>
  .van-icon
    color #000
  .van-nav-bar__text
    color #000
  .van-search
    margin-top 50px
    .van-search__content
      height 40px
</style>
