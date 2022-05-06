<template>
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
              <img :key="item.image" :src="imagePath" :alt="item.name">
            </svg>

            <div class="card-body">
              <p class="card-text">{{ item.description }}</p>
              <p class="card-text">{{ item.price }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" @click="goToCart()" class="btn btn-sm btn-outline-secondary">Add to cart</button>
                </div>
                <small class="text-muted">9 mins</small>
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
      return `@/assets/${this.item.image}`
    }
  },
  name: 'ItemList',
  methods: {
    goToCart(){
      this.$router.push('/Detail-Product')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

svg{
  /* background-image: url('@/assets/carrot.png'); */
  background-size: 265px;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
