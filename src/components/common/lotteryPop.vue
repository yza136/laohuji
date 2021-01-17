<template>
  <div class="subject-pop"
       style="z-index: 10;">
    <div class="subject-pop-mask"></div>
    <div class="subject-pop-box">
      <h3>恭喜您</h3>
      <p><img :src="lotteryResult.img"
             alt=""></p>
      <h4>获得
        <span></span><span>{{lotteryResult.name}}</span></h4>
      <div class="subject-pop-footer"><a href="javascript:;"
           @click="$emit('closePop')"
           class="november-btn1">知道了</a></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LotteryPop',
  props: {
    lotteryResult: {
      type: Object,
      default: () => { }
    }
  }
}
</script>
<style type="text/css">
.subject-pop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.subject-pop-mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
}

.subject-pop-box {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background: #f3f3f3;
  border-radius: 0.4rem;
  z-index: 2;
  width: 80%;
  max-width: 400px;
}

a {
  text-decoration: none;
}

.subject-pop-box h3 {
  font-size: 1.2rem;
  color: #4a4a4a;
  text-align: center;
  line-height: 1;
  margin-top: 1.15rem;
  font-weight: 700;
}

.subject-pop-box p {
  text-align: center;
  padding: 0.5rem 0;
}

img {
  vertical-align: top;
}

.subject-pop-box h4 {
  font-size: 0.8rem;
  color: #4a4a4a;
  text-align: center;
  line-height: 1.3rem;
}

.subject-pop-box h4 span {
  font-weight: 700;
}

.subject-pop-footer {
  background: #fff;
  padding: 0.95rem 2rem;
  font-size: 0;
}

.subject-pop-footer a {
  display: inline-block;
  width: 100%;
  margin-right: 4%;
  font-size: 0.7rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 1.8rem;
  height: 1.8rem;
  line-height: 1.8rem;
  text-align: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  vertical-align: middle;
}

.november-btn1 {
  border: 2px solid #f67f6e;
  color: #f67f6e;
}
</style>
