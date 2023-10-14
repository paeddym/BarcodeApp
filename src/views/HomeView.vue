<script>
import { StreamBarcodeReader } from "vue-barcode-reader";
import axios from 'axios';

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
      axios.post('http://localhost:3000/save-barcode', {
        barcode: this.barcode,
      })
      .then(response => {
        console.log(response.data); // Server response
      })
      .catch(error => {
        console.error('Error:', error);
      });
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