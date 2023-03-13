export const streamer = {
  namespaced: true,
  state: () => ({
    username: 'tenekekafalar',
    title: 'Rocket League\'de Elo Kasmaca !drop !settings',
    donatedAmount: 1000
  }),
  actions: {
    donate ({ state, commit }, { amount }) {
      console.log('a', amount, state.donatedAmount)
      const total = state.donatedAmount + amount
      commit('setDonatedAmount', total)
    }
  },
  mutations: {
    setDonatedAmount (state, value) {
      state.donatedAmount = value
    }
  }
}
