<template>
    <div class="contaainer">
        <div class="list mx-auto">
            <h2 class="title">List Complaint</h2>
            <hr>
            <div class="row title_header">
                <div class="col-4 d-md-flex justify-content-md-center">
                    <h5>Nama</h5>
                </div>
                <div class="col-4 d-md-flex justify-content-md-center">
                    <h5>Category</h5>
                </div>
                <div class="col-4 d-md-flex justify-content-md-center">
                    <h5>Action</h5>
                </div>
            </div>
            <div class="list_complaint row" v-for="(user) in 2" :key="user">
                <div class="col-4 d-md-flex justify-content-md-center">
                    <p>Nama</p>
                </div>
                <div class="col-4 d-md-flex justify-content-md-center">
                    <p>Category</p>
                </div>
                    <div class="col-4 d-md-flex justify-content-md-center">
                        <router-link to="/customer_service">
                            <button class="btn btn-outline-info">See</button>
                        </router-link>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
div.list{
    width: 70%;
    padding: 1rem;
    margin-top: 8rem;
    margin-bottom: 2rem;
}

div.title_header,
div.list_complaint{
    border: 1px solid #198761;
    margin: 1rem;
}
</style>