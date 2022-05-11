<template>
  <div class="col">
    <div class="card shadow-sm">
      <img 
      :key="item.image" 
      :src="imagePath" 
      :alt="item.name">
      <div class="card-body">
        <p class="card-text">{{ item.name }}</p>
        <p class="card-text">{{ item.description }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button 
            type="button" 
            @click="goToCart()" 
            class="btn btn-sm btn-outline-secondary">Rp. {{ item.price }}</button>
          </div>
          <p class="card-text">{{ item.stock }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "index"],
  computed: {
    imagePath(){
      return `images/goods/${this.item.image}`
    }
  },
  name: 'ItemList',
  methods: {
    goToCart(){
      console.log(this.item)
      this.$router.push(`/Detail_Product/${this.item.id}`)
      // this.$router.push('/Detail_product')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.btn-sm{
  color: #198754;
  border-color: #198754;
}
.btn-sm:hover{
  background-color: #198754;
  color: white;
}

</style>
