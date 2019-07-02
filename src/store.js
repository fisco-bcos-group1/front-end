import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: true,
    userType: 'company' // user,musician,company
  },
  mutations: {},
  actions: {}
})
