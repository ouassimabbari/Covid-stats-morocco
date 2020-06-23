import axios from 'axios'

const state = {
  lastNews: []
}
const getters = {
  lastNews: state => state.lastNews
}
const mutations = {
  setLastNews(state, payload) {
    state.lastNews = payload
  }
}
const actions = {
  getLastNews(vuexContext) {
    axios({
      "method": "GET",
      "url": "https://api.smartable.ai/coronavirus/news/global",
      "headers": {
        "content-type": "application/json",
        "Subscription-Key": "3009d4ccc29e4808af1ccc25c69b4d5d"
      }
    }).then(response => {
      vuexContext.commit('setLastNews', response.data.news)
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
