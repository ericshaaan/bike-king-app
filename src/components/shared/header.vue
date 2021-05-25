<template>
<div class="container-fluid">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <img class="navbar-brand logo" src="../../assets/BKBlack.png">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <router-link :to="{ name: 'home' }" tag="a" class="nav-link" active-class="active" exact>
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'shopbikes' }" tag="a" class="nav-link" active-class="active" exact>
            Shop Bikes
          </router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link :to="{ name: 'aboutus' }" tag="a" class="nav-link" active-class="active" exact>
            About Us
          </router-link>
        </li> -->
        <li class="nav-item">
          <router-link :to="{ name: 'customerreviews' }" tag="a" class="nav-link" active-class="active" exact>
            Customer Reviews
          </router-link>
        </li>
      </ul>
      <!-- <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> -->
    </div>
  </nav>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.logo {
  max-height: 5rem;
  width: auto;
}
</style>