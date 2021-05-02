<template>
  <div class="header-swiper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="item.imgUrl" />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperList: [
        {
          id: "01",
          imgUrl: require("@/assets/img/swiper1.jpg")
        },
        {
          id: "02",
          imgUrl: require("@/assets/img/swiper2.jpg")
        },
        {
          id: "03",
          imgUrl: require("@/assets/img/swiper3.jpg")
        }
      ],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      }
    };
  }
};
</script>

<style scoped>
* {
  touch-action: pan-y;
}

.header-swiper {
  /* width: 100%;
  height: 2rem; */
  background: #ccc;
  height: 0;
  padding-bottom: 26.67%;
}

.header-swiper img {
  width: 100%;
  height: 100px;
}

/* >>>样式穿透 */
/* lang="stylus"不写也是可以的 */
/* 因为.swiper-pagination-bullet是在main中的，.header-swiper是局部的scoped，局部改不了全局，如果需要这样修改css,就需要样式穿透 */

.header-swiper >>> .swiper-pagination-bullet {
  background: #fff;
}
</style>
