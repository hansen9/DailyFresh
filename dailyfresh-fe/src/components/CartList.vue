<template>
  <!-- component -->
  <!-- Cart -->
  <div class="row cart d-flex align-items-center">
    <div class="col col-lg-2 check_product">
      <img class="rounded float-start product_picture" 
      :key="item.image"
      :src="imagePath" 
      :alt="item.name"
      >
    </div>
    <div class="col col-lg-3">
      <p class="name_product">{{ item.name }}</p>
    </div>
    <div class="col col-lg-2">
      <p>{{ item.price }}</p>
    </div>
    <div class="col col-lg-2">
      <form>
        <div class="form-group quantity_cart">
          <input type="number" class="form-control" min="0" :value="item.quantity"/>
        </div>
      </form>
    </div>
    <div class="col col-lg-2">
      <p>{{ item.price * item.quantity }}</p>
    </div>
    <div class="col col-lg-1">
      <!-- Belum bisa delete meskipun status sukses -->
      <button class="btn btn-success" id="delete" v-on:click="deleteItem()">Hapus</button>
    </div>
  </div>
  <!-- Cart End -->
</template>

<script>
import axios from 'axios';
export default{
  name: 'CartList',
  props: ["item", "index"],
  
  computed: {
    imagePath(){
      return `/images/goods/${this.item.image}`
    }
  },
  methods: {
    deleteItem(){
      let formData = new FormData();
      formData.append("goods_id", this.item.goods_id);
      console.log(this.item.goods_id)
      
      axios
        .delete("http://localhost:8080/cart/detail/remove?cart_id=2", {formData})
        .then((res) => {
          console.log(res.status);
        })
        .catch((err) => {
            console.log(err);
        })
    }
  }
}
</script>

<style scoped>
/* cart */
img.product_picture {
  width: 100%;
}

div.cart {
  border-style: hidden;
}

div.quantity_cart {
  width: 40%;
}

p {
  margin-bottom: 0;
}

p.name_product {
  margin-left: 2rem;
}
</style>
