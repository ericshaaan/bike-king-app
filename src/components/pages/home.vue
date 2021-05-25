<template>

<div class="container mb-5">
  <div class="row">
    <div class="col-12">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Build your project bike with us.</h1>
          <p class="lead">Communicate directly with our experienced mechanics. Get your quotation. It's that easy!</p>
        </div>
      </div>
    </div>
  </div>

<!-- carousel -->
  <div class="row mb-4 w-75 mx-auto">
    <div class="col-12">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="../../assets/c1.png" alt="First slide">
            <div class="carousel-caption d-none d-md-block">
              <router-link :to="{ name: 'shopbikes' }" tag="a" class="btn btn-warning">
                Shop Bikes
              </router-link>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../../assets/c2.png" alt="Second slide">
            <div class="carousel-caption d-none d-md-block">
              <router-link :to="{ name: 'shopbikes' }" tag="a" class="btn btn-warning">
                Shop Bikes
              </router-link>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../../assets/c3.png" alt="Third slide">
            <div class="carousel-caption d-none d-md-block">
              <router-link :to="{ name: 'shopbikes' }" tag="a" class="btn btn-warning">
                Shop Bikes
              </router-link>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
<!-- end carousel -->

  <div class="container border border-dark rounded p-3">
    <div class="row mb-2">
      <div class="col-12">
        <h2 class="display-4">How To Purchase</h2>
      </div>
      <hr>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <div class="h-100">
          <!-- <img class="card-img-top" src="../../assets/s1c.png" alt="Card image cap"> -->
          <div class="card-body pt-0">
            <h5 class="card-title">Shop Available Bikes</h5>
            <!-- <h6 class="card-subtitle mb-2 text-muted text-justify">Select from our available bikes here, or request a build similar to our previous builds. For build requests, feel free to be as specific as you want! It's your project bike!</h6> -->
            <p class="card-subtitle text-justify">Select from our available bikes here, or request a build similar to our previous builds. For build requests, feel free to be as specific as you want! It's your project bike!</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="h-100">
          <!-- <img class="card-img-top" src="../../assets/s2c.png" alt="Card image cap"> -->
          <div class="card-body pt-0">
            <h5 class="card-title">Create Purchase Order</h5>
            <!-- <h6 class="card-subtitle mb-2 text-muted text-justify">Create a purchase order or build request from our Shop Bikes section. After providing all necessary details, wait for a confirmation call from one of our agents. Once order has been confirmed, you can now proceed to payment.</h6> -->
            <p class="card-subtitle text-justify">Create a purchase order or build request from our Shop Bikes section. After providing all necessary details, wait for a confirmation call from one of our agents. Once order has been confirmed, you can now proceed to payment.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="h-100">
          <!-- <img class="card-img-top" src="../../assets/s3c.png" alt="Card image cap"> -->
          <div class="card-body pt-0">
            <h5 class="card-title">Done!</h5>
            <!-- <h6 class="card-subtitle mb-2  text-muted text-justify">Once payment is confirmed, your project bike will then be built. It's that easy!</h6> -->
            <p class="card-subtitle text-justify">Once payment is confirmed, your project bike will then be built. It's that easy!</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</div> 
</template>

<script>
import { apiClient } from '../../main';
import { CAROUSEL_ALL_QUERY } from '../../queries';

export default {
  data () {
    return {
      loading: true,
      carouselimgs: [],
    };
  },
  methods: {
    async fetchAllProducts() {
      try{
        this.loading = true;
        const response = await apiClient.post(process.env.VUE_APP_ENDPOINT, {
          query: CAROUSEL_ALL_QUERY,
          variables : {
            
            }
          });
        
        const body = await response.data.data;
        this.products = await body.products;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }

    },
  },
  created () {
    this.fetchAllProducts();
  },
}
</script>

<style scoped>
.jumbotron {
  background-image: url("../../assets/bgjumbo.png");
  color: black;
}
.step-1 {
  background-image: url("../../assets/s1c.png");
}
hr {
  width: 90%;
}
/* .step-2 {
  background-color: #a8c66c;
  color: white;
}
.step-3 {
  background-color: #1b6535;
  color: white;
}  */
</style>