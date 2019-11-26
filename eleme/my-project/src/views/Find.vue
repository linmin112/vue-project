<template>
  <div id="app">
   <Advertice/>
   <Divider/>
   <Card v-for="(a,index) in 5" :key="index"/>
  </div>
</template>
<script>
import Advertice from "../components/Advertice.vue";
import Divider from "../components/Divider.vue";
import Card from "../components/Card.vue";
export default {
  name: "app",
  components: {
   Advertice,
   Divider,
   Card
  }
};
</script>
<style>
</style>
