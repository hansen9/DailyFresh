<template>
    <h1 class="center">my orders</h1>
    <div id="my-orders" class="center">
        <i class="bi bi-card-list my-order"></i>
        <i class="bi bi-wallet2 my-order"></i>
        <i class="bi bi-box2 my-order"></i>
        <i class="bi bi-truck my-order"></i>
        <i class="bi bi-check-all my-order"></i>
        <p>semua</p>
        <p>belum dibayar</p>
        <p>dikemas</p>
        <p>dikirim</p>
        <p>diterima</p>
    </div>
    <div id="history">

    </div>
</template>

<script>

export default {
  name: 'MyOrders'
}
</script>

<style>
    #my-orders{
        display: grid;
        grid-template-columns: 20% 20% 20% 20% 20%;
        grid-template-rows: 50% 50%;
    }
    .my-order{
        font-size: 3.5rem;
    }
    tr, td{
        border: solid black 1px;
    }
    #history{
        padding-right: 5%;
        width: 95%;
        height: 2rem;
        border: solid black 1px;
    }
</style>