<script>
import { StreamBarcodeReader } from "vue-barcode-reader";
import router from "../router";

export default {
  emits: [
    'save-barcode'
  ],
  components: {
    StreamBarcodeReader,
  },
  data(){
    return {
      barcode: undefined,
    }
  },
  methods: {
    onDecode (result) { 
      this.barcode = result
      this.$emit('save-barcode', this.barcode)      
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