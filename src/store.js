import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    users: []
  },
  mutations: {
    add (state) {
        state.count++;
    },
    reduce (state) {
        state.count--;
    },
    addUser(state, user) {
        state.users.push(user);
    },
      delUser(state, index) {
          state.users.splice(index, 1);
      }
  },
  actions: {

  }
})
