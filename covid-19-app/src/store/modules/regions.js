import axios from 'axios'

const state = {
  mostAffectedRegions: []
}
const getters = {
  mostAffectedRegions: state => state.mostAffectedRegions
}
const mutations = {
  setMostAffectedRegions(state, payload) {
    state.mostAffectedRegions = payload
  }
}
const actions = {
  getMostAffectedRegions(vuexContext) {
    axios({
      "method": "GET",
      "url": "http://localhost:3000/api/statsByRegion",
    }).then(response => {
      vuexContext.commit('setMostAffectedRegions', response.data)
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
