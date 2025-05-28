<template>
    <div class="container">
        <div class="title_history text-center">
            <h2>
                Daftar produk yang akan dikirimkan
            </h2>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="list_history" v-for="(item) in 4" :key="item">
                <ListProcess/>
            </div>
        </div>
    </div>
</template>

<script>
import ListProcess from '@/components/ListProcess.vue'

export default{
    name: 'History_Seller',
    components:{
        ListProcess,
    }
}

</script>

<style scoped>
div.title_history{
    margin-top: 8rem;
    margin-bottom: 2rem;
}
</style>