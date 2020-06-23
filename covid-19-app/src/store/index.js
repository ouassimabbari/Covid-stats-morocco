import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import moroccoCases from './modules/moroccoCases'
import news from './modules/news'
import regions from './modules/regions'
import cities from './modules/cities'

export const store = new Vuex.Store({
  modules: {
    moroccoCases,
    news,
    regions,
    cities
  }
})
