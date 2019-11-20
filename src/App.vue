<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Smart Mirror App</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container>
        <video ref="videoStream" id="videoStream" muted="true" width="600" autoplay playsinline></video>
        <canvas ref="canvas" id="canvas" width="600" height="500"></canvas>
        <button @click="capture">test</button>
      </v-container>
      <resultPanel v-if="username !== ''" />
    </v-content>
  </v-app>
</template>

<script>
import ResultPanel from "./components/ResultPanel.vue";

export default {
  name: "App",

  components: {
    resultPanel: ResultPanel,
  },

  data: () => ({
    username: "",
  }),
  created() {
    // FIXME: dummy username -> store username using Vuex
    // TODO: When logout, delete localStorage.username
    localStorage.username = "Your Login Name";
    // localStorage.clear();
    if (localStorage.username) {
      this.username = localStorage.username;
    }
  },
  mounted: async function() {
    // Get mediaStream
    const videoStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });

    // Mount media stream
    console.log(videoStream);
    this.$refs.videoStream.srcObject = videoStream;
  },
  methods: {
    capture() {
      this.$refs.canvas
        .getContext("2d")
        .drawImage(this.$refs.videoStream, 0, 0, 500, 600);
      console.log(this.$refs.canvas.toDataURL("image/png"));
    },
  },
};
</script>

<style scoped>
canvas {
  display: none;
}
</style>