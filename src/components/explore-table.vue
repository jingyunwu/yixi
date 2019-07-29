<template>
  <swiper :options="swiperOption">
    <swiper-slide>Slide 1</swiper-slide>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'exploreTable',
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
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

<style>

</style>
