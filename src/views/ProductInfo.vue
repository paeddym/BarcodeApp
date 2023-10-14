<script>

export default {
  data(){
    return {
      name: "N/A",
      cost: undefined,
      image: undefined
    }
  },
/*methods: {
    showProductInfo () { 
      if(code == 4009228120077){
            this.name = "Krumbach Medium"
            this.cost = 0.89
      }
    },
  }, */
  created(){
  /*  this.showProductInfo(); */
  console.log("Test")
  }
};
</script>

<template>
    <p>Product Name: {{ name }}</p>
    <p>Product Cost: {{ cost }}</p>
</template>