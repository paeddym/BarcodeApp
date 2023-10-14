<script>
import axios from 'axios';

function Product(barcode, name, cost) {
  this.barcode = barcode;
  this.name = name;
  this.cost = cost;
}

export default {
  data() {
    return {
      Products: [
        new Product(4009228120077, "Krumbach Medium", "0,79€"),
        new Product(4009228120039, "Krumbach Classic", "0,89€"),
        new Product(4337185051937, "K-Classic", "0,29€")
      ],
      savedProducts: [],
    };
  },
  mounted() {
  axios.get('http://localhost:3000/get-barcodes')
    .then(response => {
      const savedBarcodes = response.data.barcodes;
      this.savedProducts = this.Products.filter(product => savedBarcodes.includes(product.barcode));
      console.log('Saved Products:', this.savedProducts);
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
    });
},
};
</script>

<template>
      <h1>History</h1>
      <ul>
        <li v-for="product in savedProducts" :key="product.barcode">       <!-- Display funktioniert nicht-->
          {{ product.name }} - {{ product.cost }}
        </li>
      </ul>
</template>