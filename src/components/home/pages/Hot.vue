<template>
  <div class="hot">
    <div class="hot-top">
      <img
        src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png"
      />
      <span>本周热门榜单</span>
      <span class="hot-title">全部榜单 ></span>
    </div>
    <ul class="hot-list">
      <li class="hot-item" v-for="item in hotList" :key="item.id">
        <img :src="item.imgUrl" />
        <p>{{ item.title }}</p>
        <p>
          <span class="hot-mark"> ¥{{ item.mark }} </span>起
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotList: [
        {
          id: "01",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg",
          title: "故宫",
          mark: "20.0"
        },
        {
          id: "02",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_250x250_e1b08a5e.jpg",
          title: "八达岭长城",
          mark: "40.0"
        },
        {
          id: "03",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/2005/30/307fa37039eab5cba3.water.jpg_250x250_d76001d5.jpg",
          title: "颐和园",
          mark: "34.5"
        },
        {
          id: "04",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_250x250_48713510.jpg",
          title: "北京野生动物园",
          mark: "200.0"
        },
        {
          id: "05",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1602/92/920e47352552c1c990.water.jpg_250x250_ee99c18e.jpg",
          title: "天坛",
          mark: "18.0"
        }
      ]
    };
  }
};
</script>

<style scoped lang="stylus">

@import '~css/common.styl';

.hot {
  margin-top: 0.2rem;
  background-color: #fff;
  font-size: 0.28rem;
}

.hot-top {
  padding: 0.2rem;
  position: relative;
}

.hot-top img {
  width: 0.3rem;
  height: 0.3rem;
}
.hot-top span {
  color: #212121;
  font-size: 0.32rem;
  text-align: center;
}
.hot-top span.hot-title {
  position: absolute;
  right: 0.2rem;
  color: #616161;
  font-size: 0.28rem;
  text-align: center;
}

.hot-list {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  height: 3rem;
}

.hot-item {
  display: inline-block;
  padding: 0 0.2rem;
  width: 2rem;
  height: 2rem;
}

.hot-item img {
  width: 100%;
  height: 100%;
}

.hot-item p {
  margin-top: 0.1rem;
  text-align: center;
  textOverflow();
}

.hot-item p .hot-mark {
  color: #ff8300;
  font-size: 0.32rem;
}
</style>
