export const streamer = {
  namespaced: true,
  state: () => ({
    username: '',
    title: '',
    donatedAmount: 1000
  }),
  actions: {
    viewStream ({ commit }, { username, title }) {
      commit('setStream', { username, title })
    },
    clearStream ({ commit }) {
      commit('setStream', { username: '', title: '' })
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
    },
    setDonatedAmount (state, value) {
      state.donatedAmount = value
    }
  }
}
