<template>
<div>
  <footer>
      <div class="container-fluid bg-dark pt-2">
        <div class="row text-center">
          <div class="col-md-4">
            
            <router-link :to="{ name:'home'}" tag="a"><img class="logo" src="../../assets/BKWhite.png"></router-link>
            
            <hr class="blacked">
            <div>Contact us</div>
            <div>Mobile No. +63 998 858 9121</div>
            <div>BikeKingBaguio@gmail.com</div>
            
          </div>
          <div class="col-md-4">
            <hr class="light">
            <h6>
              <!-- Message Us -->
              <a class="email" href="mailto:ppdo.pgi@gmail.com"><b>Message Us</b></a>
            </h6>
            <hr class="light">
            <div>Get in touch with us by sending us an email.</div>
          </div>
          <div class="col-md-4">
            <hr class="light">
            <h6>Shop Address</h6>
            <hr class="light">
            <div>City of Baguio</div>
            <div>T. Alonzo Street</div>
            <div>2600</div>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-lg-12">
            <hr class="light-100">
            <p class="copyright">&copy; 2021. The Official Website of the Bike King Baguio. Premium Bike Builders.</p>
          </div>
        </div>
      </div>
    </footer>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
footer {
  color: white;
}
a {
  color: white;
}
.logo {
  max-height: 5rem;
  width: auto;
}
.blacked {
  border: 2px black;
  width: 95%;
}
</style>