<template>
  <div id="app">
    <v-app>
      <v-app-bar app color="black" dark>
        <v-toolbar-title>
          <div @click="dummyLogin">
            <b>Smart Mirror App</b>
          </div>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
        >
          <span class="mr-2">Settings</span>
          <v-icon>fas fa-cog</v-icon>
        </v-btn>
      </v-app-bar>

      <v-content>
        <loginPanel v-if="username === ''" />
        <resultPanel v-if="username !== ''" />
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
    username: "",
  }),
  methods: {
    capture() {
      this.$refs.canvas
        .getContext("2d")
        .drawImage(this.$refs.videoStream, 0, 0, 500, 600);
      //  .then(sendPhoto(this.$refs.canvas.toDataURL("image/png")));
      console.log(this.$refs.canvas.toDataURL("image/png"));
      console.log(sendPhoto(this.$refs.canvas.toDataURL("image/png")));
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
</style>
