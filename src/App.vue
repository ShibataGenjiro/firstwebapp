<template>
  <div id="app">
    <keep-alive>
      <!-- 加了keep-alive会导致进入详情页之后不在顶部，因为浏览器会把详情页缓存 -->
      <!-- 解决方法1： activated() { document.documentElement.scrollTop = 0; } -->
      <!-- 解决方法2：include或者exclude(需要给页面加上name属性) -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style></style>
