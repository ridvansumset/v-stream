export const user = {
  namespaced: true,
  state: () => ({
    username: 'ridvansumset',
    userColor: '#ff00ff',
    firstName: 'Ridvan',
    lastName: 'Sumset'
  }),
  getters: {
    getFullName: (state) => `${state.firstName} ${state.lastName}`
  }
}
