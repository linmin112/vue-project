<template>
  <div class="gold">
    <div class="gold-c">
      <p>0个</p>
      <p>红包</p>
    </div>
    <div class="gold-c">
      <p>0个</p>
      <p>金币</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.gold {
  display: flex;
  width: 100%;
  height: 5rem;
}
.gold .gold-c {
  width: 50%;
  height: 100%;
}
.gold .gold-c p {
  text-align: center;
  font-size: .32rem;
}
</style>