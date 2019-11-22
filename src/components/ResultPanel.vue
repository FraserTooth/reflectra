<template>
  <div id="resultPanel">
    <!-- Login Name -->
    <!-- <p>{{ username }}</p> -->
    <video
      ref="videoStreamWide"
      id="videoStreamWide"
      muted="true"
      width="100%"
      autoplay
      playsinline
    ></video>

    <v-row id="contents" class="background">
      <v-col cols="3">
        <!-- News -->
        <v-card color="transparent" outlined>
          <h1>
            <v-icon color="white" class="ml-2 mr-2 mb-1"
              >far fa-newspaper</v-icon
            >News
          </h1>
          <v-divider dark></v-divider>
        </v-card>
        <newsList />
      </v-col>

      <v-col cols="6"></v-col>

      <!-- The other components -->
      <v-col cols="3">
        <!-- Weather -->
        <v-card color="transparent" outlined>
          <h1 class="background">
            <v-icon color="white" class="ml-2 mr-2 mb-1"
              >fas fa-cloud-sun</v-icon
            >Weather
          </h1>
          <v-divider dark></v-divider>
        </v-card>
        <v-card class="mx-auto card" color="transparent" outlined>
          <!-- <h2>Dummy</h2>
          <h2>Dummy</h2>
          <h2>Dummy</h2>
          <h2>Dummy</h2>
          <h2>Dummy</h2> -->
        </v-card>

        <!-- Other contents -->
        <v-card color="transparent" outlined>
          <h1>
            <v-icon color="white" class="ml-2 mr-2 mb-1"
              >fas fa-cloud-sun</v-icon
            >Other Contents
          </h1>
          <v-divider dark></v-divider>
        </v-card>
        <v-card class="mx-auto card" color="transparent" outlined></v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NewsList from "./NewsList";

export default {
  name: "ResultPanel",
  components: {
    newsList: NewsList,
  },
  mounted: async function() {
    // Get mediaStream
    const videoStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });

    // Mount media stream
    console.log(videoStream);
    this.$refs.videoStreamWide.srcObject = videoStream;
  },
};
</script>

<style scoped>
/* #videoBackground {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
} */
video {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  filter: grayscale(0%) brightness(100%);
  transform: scale(-1, 1);
}
h1 {
  color: white;
}
h2 {
  /* FIXME: For test */
  color: transparent;
}
.background {
  /* background-color: rgba(0, 0, 0, 0.5); */
  text-shadow: 0px 0px 10px black;
}
</style>
