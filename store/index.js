export const state = () => ({
  faq: null,
})
export const mutations = {
  FAQ_SET(state, n) {
    state.faq = n
  },
}
export const getters = {
  getFAQ: (state) => {
    return state.faq
  },
}
export const actions = {
  async fetchFAQ({ commit, dispatch, state }) {
    try {
      const { data } = await this.$axios.get(`/mock/faq.json`)
      commit('FAQ_SET', data)
    } catch (error) {
      console.log(error)
    }
  },
}
