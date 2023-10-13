<script>
import { StreamBarcodeReader } from "vue-barcode-reader";


export default {
  components: {
    StreamBarcodeReader,
  },
  mounted() {
    this.startCamera();
  },
  methods: {
    onDecode (result) { 
      console.log(result) 
    },
    onLoaded () {
      console.log("Loaded!")
    },
    async startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        this.$refs.videoElement.srcObject = stream;
      } catch (error) {
        console.error('Fehler beim Zugriff auf die Kamera:', error);
      }
    },
  },
};
</script>


<template>
  <main>
    <h1>Home</h1>
    <video ref="videoElement" autoplay id="VideoStream">
      <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
    </video>
  </main>
</template>

<style>
#VideoStream {
  transform: scaleX(-1);
}
</style>