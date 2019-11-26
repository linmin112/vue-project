<template>
  <div id="app">
    <Search />
    <Grid />
    <Divider />
    <Card v-for="(a,index) in 5" :key="index" />
  </div>
</template>
<script>
import Search from "../components/Search.vue";
import Grid from "../components/Grid.vue";
import Divider from "../components/Divider.vue";
import Card from "../components/Card.vue";
export default {
  name: "app",
  components: {
    Search,
    Grid,
    Divider,
    Card,
  }
};
</script>
<style>
</style>

