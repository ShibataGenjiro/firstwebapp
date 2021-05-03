<template>
  <!-- bug:异步请求图片数据后，swiper的loop失效 -->
  <!-- 原因： loop设置为true 则开启loop模式。
  loop模式：会在原本slide前后复制若干个slide(默认一个)并在合适的时候切换，让Swiper看起来是循环的， 可是在vue的v-for中时，异步加载的数据都还没有返回时，就先加载了Swiper组件并复制了sliper -->
  <!-- 解决方法：给swiper组件的父盒子添加v-if的属性，v-if=swiperList.length，确保异步加载的数据已经返回后，再加载swiper组件 -->
  <div class="header-swiper" v-if="swiperList.length">
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
  props: ["swiperList"],
  data() {
    return {
      swiperOptions: {
        observer: true,

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
