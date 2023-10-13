<script>
import { StreamBarcodeReader } from "vue-barcode-reader";


export default {
  components: {
    StreamBarcodeReader,
  },
  mounted() {
    
  },
  methods: {
    onDecode (result) { 
      console.log(result) 
    },
    onLoaded () {
      console.log("Loaded!")
    },
  },
};
</script>


<template>
  <main>
    <h1>Home</h1>

      <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>

  </main>
</template>

<style>
#VideoStream {
  transform: scaleX(-1);
}
</style>