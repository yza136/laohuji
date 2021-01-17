import lotteryApi from '@/api/lottery.js'
const state = {
  prizeList: [],
  lotteryResult: {}
}
const getters = {
  prizeList: state => state.prizeList,
  lotteryResult: state => state.lotteryResult
}
const mutations = {
  setPrizeList (state, {
    prizeList
  }) {
    state.prizeList = prizeList
  },
  setLotteryResult (state, {
    lotteryResult
  }) {
    state.lotteryResult = lotteryResult
  }
}
const actions = {
  getPrizeList ({
    commit
  }) {
    const result = lotteryApi.getPrizeList()
    console.log(result)
    if (result.returncode === 0) {
      commit('setPrizeList', {
        prizeList: result.result
      })
    }
  },
  lottery ({
    commit
  }) {
    const result = lotteryApi.lottery()
    console.log(result)
    if (result.returncode === 0) {
      commit('setLotteryResult', {
        lotteryResult: result.result
      })
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}
