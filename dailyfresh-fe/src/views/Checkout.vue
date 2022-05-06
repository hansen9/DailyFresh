<template>
  <div class="hello">
    <h1>Checkout</h1>
    <form action="">
      <div id="address">
        <h3>Alamat pengiriman</h3>
        <div id="userInfo">
          <h5>username</h5>
          <p>address</p>
        </div>
        <p>phone no.</p>

        <h4>catatan alamat :</h4>
        <textarea name="addressNote" id="addressNote" cols="50" rows="5"></textarea>
      </div>
    </form>
    
    <table>
      <tr>
        <th>Produk</th>
        <th>Harga satuan</th>
        <th>Kuantitas</th>
        <th>Total Harga</th>
      </tr>
      <tr v-for="(item) in 4" :key="item">
        <td>
          <img src="@/assets/Vegetables_Thumbnail.png" class="rounded float-start product_picture" alt="product daily fresh">
          <p>Nama barang</p>
        </td>
        <td>Rp16000</td>
        <td>1</td>
        <td>Rp16000</td>
      </tr>
    </table>

    <div id="payment_method">
      <h5>Metode Pembayaran</h5>
      <button class="pay_method">Cash on Delivery</button>
      <button class="pay_method">Bank Transfer</button>
      <h6>Subtotal : RP64000</h6>
    </div>

    <button id="pesan_btn">PESAN</button>
  </div>
</template>

<script>
export default {
  name: 'CheckOut',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    width: 50%;
    margin: auto;
    
  }
  #address{
    border: 1px solid black;
  }
  textarea{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  #userInfo{
    display: flex;
  }
  h5{
    margin-right: 4px;
  }
  
  table{
    border-collapse: collapse;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  #payment_method{
    border: 1px solid black;
  }
  h1{
    float: inline-start;
  }
  #payment_method > button{
    float:inline-start;
    margin-bottom: 20px;
    margin-left: 20px;
  }
  #pesan_btn{
    width: 120px;
    height: 60px;
    font-size: 25px;
  }
  h6,#pesan_btn{
    margin-top: 10px;
    float:right;
  }
  button{
    border: none;
    background-color: #368E12;
    color: azure;
    border-radius: 10px;
  }
  td{
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-left: none;
    border-right: none;
  }
  .product_picture{
    width: 25%;
    height: 25%;
  }
  .pay_method:focus{
    background-color: aqua;
  }
</style>
