<template>
  <div>
    <!-- Dummy secret button for recovery -->
    <input type="hidden" @keydown="capture" />

    <v-container>
      <v-alert type="error" v-if="$store.state.matchError">
        ERROR!! Your face does not register...
      </v-alert>
    </v-container>
    <video
      ref="videoStreamWide"
      id="videoStreamWide"
      muted="true"
      width="100%"
      autoplay
      playsinline
    ></video>
    <v-layout align-center justify-center>
      <v-btn @click="capture" @keydown="capture">Login</v-btn>
    </v-layout>
    <video
      ref="videoStream"
      id="videoStream"
      muted="true"
      width="200"
      autoplay
      playsinline
    ></video>
    <canvas ref="canvas" id="canvas"></canvas>
  </div>
</template>

<script>
import * as faceapi from "face-api.js";

export default {
  name: "LoginPanel",
  data: () => ({
    faceDetectionInterval: undefined,
  }),
  mounted: async function() {
    // Get mediaStream
    const videoStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });

    // Mount media stream
    console.log(videoStream);
    this.$refs.videoStream.srcObject = videoStream;
    this.$refs.videoStreamWide.srcObject = videoStream;

    await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
    await faceapi.nets.faceLandmark68Net.loadFromUri("/models");

    this.faceDetectionInterval = setInterval(this.realtimeFaceDetection, 1000);
  },

  methods: {
    async realtimeFaceDetection() {
      // The array of detected face
      const detections = await faceapi
        .detectAllFaces(
          this.$refs.videoStreamWide,
          new faceapi.TinyFaceDetectorOptions()
        )
        .withFaceLandmarks();

      if (detections.length > 0 && this.faceDetectionInterval !== undefined) {
        console.log("Face detected!!");
        clearInterval(this.faceDetectionInterval);
        this.faceDetectionInterval = undefined;
        this.capture();
      } else {
        console.log("Not detected...");
      }
    },

    async capture() {
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

      // Send Base64 img string to API endpoint
      const image = this.$refs.canvas.toDataURL("image/png");
      console.log(image);
      await this.$store.dispatch("checkFace", image);

      // I failed, retry face detection
      if (this.$store.state.matchError)
        this.faceDetectionInterval = setInterval(
          this.realtimeFaceDetection,
          1000
        );
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
  transform: scale(-1, 1);
}
#videoStream {
  filter: brightness(0%);
}
</style>
