<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div id="categoriesNav">
        <div class="categories"><img src = "@/assets/Vegetables_Thumbnail.png"/> <p id="item">Sayuran</p></div>
        <div class="categories"><img src = "@/assets/Spices_Thumbnail.png"/> <p id="item">Bumbu Dapur</p></div>
        <div class="categories"><img src = "@/assets/Meat_Thumbnail.png"/> <p id="item">Daging</p></div>
        <div class="categories"><img src = "@/assets/Fruits_Thumbnail.png"/> <p id="item">Buah Buahan</p></div>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
            </svg>

            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" @click="goToCart()" class="btn btn-sm btn-outline-secondary">Add to cart</button>
                  <!-- <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> -->
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  methods: {
    goToCart(){
      this.$router.push('/Checkout')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#categoriesNav{
  display: flex;
}
.categories{
  padding: 5px;
  margin: 5px;
  width: 150px;
  height: 59px;
  border: 1px solid #185CE2;
  display: flex;
}
.categories:hover{
  border: 5px solid black;
}
/* img{
  width: 33.3333333333%;
  height: 225px;
} */
svg{
  background-image: url('@/assets/pngegg (5).png');
  background-size: 265px;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
