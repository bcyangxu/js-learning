<template lang="">
    <div class="wrapper">
        <swiper :options="swiperOption">
        <swiper-slide v-for="item of swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" alt="banner">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    </div>
</template>
<script>
import SwiperImg from "../assets/img/01.jpg"
export default {
    data() {
        return {
            swiperOption: {
                el: '.swiper-pagination'
            },
            loop: true,
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false
            },
            "swiperList": [
                {
                    "id": "01",
                    "imgUrl": SwiperImg
                },
                {
                    "id": "02",
                    "imgUrl": SwiperImg
                },
                {
                    "id": "03",
                    "imgUrl": SwiperImg
                }
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
  .wrapper deep() .swiper-pagination-bullet-active
    background: #ffffff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    .swiper-img
      width: 100%
</style>