<template>
  <div class="popup">
    <van-cell is-link @click="showPopup">我的地址</van-cell>
    <van-popup v-model="show">内容</van-popup>
  </div>
</template>
<script>
import Vue from "vue";
import { Popup } from "vant";
Vue.use(Popup);
export default {
  data() {
    return {
      show: false
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
</script>
<style lang="scss">
.popup {
  background-color: #cccccc;
  margin-top: .2rem;
}
</style>