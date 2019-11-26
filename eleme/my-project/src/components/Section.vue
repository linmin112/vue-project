<template>
  <div class="section">
    <p class="nike">昵称</p>
    <p class="phonenum">手机号码</p>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.section {
  width: 100%;
  height: 6rem;
  background-color: skyblue;
  position: relative;
}
.section p {
  color: white;
}
.section .nike {
  position: absolute;
  top: 30%;
  right: 55%;
}
.section .phonenum {
  position: absolute;
  top: 60%;
  right: 50%;
  font-size: .32rem;
}
</style>