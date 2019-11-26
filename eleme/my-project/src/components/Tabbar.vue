<template>
  <van-tabbar v-model="active">
    <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/find" icon="search" dot>发现</van-tabbar-item>
    <van-tabbar-item to="/order" icon="friends-o" info="5">订单</van-tabbar-item>
    <van-tabbar-item to="/mine" icon="setting-o" info="20">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      active: ""
    };
  }
};
</script>