<template>
  <div class="Find">
    <div class="Find-l">
      <img src="../../public/img/1.webp" alt />
      <div class="content-wrapper">
        <p class="title" style="color: rgb(255, 153, 0);">金币商城</p>
        <p class="tips" style="font-size: .32rem;
    color: #999;">0元好物在这里</p>
      </div>
    </div>
    <div class="Find-r">
      <div class="up">
        <img src="../../public/img/2.webp" alt />
        <div class="content-wrapper">
          <p class="title" style="color: rgb(27, 169, 225);">推荐有奖</p>
          <p class="tips" style="font-size: .32rem;
    color: #999;">20元现金拿不停</p>
        </div>
      </div>
      <div class="down">
        <img src="../../public/img/3.webp" alt />
        <div class="content-wrapper">
          <p class="title" style="color: rgb(237, 102, 96);">周边优惠</p>
          <p class="tips" style="font-size: .32rem;
    color: #999;">领取口碑好券</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
*{
    margin: 0;
    padding: 0;
}
.Find {
  width: 100%;
  height: 8rem;
}
.Find .Find-l {
  width: 49.5%;
  height: 8rem;
  float: left;
  position: relative;
  border-right: 0.013333rem solid #ededed;
}
.Find .Find-l img {
  width: 4rem;
  height: 4rem;
  position: absolute;
  right: 0.666667rem;
  bottom: 0.666667rem;
}
.Find .Find-r {
  width: 49.5%;
  height: 8rem;
  float: right;
  display: flex;
  flex-direction: column;
}
.Find .Find-r .up {
  width: 100%;
  height: 49.5%;
  position: relative;
  border-bottom: 0.013333rem solid #ededed;
}
.Find .Find-r .up img {
  width: 3rem;
  height: 3rem;
  position: absolute;
  right: 0.666667rem;
  bottom: 0.666667rem;
}
.Find .Find-r .down {
  width: 100%;
  height: 49.5%;
  position: relative;
}
.Find .Find-r .down img {
  width: 3rem;
  height: 3rem;
  position: absolute;
  right: 0.666667rem;
  bottom: 0.4rem;
}
</style>
