// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


//引入初始化css和字体图标
import './assets/css/reset.css';
import './assets/css/iconfont.css';



//引入js(fastclick，解决移动端300ms点击延迟)
import FastClick from 'fastclick';
FastClick.attach(document.body); //引入此js,并写attach方法


//引入swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper';
//import 'swiper/dist/css/swiper.css';
import 'swiper/swiper-bundle.css';
Vue.use(VueAwesomeSwiper);


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})