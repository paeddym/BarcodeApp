<script>
import { StreamBarcodeReader } from "vue-barcode-reader";
import router from "../router";

export default {
  components: {
    StreamBarcodeReader,
  },
  data(){
    return {
      code: undefined,
    }
  },
  methods: {
    onDecode (result) { 
      this.code = result
      router.push('productinfo')
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
  </body>
</template>