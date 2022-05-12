<template>
    <div class="list container">
        <div class="card_item card">
            <div class="row g-0">
                <div class="size_img col-md-4">
                    <img 
                    :src="imagePath" 
                    class="img-fluid rounded-start" 
                    :alt="item.name"
                    :key="item.image" >
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h4 class="name_product card-title">{{ item.name }}</h4>
                        <p class="description_product card-text">
                            {{ item.description }}
                        </p>

                        <div class="main_button">
                            <button type="button" class="btn btn-outline-info btn-sm" @click="goToEditProduct">
                                <i class="bi bi-pencil"></i>
                                Edit
                            </button>
                            <button type="button" class="btn btn-outline-danger btn-sm">
                                <i class="bi bi-trash3-fill"></i>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props: ["item", "index"],
    computed: {
        imagePath(){
        return `/images/goods/${this.item.image}`
        }
    },
    methods: {
        goToEditProduct(){
            this.$router.push(`/Edit_Product/${this.item.id}`)
        }
    }
}
</script>

<style scoped>
div.size_img{
    height: 200px;
}

div.size_img img{
    width: 200px;
}

div.card_item{
    max-width: 600px;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

div.main_button button{
    margin-right: 1rem;
}
</style>