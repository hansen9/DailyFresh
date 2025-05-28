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
  <div class="container item_cart" v-for="cart in carts.data" :key="cart.id">
    <CartList :item="cart"/>
    <hr />
  </div>

  <!-- Checkout -->
  <div class="container">
    <div class="row checkout_product align-items-center">
      <div class="col col-lg-10">
        <!-- Belum beres menghitung total item di cart -->
        <h3>Subtotal <span>{{sumPrice()}}</span></h3>
        <!-- <div v-for="item in carts.data" :key="item.id"> -->
        <!-- </div> -->
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
import axios from "axios"
import CartList from "../components/CartList.vue";

export default {
  name: "CartPage",
  components: {
    CartList,
  },
  data() {
    return{
      carts: [],
      total: 0,
    };
  },
  
  methods: {
    fetchCart(){
      axios
          .get("http://localhost:8080/cart/detail?id=1")
          .then((res) =>{
            this.carts = res.data;
          })
          .catch(err =>{
            console.log(err)
          });
    },
    sumPrice(){
      for(let i = 0; i < this.carts.length; i++){
        this.total += this.carts[i].quantity * this.cart[i].price
      }
    }
    // sumPrice(price, quantity){
    //   this.total += (price * quantity)
    // },
  },
  mounted(){
    this.fetchCart();
    this.sumPrice();
  }
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
  margin-top: 8rem;
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
