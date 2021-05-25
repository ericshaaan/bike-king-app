<template>
<div>
  <div v-if="!loading" class="container mb-5 mt-lg-1">

    <div class="row">
      <div class="col-12 mb-2 text-left">     
        <router-link :to="{ name:'shopbikes'}" tag="btn" class="btn btn-outline-primary">
          <span aria-hidden="true">&laquo; Return</span>
        </router-link>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6 my-auto mx-auto h-100">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" :src="cover" alt="loadi2ng">
            </div>
            <div class="carousel-item" v-for="photo in photos" :key="photo.id">
              <img class="d-block w-100" :src="photo.url" alt="loading">
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
        <span class="btn-lg btn-block">Price: PHP {{ items.productPrice }}</span>
        <router-link :to="{ name:'customerinfo', params: {slug: items.productSlug} }" tag="a"
          class="" style="text-decoration: none"> 
          <span v-if="items.availability" class="btn-info btn-lg btn-block mt-0">Buy Now</span>
          <span v-if="!items.availability" class="btn-warning btn-lg btn-block mt-0">Request Bike Build</span>
        </router-link>
      </div>
        <div class="col-lg-6 text-left">
          <span style="white-space: pre-line;"> {{ items.productDescription }} </span>
        </div>
    </div>
      
    </div>
</div>
</template>

<script>
import { apiClient } from '../../main';
import { PRODUCTS_DETAILS_QUERY } from '../../queries';

export default {
  data () {
    return {
      loading: true,
      slug: '',
      items: [],
      cover: '',
      photos: [],
    };
  },
  created () {
    this.slug = this.$route.params.slug;
    this.fetchSingleProduct();
  },
  methods: {

    async fetchSingleProduct() {
      try{
        this.loading = true;
        const response = await apiClient.post(process.env.VUE_APP_ENDPOINT, {
          query: PRODUCTS_DETAILS_QUERY,
          variables : {
            slug: this.slug
            }
          });
        
        const body = await response.data.data;
        this.items = await body.product;
        this.loading = false;
        this.cover = this.items.productPhoto[0].url;
        this.photos = this.items.productPhoto;
      } catch (error) {
        console.log(error);
      }

    },

  }
}
</script>

<style scoped>
td {
  padding: 0;
}
.product {
  border: solid 2px black;
}
</style>