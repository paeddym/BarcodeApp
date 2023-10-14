<script>
import { RouterLink, RouterView } from 'vue-router'
import router from './router';

export default {
  data(){
    return {
      barcode: undefined
    }
  },
  methods: { 
    saveCode(barcode){
      this.barcode = barcode
      router.push('productinfo')
    }
  }
};

</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/"> Home </RouterLink>
        <RouterLink to="/scanhistory"> History </RouterLink>
      </nav>
    </div>
  </header> 
  <RouterView  v-on:save-barcode="saveCode" :currentBarcode="barcode"/>
</template>