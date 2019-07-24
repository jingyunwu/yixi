<template>
  <swiper :options="swiperOption">
    <swiper-slide>
      <img src="../../assets/image/s1.jpg" width="300" height="390" alt="" class="img">
      <p>姥姥说, 心里纯净的人, 会看到天上的白鲸</p>
      <span name="" >北京天桥艺术中心 中剧场</span>
      <span name="" >07月21日</span>
      <div>一席北京</div>
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/image/s2.jpg" width="300" height="390" alt="" class="img">
      <p>我相信你</p>
      <span name="" >杭州萧山剧院</span>
      <span name="" >06月15日</span>
      <div>一席杭州</div>
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/image/s3.jpg" width="300" height="390" alt="" class="img">
      <p>梦的研讨会|一席大院儿001</p>
      <span name="" >东郎电影创意产业园D101</span>
      <span name="" >06月06日</span>
      <div>一席北京</div>
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/image/s4.png" width="300" height="500" alt="" class="img">
    </swiper-slide>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'spot',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
          },
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .swiper-slide 
    background-position: center
    background-size: cover
    width: 300px
    height: 500px
    border: 1px solid #ecefef
    border-radius: 3px
    background #ffffff
    margin-top 50px
    .img
      border-top-right-radius: 3px
      border-top-left-radius: 3px
</style>