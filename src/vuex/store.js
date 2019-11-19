import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test: "",
  },
  mutations: {
    testMutation(state, test) {
      state.test = test;
    },
  },
  actions: {
    testActions({ commit }, test) {
      commit("test", test);
    },
  },
  getters: {
    test(state) {
      return state.test;
    },
  },
});
