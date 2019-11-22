<template>
  <div id="app">
    <v-app>
      <v-app-bar app color="black" dark>
        <v-toolbar-title>
          <div @click="login">
            <b>Reflectra</b>
          </div>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <span class="mr-4" v-if="$store.state.user_name !== ''"
          >Wellcome, <b>{{ $store.state.user_name }}</b></span
        >

        <v-btn v-if="$store.state.currentView === 'resultsPanel'" text>
          <span class="mr-2">Settings</span>
          <v-icon>fas fa-cog</v-icon>
        </v-btn>
        <v-btn
          v-if="$store.state.currentView === 'resultsPanel'"
          text
          @click="logout"
        >
          <span class="mr-2">LogOut</span>
          <v-icon>fas fa-sign-out-alt</v-icon>
        </v-btn>
      </v-app-bar>

      <v-content>
        <transition name="fade">
          <loginPanel v-if="$store.state.currentView === 'loginPanel'" />
          <resultPanel v-if="$store.state.currentView === 'resultsPanel'" />
        </transition>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import ResultPanel from "./components/ResultPanel.vue";
import LoginPanel from "./components/LoginPanel.vue";

export default {
  name: "App",

  components: {
    resultPanel: ResultPanel,
    loginPanel: LoginPanel,
  },

  data: () => ({
    loginStatus: false,
  }),
  methods: {
    login() {
      // this.loginStatus = true;
      this.$store.commit("changeView", "resultsPanel");
      this.$store.commit("setUsername", "TEST USER");
    },
    logout() {
      // this.loginStatus = false;
      this.$store.commit("changeView", "loginPanel");
      this.$store.commit("setUsername", "");
    },
  },
};
</script>

<style>
#app {
  background-color: black;
  color: white;
}
</style>

<style scoped>
canvas {
  /* display: none; */
}
.fade-enter-active {
  transition: opacity 2s;
}
.fade-enter {
  opacity: 0;
}
</style>
