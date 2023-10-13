<script>
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
  components: {
    StreamBarcodeReader,
  },
  data(){
    return {
      code: 0
    }
  },
  methods: {
    onDecode (result) { 
      console.log(result) 
      this.code = result
    },
  },
};
</script>

<template>
  <header>
    <h1>Barcode Reader App</h1>
  </header>
  <body>
      <StreamBarcodeReader id="VideoStream" @decode="onDecode"></StreamBarcodeReader>
      <p>The Barcode is: {{ code }}</p>
  </body>
</template>