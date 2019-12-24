import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: [{
      code: "110000",
      name: "北京市"
    }, {
      code: "110000",
      name: "北京市"
    }]
  },
  mutations: {},
  actions: {},
  modules: {}
})
