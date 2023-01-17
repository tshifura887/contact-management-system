import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    auth: {},
    isAuthenticated: false
  },
  getters: {
    user: state => state.user,
    auth: state => state.auth
  },
  mutations: {
    user (state, value) {
      state.user = value
    },
    auth (state, value) {
      state.auth = value
    },
    setAuthentication(state, status) {
      state.isAuthenticated = status
    }
  }
})
