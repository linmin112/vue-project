<template>
  <div id="app">
    <router-view/>
    <Tabbar />
  </div>
</template>
<script>
import Tabbar from "./components/Tabbar.vue";
export default {
  name: "app",
  components: {
    Tabbar 
  }
};
</script>
<style>
</style>
