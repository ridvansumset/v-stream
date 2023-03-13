export const user = {
  namespaced: true,
  state: () => ({
    firstName: 'Ridvan',
    lastName: 'Sumset'
  }),
  getters: {
    getFullName: (state) => `${state.firstName} ${state.lastName}`
  }
}
