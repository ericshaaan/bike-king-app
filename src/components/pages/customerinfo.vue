<template>
<div>
  <div class="row">
    <div class="col-lg-6">
      <form>
        <div class="form-group text-left">
          <label for="inputName">Full Name</label>
          <input type="name" v-model="fullName" class="form-control" id="inputName" placeholder="Dela Cruz, Juan B.">
        </div>
        <div class="form-group text-left">
          <label for="inputEmail">Email Address</label>
          <input type="email" v-model="emailAddress" class="form-control" id="inputEmail" placeholder="juandelacruz@example.com">
        </div>
        <div class="form-group text-left">
          <label for="inputMobile">Mobile No.</label>
          <input type="mobile" v-model="mobileNo" class="form-control" id="inputMobile" placeholder="09989641234">
        </div>
        <!-- <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button> -->
      </form>
    </div>

    <div class="col-lg-6">
      <form>
        <div class="form-group text-left">
          <label for="inputAddress1">Complete Address</label>
          <input type="address" v-model="addressLine1" class="form-control" id="inputAddress1" placeholder="House No., Street / Unit No., Building">
          <input type="address" v-model="addressLine2" class="form-control" id="inputAddress2" placeholder="Barangay, City">
          <input type="address" v-model="addressLine3" class="form-control" id="inputAddress3" placeholder="Province, Region">
          <small id="disclaimer" class="form-text text-muted text-left">** We'll never share your personal information with anyone else.</small>
        </div>
        
      </form>
      <div class="form-group text-left">
        <label for="mop">Method of Payment</label>
        <div class="form-check">
          <input class="form-check-input" v-model="methodOfPayment" type="radio" name="exampleRadios" id="exampleRadios1" value="Cash/ Cash on Delivery" checked>
          <label class="form-check-label" for="exampleRadios1">
            Cash/Cash on Delivery <span class="text-muted">(within supported areas only)</span>
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" v-model="methodOfPayment" type="radio" name="exampleRadios" id="exampleRadios2" value="Credit Card">
          <label class="form-check-label" for="exampleRadios2">
            Credit Card
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" v-model="methodOfPayment" type="radio" name="exampleRadios" id="exampleRadios2" value="Bank Deposit/ Bank Transfer">
          <label class="form-check-label" for="exampleRadios2">
            Bank Deposity, Bank Transfer <span class="text-muted">(BPI, UnionBank, Security Bank)</span>
          </label>
        </div>
      </div>
    </div>

  </div>

  <div class="row mb-4">
    <div class="col-12">
      <div class="border border-dark rounded text-left p-2">
        <div> <b>Purchasing: </b><em> {{product.productTitle}} </em> </div>
        <div><b>Price: </b>PHP <em>{{product.productPrice}} </em> </div>
        <div>After submitting order, kindly wait for a confirmation call from one of our agents. Once order is confirmed via phone call, you can proceed to payment.
        For credit card payments, a payment link will be received via your email for security purposes. </div>
      </div>
      <button type="submit" @click="onSubmit()" class="btn btn-primary mt-3">Place Order</button>
      <!-- <div> {{ fullName }} </div>
      <div> {{ emailAddress }} </div>
      <div> {{ addressLine1}}, {{ addressLine2}}, {{ addressLine3}} </div>
      <div> {{ mobileNo}}, {{methodOfPayment}} </div> -->
    </div>
  </div>

</div>
</template>

<script>
import { apiClient } from '../../main';
import { CREATE_ORDER_MUTATION, PRODUCTS_DETAILS_QUERY } from '../../queries';

export default {
  data () {
    return {
      loading: true,
      slug: '',
      product: [],
      fullName: '',
      emailAddress: '',
      addressLine1: '',
      addressLine2: '',
      addressLine3: '',
      methodOfPayment: '',
      mobileNo: '',
      id: '',
    }
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
        this.product = await body.product;
        this.loading = false;
        // this.cover = this.items.productPhoto[0].url;
        // this.photos = this.items.productPhoto;
      } catch (error) {
        console.log(error);
      }

    },

    async onSubmit() {
      const formattedOrder = {
        fullName: this.fullName,
        emailAddress: this.emailAddress,
        addressLine1: this.addressLine1,
        addressLine2: this.addressLine2,
        addressLine3: this.addressLine3,
        methodOfPayment: this.methodOfPayment,
        mobileNo: this.methodOfPayment,
      };
      try {
        const response = await apiClient.post(process.env.VUE_APP_ENDPOINT, {
          query: CREATE_ORDER_MUTATION,
          variables: formattedOrder
        });

        const body = await response.data.data;
        const newOrder = body.createOrder;
        console.log(newOrder)
        this.id = newOrder.id;
        // this.fullName = '';
        // this.emailAddress = '';
        // this.addressLine1 = '';
        // this.addressLine2 = '';
        // this.addressLine3 = ''
        // this.methodOfPayment = '';
        // this.mobileNo = '';
        this.$router.push({name: "confirmationpage", params: { orderId: this.id}})
      } catch (error) {
        console.log(error);
      }

    },

  },
}
</script>

<style scoped>

</style>