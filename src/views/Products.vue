<template>
  <div>
    <!-- <transition-group appear class="grid-wrapper" name="slide-in" tag="div"> -->
      <div id="categoriesNav">
        <router-link to="/products/Veggies">
          <div class="categories"><img src = "@/assets/Vegetables_Thumbnail.png"/> <p id="item">Sayuran</p></div>
        </router-link>
        <router-link to="/products/Spices">
          <div class="categories"><img src = "@/assets/Spices_Thumbnail.png"/> <p id="item">Bumbu Dapur</p></div>
        </router-link>
        <router-link to="/products/Meat">
          <div class="categories"><img src = "@/assets/Meat_Thumbnail.png"/> <p id="item">Daging</p></div>
        </router-link>
        <router-link to="/products/Fruits">
          <div class="categories"><img src = "@/assets/Fruits_Thumbnail.png"/> <p id="item">Buah Buahan</p></div>
        </router-link>
        
      </div>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row row-cols-md-3 g-3">
            <div v-for="good in goods.data" :key="good.id">
              <ItemList :item="good" />
            </div>
          </div>
        </div>
      </div>
    <!-- </transition-group> -->
  </div>
</template>

<script>
import ItemList from '../components/ItemList.vue'
import axios from 'axios'

export default {
  name: 'ProductsPage',
  mounted(){
    this.fetchData();
  },
  components: {
    ItemList
  },
  data: () => {
    return{
      goods: [],
      category: ''
    };
  },
  methods: {
    async fetchData(){
      this.category = this.$route.params.category;
      if(this.category == null){
        console.log(this.category)
        const res = await axios.get("http://localhost:8080/goods");
        this.goods = res.data;
      }else{
        const res = await axios.get(`http://localhost:8080/goods/category?category=${this.category}`);
        this.goods = res.data;
      }
      
    }
  }
}
</script>

<style scoped>
#categoriesNav{
  display: flex;
}
.categories:hover{
  border: 5px solid black;
}
.categories{
  padding: 5px;
  margin: 5px;
  width: 150px;
  height: 59px;
  border: 1px solid #185CE2;
  display: flex;
}
</style>
