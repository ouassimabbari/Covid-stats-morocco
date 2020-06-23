import axios from 'axios'

const state = {
  cases: []
}
const getters = {
  cases: state => state.cases
}
const mutations = {
  setCases(state, payload) {
    state.cases = payload
  }
}
const actions = {
  getMoroccoCases(vuexContext) {
    axios({
      "method": "GET",
      "url": "http://localhost:3000/api/statsByCountry"
    }).then(response => {
      vuexContext.commit('setCases', response.data[0])
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
