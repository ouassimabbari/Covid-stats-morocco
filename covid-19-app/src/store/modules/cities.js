import axios from 'axios'

const state = {
  mostAffectedCities: []
}
const getters = {
  mostAffectedCities: state => state.mostAffectedCities
}
const mutations = {
  setMostAffectedCities(state, payload) {
    state.mostAffectedCities = payload
  }
}
const actions = {
  getMostAffectedCities(vuexContext) {
    axios({
      "method": "GET",
      "url": "http://localhost:3000/api/statsByCity",
    }).then(response => {
      vuexContext.commit('setMostAffectedCities', response.data)
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
