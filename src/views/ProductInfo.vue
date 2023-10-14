<script>

export default {
  data(){
    return {
      name: "N/A",
      cost: undefined,
      image: undefined
    }
  },
  props: {
    currentBarcode: String,
  },
methods: {
    showProductInfo (code) {                        //Durch Datenbank ersetzen
      if(code == 4009228120077){
            this.name = "Krumbach Medium"
            this.cost = "0,79€"
      } else if(code == 4009228120039){
            this.name = "Krumbach Classic"
            this.cost = "0.89€"
      } else if(code == 4337185051937){
            this.name = "K-Classic Mineralwasser"
            this.cost = "0,29€"
      } else {
        this.name = "Unknown"
        this.cost = "Unknown"
      }
    }, 
  }, 
  created(){
    this.showProductInfo(this.currentBarcode);
  }
};
</script>

<template>
    <p>Product Name: {{ name }}</p>
    <p>Product Cost: {{ cost }}</p>
</template>