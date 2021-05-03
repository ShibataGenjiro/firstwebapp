<template>
  <div class="icons" v-if="iconsList.length">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, key) in page" :key="key">
        <div class="icons-item" v-for="p in item" :key="p.id">
          <img :src="p.imgUrl" />
          <p>{{ p.title }}</p>
        </div>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ["iconsList"],
  data() {
    return {
      swiperOptions: {
        loop: true
      }
    };
  },
  computed: {
    page() {
      let pages = [];
      this.iconsList.forEach((item, index) => {
        let idx = Math.floor(index / 8);
        if (!pages[idx]) {
          pages[idx] = [];
        }
        pages[idx].push(item);
      });
      return pages;
    }
  }
};
</script>

<style scoped lang="stylus">

@import '~css/common.styl';

* {
  touch-action: pan-y;
}

.icons {
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}

.icons-item {
  width: 25%;
  padding-bottom: 25%;
  height: 0;
  float: left;
}

.icons-item img {
  width: 1.1rem;
  height: 1.1rem;
  display: block;
  margin: 0 auto;
  padding-top: 0.2rem;
}

.icons-item p {
  margin-top: 0.15rem;
  font-size: 0.28rem;
  text-align: center;
  color: #212121;
  font-weight: 500;
  textOverflow();
  padding:0 .2rem;
}
</style>
