<template>
  <section>
    <div style="width: 100%; text-align: center; margin: 2rem 0px;">您有一次抽奖机会，祝君好运~~~</div>
    <div class="main">
      <slot-machine :prizeList="prizeList"
                    :lotteryResult="lotteryResult"
                    @lottery="lottery" />
    </div>
  </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import SlotMachine from '@/components/lottery/slotMachine.vue'
export default {
  computed: {
    ...mapGetters({
      prizeList: 'lottery/prizeList',
      lotteryResult: 'lottery/lotteryResult'
    })
  },
  components: {
    SlotMachine
  },
  mounted () {
    this.getPrizeList().then(() => {
      console.log(this.prizeList)
    })
  },
  methods: {
    ...mapActions({
      getPrizeList: 'lottery/getPrizeList',
      lottery: 'lottery/lottery'
    })
  }
}
</script>
