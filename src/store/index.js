import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


let defaultCity = '北京';

defaultCity = localStorage.city;

const state = {


    //city不能写死
    // city: '北京'
    //需要用本地存储的api来存每次点击的城市

    city: defaultCity


}

const mutations = {
    changeCity(state, cityName) {
        state.city = cityName;
        localStorage.city = cityName;

        // localStorage储存数据的三种方式
        // 自身方法
        //localStorage.setItem("name", "TOM");
        // []方法
        //localStorage["name"] = "TOM";
        // .方法
        //localStorage.name = "TOM";

    }
}

export default new Vuex.Store({
    state,
    mutations
})