<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">
        &#xe624;
      </span>
    </div>
    <div class="header-search">
      <span class="iconfont">
        &#xe632;
      </span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">北京 <span class="iconfont">&#xe6aa;</span></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="stylus">

@import '~css/var.styl';


.header {
  width: 100%;
  line-height: 0.88rem;
  background-color: $bgColor;
  color: $textColor;
  font-size: 0.36rem;
  display: flex;
  font-weight: 500;
}
.header-left {
  width: 0.4rem;
  padding: 0 0.2rem;
  text-align: center;
  font-weight: bold;
}

.header-search {
  flex: 1;
  background-color: #fff;
  height: 0.6rem;
  margin: 0.145rem 0;
  border-radius: 0.1rem;
  color: #e4e7ea;
  line-height: 0.6rem;
  font-size: 0.28rem;
  padding-left: 0.2rem;
}

.header-right {
  font-size: 0.28rem;
  padding: 0 0.2rem;

}
</style>
