export const state = () => ({
  faq: null,
  topMenu: null,
})
export const mutations = {
  FAQ_SET(state, n) {
    state.faq = n
  },
  TOPMENU_SET(state, n) {
    state.topMenu = n
  },
}
export const getters = {
  getFAQ: (state) => {
    return state.faq
  },
  getTopMenu: (state) => {
    return state.topMenu
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
  async fetchMenu({ commit, dispatch, state }) {
    try {
      const { data } = await this.$axios.get(`/mock/topMenu.json`)
      commit('TOPMENU_SET', data)
    } catch (error) {
      console.log(error)
    }
  },
  async dataPrepare({ commit, dispatch, state }) {
    await Promise.all([dispatch('fetchFAQ'), dispatch('fetchMenu')])
  },
}
