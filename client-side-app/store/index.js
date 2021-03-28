export const state = () => ({
  errors: [],
  errorMessage: [],
})

export const actions = {
  errors: (state) => state.errors,
  errorMessage: (state) => state.errorMessage,
}

export const mutations = {
  setErrors(state, errors) {
    state.errors = errors
  },
  setInitialData(state, errorMessage) {
    state.errorMessage = errorMessage
  },
}
