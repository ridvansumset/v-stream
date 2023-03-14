export const streamer = {
  namespaced: true,
  state: () => ({
    username: '',
    title: '',
    donatedAmount: 0
  }),
  actions: {
    viewStream ({ commit }, { username, title }) {
      commit('setStream', { username, title, donatedAmount: Math.floor(Math.random() * 500) })
    },
    clearStream ({ commit }) {
      commit('setStream', { username: '', title: '', donatedAmount: 0 })
    },
    donate ({ state, commit }, { amount }) {
      const total = state.donatedAmount + amount
      commit('setDonatedAmount', total)
    }
  },
  mutations: {
    setStream (state, value) {
      state.username = value.username
      state.title = value.title
      state.donatedAmount = value.donatedAmount
    },
    setDonatedAmount (state, value) {
      state.donatedAmount = value
    }
  }
}
