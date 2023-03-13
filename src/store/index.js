import Vue from 'vue'
import Vuex from 'vuex'
import { user } from './user'
import { streamer } from './streamer'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    streamer
  }
})
