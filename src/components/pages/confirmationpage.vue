<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-2 text-left">     
        <router-link :to="{ name:'home'}" tag="btn" class="btn btn-outline-primary">
          <span aria-hidden="true">&laquo; Return to Home</span>
        </router-link>
      </div>
    </div>
    <div class="row page-title">
      <div class="col-12">
        <div class="card mx-auto mb-5">
          <div class="card-body">
            <h5 class="card-title alert alert-success">Thank you! Your order is now being processed.</h5>
            <h6 class="card-subtitle mb-2 text-muted">Order ID: {{orderId}}</h6>
            <p class="card-text">Kindly wait for a confirmation call from one of our agents before proceeding to payment.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
    };
  },
  computed: {
    orderId () {
      return this.$route.params.orderId;
    }
  }
}
</script>

<style scoped>

</style>