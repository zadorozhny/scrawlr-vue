import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      active: false
    }
  },
  mutations: {
    toggle (state) {
      state.active = !state.active
    }
  }
})