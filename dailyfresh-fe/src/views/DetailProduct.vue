<template>
        <!-- Product Picture -->
        <section class="product_information">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <img src="../assets/carrot.png" class="rounded float-start main_picture" alt="product daily fresh">
                </div>
                
                <!-- Product Information -->
                <div class="col-lg-6 information_product">
                    <div class="product_title">
                        <h1>Wortel 500gr</h1>
                    </div>
                    <div class="rating">
                        <span class="rate">4.5</span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span>Terjual 2</span>
                    </div>
                    <div class="price">
                        <h1>Rp.16000</h1>
                        <hr class="hr_color">
                    </div>
                    <div class="information">
                        <p>Pengiriman: dikirim dari Jakarta</p>
                        <form>
                            <div class="form-group quantity_product">
                                <label for="kuantitas_pemesanan">Kuantitas: </label>
                                <input type="number" class="form-control" min="0"/>
                            </div>
                        </form>
                        <p>Stock: 50</p>
                    </div>
                    <!-- Button action -->
                    <div class="button_action_customer">
                        <router-link to="/Cart">
                            <button type="button" class="btn btn-outline-success button_action">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                                Masukkan Keranjang
                            </button>
                        </router-link>
                        <button type="button" class="btn btn-success button_action">Beli Sekarang</button>
                        <button type="button" class="btn btn-outline-success button_action">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                            Favorite
                        </button>
                    </div>
                    <hr class="hr_color">
                </div>
            </div>
        </div>
        </section>
        <!-- Product Information End -->

        <!-- Seller Information -->
        <section class="seller_information">
        <div class="container seller">
            <div class="row row_seller">
                <div class="col col-lg-1">
                    <img src="@/assets/profile_pict.png" class="rounded-circle seller_pict" alt="Seller Picture">
                </div>

                <div class="col col-lg-4 info_toko">
                    <p>FreshSegar</p> <!-- Nama penjual -->
                    <button type="button" class="btn btn-outline-success btn-sm">Kunjungi Toko</button>
                </div>

                <div class="col col-lg-7 address_seller">
                    <p>Produk: 2</p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        Jakarta
                    </p>
                </div>
            </div>
        </div>
        </section>
        <!-- Seller Information End -->

        <!-- Description Product -->
        <section class="description_product">
            <div class="container detail_product">
                <div class="container desc_header">
                    <h4>Deskripsi Produk</h4>
                </div>
                <div class="container desc_product">
                    <p>Kondisi: Baru</p>
                    <p>Kategori: Sayuran</p>
                    <p>Berat: 500gr</p>
                    <p>
                        Wortel Brastagi 500 gr (3-4 buah) [Harga Pasar]
                        Produk bervariasi di 400-600 gr (tergantung hasil panen)
                        Wortel Brastagi adalah wortel asli Brastagi, Medan. Ini memiliki warna oranye cerah dan kulit halus. Wortel jenis ini sangat mudah dibersihkan; kupas saja dan nikmatilah!

                        Kemasan
                        Wortel Brastagi akan dikemas dalam kemasan plastik
                    </p>
                </div>
            </div>
        </section>
        <!-- Description Product End -->
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* Product information section */
img.main_picture{
    width: 30rem;
    margin-top: 5rem;
}

img.alt_picture{
    width: 10rem;
}

/* Product information */
div.information_product{
    padding-top: 6rem;
}

span.rate{
    color: #368e12;
}
span.checked {
    color: #368e12;
}

div.price{
    padding-bottom: 1rem;
    color: #368e12;
}

div.quantity_product{
    width: 15%
}

button.button_action{
    margin: 0.5rem;
}

div.button_action_customer{
    padding-top: 2rem;
    padding-bottom: 2rem;
}

hr.hr_color{
    height: 0.2rem;
    color: #368e12;
}


/* Seller info section */
div.seller{
    margin-top: 1rem;
    margin-bottom: 1rem;
}

div.row_seller{
    background-image: url(../assets/leaves.png);
}

img.seller_pict{
    border-radius: 30%;
    width: 100%;
}

div.info_toko{
    margin-top: 4px;
}

div.address_seller{
    margin-top: 6px;
}

/* Desc section */
div.desc_header{
    color: white;
    background-color: #368e12;
    border-bottom: groove;
}

div.detail_product{
    padding-left: 0;
    padding-right: 0;
    border-style: groove;
}
</style>