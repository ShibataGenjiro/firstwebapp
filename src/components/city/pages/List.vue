<template>
  <div ref="container" class="container">
    <div>
      <!-- hot -->
      <div class="hot">
        <div class="hot-title">
          热门城市
        </div>
        <ul class="hot-list">
          <li
            class="hot-item"
            v-for="item in hotCities"
            :key="item.id"
            @click="changeCityName(item.name)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>

      <!-- sort -->
      <div class="sort">
        <div class="sort-title">
          字母排序
        </div>
        <ul class="sort-list">
          <li
            class="sort-item"
            v-for="(val, key) in cities"
            :key="key"
            @click="changeSort(key)"
          >
            {{ key }}
          </li>
        </ul>
      </div>

      <!-- list -->
      <div class="list">
        <div v-for="(val, key) in cities" :key="key" :ref="key">
          <div class="list-title">
            {{ key }}
          </div>
          <ul class="list-msg">
            <li
              class="list-item"
              v-for="item in val"
              :key="item.id"
              @click="changeCityName(item.name)"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import BScroll from "better-scroll";

export default {
  props: ["cities", "hotCities"],
  data() {
    return {
      scroll: ""
    };
  },
  mounted() {
    let container = this.$refs["container"];
    this.scroll = new BScroll(container);
  },
  methods: {
    changeSort(sortName) {
      this.scroll.scrollToElement(this.$refs[sortName][0]);
    },
    changeCityName(cityName) {
      // BUG：上海丽江点了没有打印，有一个before伪元素，绝对定位，把上海丽江盖住了
      // 解决：给hot-item加个相对定位
      //console.log(cityName);
      this.changeCity(cityName);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  }
};
</script>

<style scoped lang="stylus">
@import '~css/common.styl';


.container{
  overflow:hidden;
  position: absolute;
  left:0;
  right:0;
  bottom:0;
  top:.88rem;
background-color: #f5f5f5;
}


.list-title {
  font-size: 0.24rem;
  color: #212121;
  padding: 0.2rem 0.3rem;
}

.list-msg {
  background-color: #fff;
  overflow: hidden;
  font-size: 0.28rem;
  position: relative;
  color: #212121;
}

.list-item {
  position:relative;
  font-size: 0.28rem;
  width: 25%;
  text-align: center;
  height: 0.9rem;
  line-height: 0.9rem;
  float: left;
  border-bottom: 0.02rem solid #ddd;
  textOverflow();
}

.list-msg::before {
  content: " ";
  position: absolute;
  height: 100%;
  width: 25%;
  left: 25%;
  border-left: 0.02rem solid #ddd;
  border-right: 0.02rem solid #ddd;
}

.list-msg::after {
  content: " ";
  position: absolute;
  height: 100%;
  width: 0%;
  left: 75%;
  border-left: 0.02rem solid #ddd;
}

.hot-title {
  font-size: 0.24rem;
  color: #212121;
  padding: 0.2rem 0.3rem;
}

.hot-list {
  background-color: #fff;
  overflow: hidden;
  font-size: 0.28rem;
  position: relative;
  color: #212121;
  position: relative;
}

.hot-list::before {
  content: " ";
  position: absolute;
  height: 100%;
  width: 33.3333%;
  left: 33.3333%;
  border-left: 0.02rem solid #ddd;
  border-right: 0.02rem solid #ddd;
}

.hot-item {
  position:relative;
  width: 33.3333%;
  text-align: center;
  height: 0.9rem;
  line-height: 0.9rem;
  float: left;
  border-bottom: 0.02rem solid #ddd;
}

.sort-title {
  font-size: 0.24rem;
  color: #212121;
  padding: 0.2rem 0.3rem;
}

.sort-list {
  background-color: #fff;
  overflow: hidden;
  font-size: 0.28rem;
  position: relative;
  color: #212121;
}

/* .sort-list::before {
  content: " ";
  position: absolute;
  height: 100%;
  width: 33.3333%;
  left: 33.3333%;
  border-left: 0.02rem solid #ddd;
  border-right: 0.02rem solid #ddd;
} */

.sort-item {
  width: 16.66666%;
  text-align: center;
  height: 0.9rem;
  line-height: 0.9rem;
  float: left;
  /* border-bottom: 0.02rem solid #ddd; */
}
</style>
