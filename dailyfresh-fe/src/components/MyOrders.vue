<template>
    <h1 class="center">my orders</h1>
    <div id="my-orders" class="center">
        <i class="bi bi-card-list my-order"></i>
        <i class="bi bi-wallet2 my-order"></i>
        <i class="bi bi-box2 my-order"></i>
        <i class="bi bi-truck my-order"></i>
        <i class="bi bi-check-all my-order"></i>
        <label>semua</label>
        <label>belum dibayar</label>
        <label>dikemas</label>
        <label>dikirim</label>
        <label>diterima</label>
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