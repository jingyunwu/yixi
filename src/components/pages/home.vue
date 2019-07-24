<template>
  <div>
    <div class="home">
      <div class="header">
        <span class="title">一席</span>
        <img class="image" width="20" height="20" src="../../assets/image/icon.png" alt="" @click="goExplore"/>
      </div>
      <v-index></v-index>
    </div>
  </div>
</template>

<script>
import index from '@/components/index.vue'
export default {
  name: 'home',
  components: {
    'v-index': index
  },
  methods: {
    goExplore() {}
  }
}
</script>

<style lang="stylus" scoped>
  .home 
    position relative
    margin-top 50px
    background #f7fafa
    .header
      position fixed
      top 0
      width 100%
      height 50px
      border-bottom 1px solid #f0f5f4
      background #ffffff
      z-index 100
      .title
        position absolute
        left 50%
        top 50%
        transform translate(-50%, -50%)
      .image
        position absolute
        right 30px
        top 50%
        transform translate(0, -50%)
</style>
