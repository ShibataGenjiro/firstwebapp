<template>
  <div class="icons">
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
  data() {
    return {
      swiperOptions: {
        loop: true
      },
      loop: true,
      iconsList: [
        {
          id: "01",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/piao.png",
          title: "景点门票"
        },
        {
          id: "02",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/package.png",
          title: "必游榜单"
        },
        {
          id: "03",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/train.png",
          title: "夏日玩水"
        },
        {
          id: "04",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/flight.png",
          title: "主题乐园"
        },
        {
          id: "05",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/hotel.png",
          title: "动植物园"
        },
        {
          id: "06",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/piao.png",
          title: "故宫"
        },
        {
          id: "07",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/package.png",
          title: "一日游"
        },
        {
          id: "08",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/train.png",
          title: "公园"
        },
        {
          id: "09",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/flight.png",
          title: "游乐场"
        },
        {
          id: "10",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/hotel.png",
          title: "全部玩乐"
        }
      ]
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

<style scoped>
* {
  touch-action: pan-y;
}

.icons {
  width: 100%;
  overflow: hidden;
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
}
</style>
