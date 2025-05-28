<template>
    <div class="container d-flex justify-content-center">
        <div class="card_process">
            <div class="row d-flex align-items-center">
                <div class="img_product col-3">
                    <img src="../assets/broccoli.png" alt="">
                </div>
                <div class="detail col-4">
                    <p>Nama Produk</p>
                    <p>Quantity</p>
                    <p>Harga</p>
                </div>
                <div class="detail col-5">
                    <p>Pembeli</p>
                    <p>Tanggal pembelian</p>
                    <div class="button_section">
                        <button class="button_send btn btn-outline-success" type="button">
                            Send
                        </button>
                        <button class="button_cancel btn btn-outline-danger" type="button">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

</script>

<style scoped>
div.card_process{
    border: 1px solid #198754;
    width: 70%;
    margin: 1rem;
}

div.img_product img{
    width: 100%;
    padding: 1rem;
}

button.button_send{
    margin-right: 1rem;
}
</style>