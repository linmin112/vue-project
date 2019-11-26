<template>
  <van-search
    label="地址"
    v-model="value"
    placeholder="搜索饿了么商家，商品名称"
    show-action
    shape="round"
    @search="onSearch"
  >
    <div slot="action" @click="onSearch">搜索</div>
  </van-search>
</template>
<script>
import Vue from "vue";
import { Search } from "vant";
Vue.use(Search);
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    // 搜索
    onSearch() {}
  }
};
</script>