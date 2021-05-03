<template>
  <div class="header">
    <div class="header-left" @click="toHome">
      <span class="iconfont">
        &#xe624;
      </span>
    </div>
    <div class="header-title">
      城市选择
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  methods: {
    toHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped lang="stylus">

@import '~css/var.styl';


.header {
  width: 100%;
  line-height: 0.88rem;
  background-color: $bgColor;
  color: $textColor;
  font-size: 0.32rem;
  font-weight: 500;
  position: relative;
}
.header-left {
    position:absolute;
  width: 0.4rem;
  padding: 0 0.2rem;
  text-align: center;
  font-weight: bold;
}

.header-title{
    text-align:center;
}
</style>
