<template>
    <div class="contaainer">
        <div class="user">
            <h2 class="title">List User</h2>
            <hr>
            <div class="row title_user">
                <div class="col-3">
                    <p>Photo</p>
                </div>
                <div class="col-3">
                    <p>Nama</p>
                </div>
                <div class="col-3">
                    <p>Email</p>
                </div>
                <div class="col-2">
                    <p>Phone</p>
                </div>
                <div class="col-1">
                    <p>Action</p>
                </div>
            </div>
            <div class="list_user row" v-for="(user) in 2" :key="user">
                <div class="col-3">
                    <img class="img_user img-thumbnail" src="../assets/broccoli.png" alt="">
                </div>
                <div class="col-3">
                    <p>Nama</p>
                </div>
                <div class="col-3">
                    <p>Email</p>
                </div>
                <div class="col-2">
                    <p>Phone</p>
                </div>
                <div class="col-1">
                    <button class="btn btn-outline-danger">Block</button>
                </div>
            </div>
        </div>

        <div class="seller">
            <h2>List Seller</h2>
            <hr>
            <div class="row title_seller">
                <div class="col-3">
                    <p>Photo</p>
                </div>
                <div class="col-2">
                    <p>Nama Toko</p>
                </div>
                <div class="col-2">
                    <p>Nama Penjual</p>
                </div>
                <div class="col-2">
                    <p>Email</p>
                </div>
                <div class="col-2">
                    <p>Phone</p>
                </div>
                <div class="col-1">
                    <p>Action</p>
                </div>
            </div>
            <div class="list_seller row" v-for="(user) in 2" :key="user">
                <div class="col-3">
                    <img class="img_seller img-thumbnail" src="../assets/broccoli.png" alt="">
                </div>
                <div class="col-2">
                    <p>Nama Toko</p>
                </div>
                <div class="col-2">
                    <p>Nama penjual</p>
                </div>
                <div class="col-2">
                    <p>Email</p>
                </div>
                <div class="col-2">
                    <p>Phone</p>
                </div>
                <div class="col-1">
                    <button class="btn btn-outline-danger">Block</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
div.user h2{
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 8rem;
}

div.title_user,
div.title_seller
{
    border: 1px solid #194949;
    margin: 2rem;
}

div.list_user,
div.list_seller
{
    border: 1px solid #194949;
    margin-right: 2rem;
    margin-left: 2rem;
    margin-bottom: 1rem;
    padding: 1rem;
}

img.img_user,
img.img_seller
{
    height: 50px;
}

div.seller h2{
    margin: 2rem;
}

hr{
    margin-left: 2rem;
    width: 10%;
}
</style>