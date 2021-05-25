<template>
<div class="container mt-2">

  <div class="row page-title">
    <div class="col-12">
      <h3 class="text-left">
        Customer Reviews and Previous Bike Builds
        </h3>
      <hr>
    </div>
  </div>

  <div v-for="group in groupedReviews" :key="group.id" class="row">
    <div v-for="review in group" :key="review.id" class="col-lg-12">
      <div class="card border border-dark">
        <img class="card-img-top" :src="review.customerReviewPhoto.url">
      </div>
    </div>
    <hr>
  </div>

</div>
</template>

<script>
import { apiClient } from '../../main';
import { REVIEWS_ALL_QUERY } from '../../queries';
import _ from 'lodash';

export default {
  data () {
    return {
      loading: true,
      reviews: [],
    };
  },
  created () {
    this.fetchAllReviews();
  },
  computed: {
    groupedReviews() {
      return _.chunk(this.reviews, 2)
    }
  },
  methods: {
    async fetchAllReviews() {
      try{
        this.loading = true;
        const response = await apiClient.post(process.env.VUE_APP_ENDPOINT, {
          query: REVIEWS_ALL_QUERY,
          variables : {
            }
          });
        
        const body = await response.data.data;
        this.reviews = await body.customerReviews;
        this.loading = false;
        // console.log(this.products[0])
        // this.cover = this.items.productPhoto[0].url;
      } catch (error) {
        console.log(error);
      }

    },

  }
}
</script>

<style scoped>

</style>