<template>
  <v-container>
    <video
      ref="videoStream"
      id="videoStream"
      muted="true"
      width="600"
      autoplay
      playsinline
    ></video>
    <canvas ref="canvas" id="canvas" width="600" height="337.5"></canvas>
    <v-btn @click="capture">test</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "LoginPanel",

  data: () => ({}),
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
        .drawImage(this.$refs.videoStream, 0, 0, 600, 337.5);

      // TODO: Send Base64 img string to API endpoint
      console.log(this.$refs.canvas.toDataURL("image/png"));

      // TODO: If successful, get userInfo from an endpoint

      // TODO: I failed, show error message
    },
  },
};
</script>

<style scoped>
canvas {
  display: none;
}
video {
  /* display: none; */
}
</style>
