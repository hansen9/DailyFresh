<template>
    <div class="container">
        <div class="title_history text-center">
            <h2>
                Daftar Produk Yang Telah Terjual
            </h2>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="list_history" v-for="(item) in 4" :key="item">
                <ListHistorySeller/>
            </div>
        </div>
    </div>
</template>

<script>
import ListHistorySeller from "../components/ListHistorySeller.vue"

export default{
    name: 'History_Seller',
    components:{
        ListHistorySeller,
    }
}

</script>

<style scoped>
div.title_history{
    margin-top: 8rem;
    margin-bottom: 2rem;
}
</style>