<template>
  <!-- component -->
  <!-- Cart -->
  <div class="row cart d-flex align-items-center">
    <div class="col col-lg-2 check_product">
      <img src="@/assets/Vegetables_Thumbnail.png" class="rounded float-start product_picture" alt="product daily fresh" />
    </div>
    <div class="col col-lg-3">
      <p class="name_product">Nama barang</p>
    </div>
    <div class="col col-lg-2">
      <p>Rp16000</p>
    </div>
    <div class="col col-lg-2">
      <form>
        <div class="form-group quantity_cart">
          <input type="number" class="form-control" min="0" />
        </div>
      </form>
    </div>
    <div class="col col-lg-2">
      <p>Rp16000</p>
    </div>
    <div class="col col-lg-1">
      <button class="btn btn-success">Hapus</button>
    </div>
  </div>
  <!-- Cart End -->
</template>

<script></script>

<style>
/* cart */
img.product_picture {
  width: 100%;
}

div.cart {
  border-style: hidden;
}

div.quantity_cart {
  width: 40%;
}

p {
  margin-bottom: 0;
}

p.name_product {
  margin-left: 2rem;
}
</style>
