export const state = () => ({
  faq: null,
  topMenu: null,
  viewport: 'mobile',
})
export const mutations = {
  FAQ_SET(state, n) {
    state.faq = n
  },
  TOPMENU_SET(state, n) {
    state.topMenu = n
  },
  VIEWPORT_SET(state, n) {
    state.viewport = n
  },
}
export const getters = {
  getFAQ: (state) => {
    return state.faq
  },
  getTopMenu: (state) => {
    return state.topMenu
  },
  getViewport: (state) => {
    return state.viewport
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
  setViewport({ commit, state }) {
    const documentWidth = document.documentElement.clientWidth
    documentWidth > 649
      ? commit('VIEWPORT_SET', 'tablet')
      : commit('VIEWPORT_SET', 'mobile')
  },
}
