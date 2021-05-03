<template>
  <div class="header">
    <div class="header-return" v-show="showHeader">
      <span class="border-return"> </span>
      <span class="iconfont return" @click="toHome">&#xe624;</span>
    </div>

    <div class="header-top" v-show="!showHeader" :style="styleOpacity">
      <div class="header-left">
        <span class="iconfont" @click="toHome">
          &#xe624;
        </span>
      </div>
      圆明园
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showHeader: true,
      styleOpacity: {
        opacity: 0
      }
    };
  },
  methods: {
    toHome() {
      this.$router.push("/");
    }
  },
  mounted() {
    let That = this;
    //this有个闭包，换成that
    window.addEventListener("scroll", function() {
      let top = document.documentElement.scrollTop;
      if (top > 45) {
        let opacity = top / 130;
        opacity = opacity > 1 ? 1 : opacity;
        That.styleOpacity = { opacity: opacity };
        That.showHeader = false;
      } else {
        That.showHeader = true;
      }
    });
  }
};
</script>

<style scoped lang="stylus">

@import '~css/var.styl';

.header-return {
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
  width: 0.72rem;
  height: 0.72rem;
}

.border-return {
  display: block;
  background-color: #000;
  width: 0.72rem;
  height: 0.72rem;
  opacity: 0.5;
  border-radius: 100%;
}

.return {
  position: absolute;
  left: 0;
  top: 0;
  color: #fff;
  width: 0.72rem;
  line-height: 0.72rem;
  text-align: left;
  text-indent: 0.18rem;
  font-size: 0.32rem;
  font-weight: bold;
}

.header-top {
  z-index:99;
  position: fixed;
  top: 0;
  text-align: center;
  width: 100%;
  line-height: 0.88rem;
  background-color: $bgColor;
  color: $textColor;
  font-size: 0.36rem;
//   display: flex;
  font-weight: 500;
  opacity:.5;
}
.header-left {

  position:absolute;
  width: 0.4rem;
  padding: 0 0.2rem;
  text-align: center;
  font-weight: bold;
}
</style>
