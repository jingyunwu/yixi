<template>
  <div class="explore">
    <van-nav-bar
      title="探索"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <van-search placeholder="发现世界的另一面" v-model="value" shape="round" background="#ffffff"/>
    <div class="explore-table">
      <span class="table">标签</span>
      <exploreTable></exploreTable>
    </div>
    <div class="explore-sort">
      <span class="table">分类</span>
    </div>
  </div>
</template>

<script>
import exploreTable from '@/components/explore-table'
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
  },
  components: {
    exploreTable
  }
}
</script>

<style lang="stylus" scoped>
.explore
  width 100%
  height 100%
  background-color #f9fcfc
  .van-nav-bar__title
    font-weight bold
    font-size 20px
  .van-icon
    color #000
  .van-nav-bar__text
    color #000
  .van-search
    margin-top 50px
    
    .van-search__content
      border 1px solid #e2e5e7
      box-shadow 0px 0px 1px #afaeae
      z-index 5
      background #ffffff
      height 53px
      border-radius 31px
      .van-cell
        line-height 43px

  .explore-table
    width 100%
    height 200px 
    background #ffffff
    margin-top 10px     
    border 1px solid #eeeeee
    .table
      display block
      margin-left 30px
      margin-top 15px
      position relative
      color #333333
      font-weight bold
      &::before 
        content ''
        position absolute
        top 8px
        left -13px
        width 5px
        height 5px
        border-radius 50%
        background-color #c60d03
    .van-grid
      flex-wrap nowrap
      margin-left 20px    
  .explore-sort
    width 100%
    height 200px 
    background #ffffff
    margin-top 10px     
    border 1px solid #eeeeee
    .table
      display block
      margin-left 30px
      margin-top 15px
      position relative
      color #333333
      font-weight bold
      &::before 
        content ''
        position absolute
        top 8px
        left -13px
        width 5px
        height 5px
        border-radius 50%
        background-color #c60d03
</style>
