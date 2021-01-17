<template>
  <section>
    <div class="main">
      <div class="recreation">
        <div class="recreation-list clearfix">
          <ul class="recreation-item"
              :style="{transform: 'translateY('+y1+'rem)'}">
            <li class="recreation-prices"
                v-for="(prize,key) in prizeList"
                :key="key">
              <img :src="prize.img"
                   alt="" />
            </li>
          </ul>
          <ul class="recreation-item"
              :style="{transform: 'translateY('+y2+'rem)'}">
            <li class="recreation-prices"
                v-for="(prize,key) in prizeList"
                :key="key">
              <img :src="prize.img"
                   alt="" />
            </li>
          </ul>
          <ul class="recreation-item"
              :style="{transform: 'translateY('+y3+'rem)'}">
            <li class="recreation-prices"
                v-for="(prize,key) in prizeList"
                :key="key">
              <img :src="prize.img"
                   alt="" />
            </li>
          </ul>
        </div>
        <a href="javascript:;"
           class="btn-recreation"
           @click="$emit('lottery')"></a>
      </div>

    </div>
    <lottery-pop :lotteryResult="lotteryResult"
                 v-if="showPrize"
                 @closePop="showPrize=false" />
  </section>
</template>
<script>
import LotteryPop from '@/components/common/lotteryPop.vue'
export default {
  name: 'SlotMachine',
  props: {
    prizeList: {
      type: Array,
      default: () => []
    },
    lotteryResult: {
      type: Object,
      default: () => { }
    }
  },
  components: {
    LotteryPop
  },
  data () {
    return {
      showPrize: false,
      height: 4.15,
      y1: 0,
      y2: -4.15,
      y3: -8.30,
      prizeIndex: -1,
      globalInterval: null,
      speed: 1,
      slowSpeed: 0.25,
      playDefaultCircle: 8,
      y1Circle: 0,
      y2Circle: 0,
      y3Circle: 0,
      timer1: null,
      timer2: null
    }
  },
  methods: {
    startPlay () {
      const self = this
      self.getPrizeIndex()
      self.playSlot(self.prizeIndex, self.prizeIndex, self.prizeIndex)
    },
    playSlot (idx1, idx2, idx3) {
      const self = this
      const circleLength = self.height * self.prizeList.length
      const idx1EndDistance = idx1 === 0 ? circleLength : idx1 * self.height
      const idx2EndDistance = idx2 === 0 ? circleLength : idx2 * self.height
      const idx3EndDistance = idx3 === 0 ? circleLength : idx3 * self.height
      self.globalInterval = setInterval(() => {
        if (self.y1Circle < self.playDefaultCircle) {
          self.y1 -= self.speed
          if (Math.abs(self.y1) >= circleLength) {
            self.y1 += circleLength
            self.y1Circle++
          }
        } else {
          if (Math.abs(self.y1) < idx1EndDistance) {
            self.y1 -= self.slowSpeed
          } else {
            self.y1 = -idx1EndDistance
          }
        }

        self.timer1 = setTimeout(() => {
          if (self.y2Circle < self.playDefaultCircle) {
            self.y2 -= self.speed
            if (Math.abs(self.y2) >= circleLength) {
              self.y2 += circleLength
              self.y2Circle++
            }
          } else {
            if (Math.abs(self.y2) < idx2EndDistance) {
              self.y2 -= self.slowSpeed
            } else {
              self.y2 = -idx2EndDistance
            }
          }
        }, 300)

        self.timer1 = setTimeout(() => {
          if (self.y3Circle < self.playDefaultCircle) {
            self.y3 -= self.speed
            if (Math.abs(self.y3) >= circleLength) {
              self.y3 += circleLength
              self.y3Circle++
            }
          } else {
            if (Math.abs(self.y3) < idx3EndDistance) {
              self.y3 -= self.slowSpeed
            } else {
              self.y3 = -idx3EndDistance
              clearInterval(self.globalInterval)
              clearTimeout(self.timer1)
              clearTimeout(self.timer2)
              setTimeout(() => {
                self.showPrize = true
              }, 500)
            }
          }
        }, 600)
      }, 20)
    },
    getPrizeIndex () {
      const self = this
      self.prizeList.some((item, index) => {
        if (item.id === self.lotteryResult.id) {
          self.prizeIndex = index
          return true
        }
      })
    }
  },
  watch: {
    lotteryResult (newVal, oldVal) {
      if (newVal.id && newVal.id > 0) {
        this.startPlay()
      }
    }
  }
}
</script>
<style type="text/css">
.main {
  width: 17.575rem;
  margin: 0 auto;
}
ol,
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.recreation {
  position: relative;
  height: 14.925rem;
  background: url(//images.cnblogs.com/cnblogs_com/codeon/878827/o_autohomedealer__ChsEnlwi3_GACO2wAACxIjply_8570.jpg)
    top;
  background-size: 100% 100%;
}
.recreation-list {
  width: 12.025rem;
  height: 4.15rem;
  overflow: hidden;
  position: absolute;
  top: 5.375rem;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.recreation-item {
  float: left;
  width: 3.675rem;
  height: 100%;
  margin-right: 0.5rem;
}
.recreation-item:last-child {
  margin-right: 0;
}
.recreation-prices {
  position: relative;
  height: 100%;
  width: 100%;
}
.recreation-prices img {
  max-width: 90%;
  max-height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
}
.btn-recreation {
  position: absolute;
  width: 12.8rem;
  height: 3.2rem;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 10.325rem;
  background-size: 100% 100%;
  background-image: url(//images.cnblogs.com/cnblogs_com/codeon/878827/o_lotterybtn.jpg);
}
</style>
