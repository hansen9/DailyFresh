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

export default{
    name: 'ListPage',
    components:{
        ListProductSeller,
    }
}
</script>

<style scoped>
div.title_list{
    margin-top: 8rem;
    margin-bottom: 2rem;
}
</style>