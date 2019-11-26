<template>
  <div id="app">
    <Section />
    <Gold />
    <Popup v-for="(a,index) in 6" :key="index" />
  </div>
</template>
<script>
import Section from "../components/Section.vue";
import Gold from "../components/Gold.vue";
import Popup from "../components/Popup.vue";
export default {
  name: "app",
  components: {
    Section,
    Gold,
    Popup
  }
};
</script>
