<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from "./pages/Header";
import HomeSwiper from "./pages/Swiper";
import HomeIcons from "./pages/Icons";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
};
</script>

<style></style>
