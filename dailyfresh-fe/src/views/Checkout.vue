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
    </table>

    <div id="payment_method">
      <h5>Metode Pembayaran</h5>
      <button>Cash on Delivery</button>
      <button>Bank Transfer</button>
      <h6>Subtotal : </h6>
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
  #address > textarea {
    text-align: center;
  }
  textarea{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
    /* align: center; */

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
    border: 1px solid black;
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
    width: 157px;
    height: 77px;
    font-size: 35px;
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
  p,h5,h4,h3{
    margin-bottom: 0px;
  }
</style>
