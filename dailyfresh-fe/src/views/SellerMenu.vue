<template>
    <!-- Seller menu -->
    <div class="container">
        <div class="title_seller_menu">
            <h2>
                Selamat datang ke fitur Daily Fresh Seller Centre
            </h2>
            <p>Kelola tokomu dengan mudah, dirancang untuk memudahkanmu mengatur produk, melihat barang yang sudah terjual</p>
        </div>

        <div class="seller_menu row justify-content-center">
            <div class="detail_menu col-2 d-flex flex-column align-items-center justify-content-end">
                <i class="button_menu bi bi-plus-circle-fill"></i>
                <router-link class="link" to="/Add_Product">
                    <h4>Add Product</h4>
                </router-link>
            </div>

            <div class="detail_menu col-2 d-flex flex-column align-items-center justify-content-end">
                <i class="button_menu bi bi-card-list"></i>
                <router-link class="link" to="/List_Product">
                    <h4>List Product</h4>
                </router-link>
            </div>

            <div class="detail_menu col-2 d-flex flex-column align-items-center justify-content-end">
                <i class="button_menu bi bi-clock-history"></i>
                <router-link class="link" to="/Add_Product">
                    <h4>Sales History</h4>
                </router-link>
            </div>

            <div class="detail_menu col-2 d-flex flex-column align-items-center justify-content-end">
                <i class="button_menu bi bi-send-plus-fill"></i>
                <router-link class="link" to="/Add_Product">
                    <h4>Process Sales</h4>
                </router-link>
            </div>
        </div>
    </div>
    <!-- Seller menu end -->
</template>

<script>

</script>

<style scoped>
div.title_seller_menu{
    margin-top: 9rem;
    margin-bottom: 6rem;
    text-align: center;
}
.button_menu{
    font-size: 8rem;
}

div.detail_menu{
    border-radius: 15px;
    margin: 1rem;
}

.link{
    text-decoration: none;
    color: #198754;
}
.link:hover{
    color: #bbffa0;
}
</style>