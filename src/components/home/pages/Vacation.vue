<template>
  <div class="vacation">
    <div class="vacation-title">
      周末去哪儿
    </div>
    <ul>
      <li class="vacation-item" v-for="item in vacationList" :key="item.id">
        <div class="vacation-img">
          <img :src="item.imgUrl" />
        </div>
        <div class="vacation-msg">
          <p>{{ item.title }}</p>
          <p>{{ item.msg }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["vacationList"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.vacation-title {
  font-size: 0.32rem;
  padding: 0.24rem;
}

.vacation-item {
  background-color: #fff;
  font-size: 0.28rem;
  margin-bottom: 0.1rem;
}

.vacation-img {
  width: 100%;
  height: 0;
  padding-bottom: 37.4375%;
}

.vacation-img img {
  width: 100%;
}

.vacation-msg {
  padding: 0.1rem 0 0.2rem 0.2rem;
}

.vacation-msg p {
  margin-top: 0.1rem;
  line-height: 0.24rem;
}

.vacation-msg p + p {
  color: #616161;
  font-size: 0.24rem;
  margin-top: 0.15rem;
}
</style>
