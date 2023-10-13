<script>
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
  components: {
    StreamBarcodeReader,
  },
  data(){
    return {
      code: undefined,
      name: undefined,
      cost: undefined
    }
  },
  methods: {
    onDecode (result) { 

      this.code = result

      if(result == 4337185051937){          //Statische QR Codes, um Datenbank/API zu umgehen. 
          this.name = "K-Classic Wasser"    //if statt switch, da switch nicht funktioniert hat
          this.cost = 0.29
      } else if(result == 90446832){
        this.name = "Red Bull"
        this.cost = 1.49
      } else if(result == 4009228120077){
        this.name = "Krumbach Wasser"
        this.cost= 0.89
      } else {
        this.name = "unbekannt"
        this.cost = "?"
      }
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
      <p>Your product is: {{ name }}</p>
      <p>The product costs {{ cost }}€</p>
  </body>
</template>