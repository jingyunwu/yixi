<template>
  <div class="tabbar" >
    <van-tabbar v-model="active" route active-color="#ba261d" inactive-color="#000">
      <van-tabbar-item replace
        to="/home">
        <span>首页</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon[0].active : icon[0].normal"
        >
      </van-tabbar-item>
      <van-tabbar-item replace
        to="/spot">
        <span>现场</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon[1].active : icon[1].normal"
        >
      </van-tabbar-item>
      <van-tabbar-item replace
        to="/mine">
        <span>我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon[2].active : icon[2].normal"
        >
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  data() {
    return {
      active: 0,
      icon: [
        {
          normal: require('../assets/image/home.png'),
          active: require('../assets/image/home1.png')
        },
        {
          normal: require('../assets/image/spot.png'),
          active: require('../assets/image/spot1.png')
        },
        {
          normal: require('../assets/image/mine.png'),
          active: require('../assets/image/mine1.png')
        }

      ]
        
      }
    }
  }

</script>
 
<style lang="stylus">
.tabbar
  margin-bottom 65px
  .van-hairline--top-bottom 
    border-top 1px solid #f1f1f2
    background #ffffff
</style>
