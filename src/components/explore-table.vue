<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in TableList" :key="index"></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'exploreTable',
  data() {
    return {
      TableList: [
        {
          imgUrl: require('../assets/image/keji.png'),
          name: '科技'
        },
        {
          imgUrl: require('../assets/image/yundong.png'),
          name: '运动'
        },
        {
          imgUrl: require('../assets/image/wenhua.png'),
          name: '文化'
        },
        {
          imgUrl: require('../assets/image/yishu.png'),
          name: '艺术'
        },
        {
          imgUrl: require('../assets/image/shehui.png'),
          name: '社会'
        },
        {
          imgUrl: require('../assets/image/yinyue.png'),
          name: '音乐'
        },
        {
          imgUrl: require('../assets/image/jianzhu.png'),
          name: '建筑'
        },
        {
          imgUrl: require('../assets/image/dianying.png'),
          name: '电影'
        },
        {
          imgUrl: require('../assets/image/lubiao.png'),
          name: '人生'
        }
      ],
      swiperOption: {
          slidesPerView: 4.5,
          spaceBetween: 0,
          freeMode: true,
          
        }
    }
  },
  components: {
    swiper,
    'swiper-slide':swiperSlide
  },
}
</script>

<style lang="stylus" scoped>
  .swiper-slide
    border 1px solid red
    margin-left 18px
    height 92px
    margin-top 10px
</style>
