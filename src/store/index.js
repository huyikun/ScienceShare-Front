import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    username: "",
    user:{
      username: "",
      permission:"",
      unreadNotification:"",
      emailAddress:"",
      prestige:"",
      createdDate:"",
      avatarUrl:"",
    },
    expert: {
      name: "Huobin Tan",
      years: "1.7",
      url: "@/assets/pic1.png"
    }
  },
  mutations: {
    SignIn(state) {
      state.isLogin = true;
    },
    SignOut(state) {
      state.isLogin = false;
    },
    setUser(state,user){
      state.user=user;
    }
  },
  actions: {
    SignIn(context) {
      context.commit("SignIn");
    },
    SignOut(context) {
      context.commit("SignOut");
    },
    setUser(context,user){
      context.commit("setUser",user);
    },
  },
  modules: {}
});
