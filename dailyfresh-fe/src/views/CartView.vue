<template>
<div>
  
  <!-- Header Cart -->
  <div class="container title_cart">
    <h2>Keranjang</h2>
    <div class="row header_cart">
      <div class="col col-lg-5">
        <h5>Produk</h5>
      </div>
      <div class="col col-lg-2">
        <h5>Harga Satuan</h5>
      </div>
      <div class="col col-lg-2">
        <h5>Kuantitas</h5>
      </div>
      <div class="col col-lg-2">
        <h5>Total Harga</h5>
      </div>
      <div class="col col-lg-1">
        <h5>Aksi</h5>
      </div>
    </div>
  </div>
  <!-- Header Cart End -->

  <!-- Cart -->
  <div class="container item_cart" v-for="item in 4" :key="item">
    <CartList />
    <hr />
  </div>

  <!-- Checkout -->
  <div class="container">
    <div class="row checkout_product align-items-center">
      <div class="col col-lg-10">
        <h3>Subtotal <span>harga</span></h3>
      </div>
      <div class="col col-lg-2">
        <button class="btn btn-success btn-lg" @click="$router.push('/Checkout')">Checkout</button>
      </div>
    </div>
  </div>
  <!-- Checkout End -->
</div>
</template>

<script>
import CartList from "../components/CartList.vue";

export default {
  name: "CartPage",
  components: {
    CartList,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* header */
div.header_cart {
  background-image: url(../assets/leaves.png);
}

div.header_cart h5 {
  margin: 0;
  padding: 10px 0;
}
div.title_cart {
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #368e12;
}
/* checkout */
div.checkout_product {
  margin-top: 3rem;
  padding: 1.5rem;
  border-style: groove;
}
</style>
