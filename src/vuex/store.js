import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginStatus: "loggedOut",
    matchError: false,
    currentView: "loginPanel",
    user_id: undefined,
    user_name: "",
    list_of_newsitems: [],
    weather_info: {},
    user_preferences: {},
  },
  mutations: {
    setUser(state, id) {
      state.user_id = id;
    },
    setUsername(state, name) {
      state.name = name;
    },
    changeView(state, view) {
      state.currentView = view;
    },
    setUserPreferences(state, preferences) {
      // are we using this?
      state.user_preferences = preferences;
    },
    updateNewslist(state, news) {
      state.list_of_newsitems = news;
    },
    updateWeather(state, news) {
      state.list_of_newsitems = news;
    },
    setLoginStatus(state, loginStatus) {
      state.loginStatus = loginStatus;
    },
    setMatchError(state, status) {
      state.matchError = status;
    },
  },
  actions: {
    async checkFace(store, image) {
      try {
        const matchResult = await axios.get("/api/facematchOrWhatEver"); // ES6 destructuring & aliasing
        //responds with id, success/failure, preferences
        if (matchResult === "success") {
          store.commit("setUser", matchResult.id);
          store.commit("setUsername", matchResult.name);
          store.commit("changeView", "resultsPanel");
          store.commit("updateNewslist", matchResult.value);
          store.commit("setLogStatus", "loggedIn");
          store.commit("setMatchError", false);
        } else {
          store.commit("setMatchError", true);
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {
    test(state) {
      return state.test;
    },
  },
});
