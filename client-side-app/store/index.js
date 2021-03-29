export const state = () => ({
  errors: [],
  errorMessage: [],
})

export const actions = {
  errors: (state) => state.errors,
  errorMessage: (state) => state.errorMessage,
}

export const mutations = {
  setNews(state, news) {
    state.list = news
  },
}
