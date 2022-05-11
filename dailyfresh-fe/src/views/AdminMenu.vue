<template>
    <!-- Seller menu -->
    <div class="container">
        <div class="title_admin_menu">
            <h2>
                Selamat datang di menu Admin
            </h2>
        </div>

        <div class="seller_menu row justify-content-center">
            <div class="detail_menu col-2 d-flex flex-column align-items-center justify-content-center">
                <i class="button_menu bi bi-x-square-fill"></i>
                <router-link class="link" to="/Block_User">
                    <h4>Block User</h4>
                </router-link>
            </div>

            <div class="detail_menu col-2 d-flex flex-column align-items-center justify-content-center">
                <i class="button_menu bi bi-mailbox2"></i>
                <router-link class="link" to="/Customer_Service">
                    <h4 class="text-center">Customer Service</h4>
                </router-link>
            </div>

            <!-- <div class="detail_menu col-2 d-flex flex-column align-items-center justify-content-center">
                <i class="button_menu bi bi-clock-history"></i>
                <router-link class="link" to="/History_Seller">
                    <h4>Sales History</h4>
                </router-link>
            </div>

            <div class="detail_menu col-2 d-flex flex-column align-items-center justify-content-center">
                <i class="button_menu bi bi-send-plus-fill"></i>
                <router-link class="link" to="/Process_Sales">
                    <h4>Process Sales</h4>
                </router-link>
            </div> -->
        </div>
    </div>
    <!-- Seller menu end -->
</template>

<script>

</script>

<style scoped>
div.title_admin_menu{
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