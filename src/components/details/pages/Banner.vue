<template>
  <div class="banner">
    <div @click="showSwiper">
      <div class="banner-img">
        <img
          src="http://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_r_800x800_80237e33.jpg"
        />
      </div>
      <div class="banner-title">
        圆明园(AAAAA景区)
      </div>
    </div>

    <div class="img-swiper" v-show="imgSwiper" @click="hideSwiper">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="item in bannerList" :key="item.id">
          <img :src="item.imgUrl" />
        </swiper-slide>
      </swiper>

      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        }
      },
      bannerList: [
        {
          id: "01",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1503/98/98e3de0a8526f2df.water.jpg_r_800x800_8041e76f.jpg"
        },
        {
          id: "02",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1908/e3/e3a0d9ee9b30f994a3.img.jpg_r_800x800_fb523a67.jpg"
        },
        {
          id: "03",
          imgUrl:
            "http://img1.qunarzz.com/wugc/p118/201306/06/03acfb2cd0403ee893835fbb.jpg_r_800x800_0d009867.jpg"
        }
      ],

      imgSwiper: false
    };
  },
  methods: {
    showSwiper() {
      this.imgSwiper = true;
    },
    hideSwiper() {
      this.imgSwiper = false;
    }
  }
};
</script>

<style scoped>
* {
  touch-action: pan-y;
}

.banner {
  position: relative;
}

.banner-img {
  width: 100%;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
}

.banner-img img {
  width: 100%;
}

.banner-title {
  position: absolute;
  bottom: 0.4rem;
  left: 0.3rem;
  font-size: 0.36rem;
  color: #fff;
  text-shadow: 0 1px 2px rgb(0 0 0 / 70%);
}

.img-swiper {
  background-color: #000;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-swiper img {
  width: 100%;
}

.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  color: #fff;
  bottom: 0.6rem;
  font-size: 0.32rem;
}
</style>
