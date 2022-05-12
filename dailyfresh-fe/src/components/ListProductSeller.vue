<template>
    <div class="list container">
        <div class="card_item card">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="../assets/broccoli.png" class="img-fluid rounded-start" alt="Nama produk">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h4 class="name_product card-title">Card title</h4>
                        <p class="description_product card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                        <div class="main_button">
                            <button type="button" class="btn btn-outline-info btn-sm" @click="$router.push('/Edit_Product')">
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

</script>

<style scoped>
div.card_item{
    max-width: 600px;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

div.main_button button{
    margin-right: 1rem;
}
</style>