<template>
  <div>
    <!-- <video
      ref="videoStreamWide"
      id="videoStreamWide"
      muted="true"
      width="100%"
      autoplay
      playsinline
    ></video> -->
    <v-layout align-center justify-center>
      <v-btn @click="capture" class="mt-12">Login</v-btn>
    </v-layout>
    <video
      ref="videoStream"
      id="videoStream"
      muted="true"
      width="250"
      autoplay
      playsinline
    ></video>
    <canvas ref="canvas" id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "LoginPanel",
  mounted: async function() {
    // Get mediaStream
    const videoStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });

    // Mount media stream
    console.log(videoStream);
    this.$refs.videoStream.srcObject = videoStream;
    // this.$refs.videoStreamWide.srcObject = videoStream;
  },
  methods: {
    capture() {
      const canvasWidth = this.$refs.videoStream.width;
      const canvasHeight =
        this.$refs.videoStream.videoHeight *
        (this.$refs.videoStream.width / this.$refs.videoStream.videoWidth);

      console.log(canvasHeight);
      console.log(canvasWidth);

      this.$refs.canvas.height = canvasHeight;
      this.$refs.canvas.width = canvasWidth;

      this.$refs.canvas
        .getContext("2d")
        .drawImage(this.$refs.videoStream, 0, 0, canvasWidth, canvasHeight);

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
#videoStreamWide {
  /* filter: grayscale(100%); */
  /* transform: scale(-1, 1); */
}
#videoStream {
  filter: brightness(0%);
}
</style>
