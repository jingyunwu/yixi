<template>
  <div ref="home" class="home">
    <div v-for="(item, index) in home" :key="index" class="list">
      <img :src="item.image" class="image" alt="" width="340" height="240"/>
      <h1 class="title">{{item.title}}</h1>
      <span class="name">{{item.name}} - {{item.profession}}</span>
      <p class="desc">{{item.desc}}</p>
      <span class="tt">#{{item.type}}</span>
      <span class="tt">{{item.time}}</span>
      <img class="star" :src="isCollect? url2:url1 " width="25" height="25" alt="" @click="collect">
      <img class="turn" src="../assets/image/turn.png" width="23" height="23" alt="">
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
const response = require('../common/data/home.json');
const ERR_OK = 0;
export default {
  name: 'index',
  data() {
    return {
      isCollect: false,
      url1: require('../assets/image/star.png'),
      url2: require('../assets/image/star1.png'),
    }
  },
  methods: {
    // show() {
    //   this.scroll = new BScroll(this.$refs.home, {
    //     scrollY: true,
    //     click: true
    //   })
    // }
    collect() {
      if(this.isCollect) {
        this.isCollect = false
      } else {
        this.isCollect = true
      }
    },
  },
  created() {
    if(response.errno === ERR_OK) {
      this.home = response.data;
      // this.$nextTick(() => {
      //     this.show()
      //   });
    }
  }
}
</script>

<style lang='stylus' scoped>
.home
  display flex
  flex-direction column
  align-items center
  
  .list
    width 340px
    height 360px
    border 1px solid #ededee
    margin-top 15px
    border-radius 3px
    background #ffffff
    position relative
    color #333333
    font-size 14px
    .image
      border-top-left-radius 3px
      border-top-right-radius 3px
    .title
      position absolute  
      color #ffffff
      font-size 20px
      bottom 115px
      left 10px
    .name
      position relative
      left 10px 
      top 5px 
    .desc
      margin-left 10px
      margin-right 10px
    .tt
      font-size 11px 
      position relative
      left 10px 
      bottom 10px
    .star
      margin-left 160px
    .turn 
      margin-left 10px
</style>
