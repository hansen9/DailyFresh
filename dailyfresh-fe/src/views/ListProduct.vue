<template>
    <div class="container">
        <div class="title_list">
            <h2>
                Daftar Produk yang dimiliki
            </h2>
        </div>
        <div class="list_product row" >
            <div class="col-6" v-for="(item) in 4" :key="item">
                <ListProductSeller/>
            </div>
        </div>
    </div>
</template>

<script>
import ListProductSeller from "../components/ListProductSeller.vue"
import axios from "axios"

export default{
    name: 'ListPage',
    mounted(){
        this.fetchProducts()
    },
    components:{
        ListProductSeller,
    },
    data(){
        return{
            products: []
        }
    },
    methods: {
        async fetchProducts(){
            //ganti this.product jadi user_id dari login
            const res = await axios.get(`http://localhost:8080/goods/by_seller?seller_id=${this.products}`);
            this.goods = res.data;
        }
    }
}
</script>

<style scoped>
div.title_list{
    margin-top: 8rem;
    margin-bottom: 2rem;
}
</style>