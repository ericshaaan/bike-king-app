<template>
<div v-if="!loading" class="container mt-lg-1 mb-lg-5">

  <!-- <div class="row">
    <div v-for="product in products" :key="product.id">
      <h5>{{ product.productTitle }}</h5>
      <p>PHP {{ product.productPrice }}</p>
      <img class="w-25" :src="product.productPhoto[0].url">
    </div>
  </div> -->
  
  <div v-for="group in groupedBikes" :key="group.id" class="row">
    <div v-for="product in group" :key="product.id" class="col-lg-4">
      <div class="card my-auto">
        <img class="card-img-top" :src="product.productPhoto[0].url">
        <div class="card-body">
          <router-link :to="{ name:'bikedetails', params: {slug: product.productSlug} }" tag="a"
          class=""> 
            <h5 class="card-title">{{ product.productTitle }}</h5>
          </router-link>
          <p class="card-text">
            <i v-if="product.availability">Available</i>
            <i v-if="!product.availability">Request Bike Build</i>
             - PHP {{ product.productPrice }}
            </p>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import { apiClient } from '../../main';
import { PRODUCTS_ALL_QUERY } from '../../queries';
import _ from 'lodash';

export default {
  data () {
    return {
      bikeSlug: '',
      loading: true,
      products: [],
      cover: ''
    };
  },
  created () {
    this.fetchAllProducts();
  },
  computed: {
    groupedBikes() {
      return _.chunk(this.products, 3)
    }
  },
  methods: {

    async fetchAllProducts() {
      try{
        this.loading = true;
        const response = await apiClient.post(process.env.VUE_APP_ENDPOINT, {
          query: PRODUCTS_ALL_QUERY,
          variables : {
            
            }
          });
        
        const body = await response.data.data;
        this.products = await body.products;
        this.loading = false;
        console.log(this.products[0])
        // this.cover = this.items.productPhoto[0].url;
      } catch (error) {
        console.log(error);
      }

    },

  }
}
</script>

<style scoped>
a {
  color: #2c3e50;
}
</style>