<template>
    <div id="profile-info">
        <div id="photo-profile">
            <!-- <div id="photo" :style="{ 'background-image': url('${require(selectedFile)}')}"> -->

            <!-- </div> -->
            <i class="bi bi-person-circle photo-profile"></i>
            <input type="file" @change="onFileSelected">
            <!-- <button @click="onUpload">choose a picture</button> -->
        </div>
        <h1>Nama</h1>
        <label >No. tlp<i class="bi bi-pencil-fill"></i></label>
        <label >E-mail<i class="bi bi-pencil-fill"></i></label>
        <label >Alamat<i class="bi bi-pencil-fill"></i></label>
    </div>
    <hr>
    <h1>Account</h1>
    <div id="account">
        <label>change profile<i class="bi bi-chevron-right"></i></label>
        <hr>
        <label>manage account<i class="bi bi-chevron-right"></i></label>
        <hr>
        <label>payment method<i class="bi bi-chevron-right"></i></label>
        <hr>
        <label>change language<i class="bi bi-chevron-right"></i></label>
        <hr>
    </div>
</template>

<script>

export default {
  name: 'ProfileInfo',
  data (){
      return{
          image: null,
        //   selectedFile: "../assets/logo.png"
      }
  },
  methods: {
    // onFileSelected(event){
    //     this.selectedFile = event.target.files[0]
        
    // },
    onUpload(){
        //axios.post("url nya")
    }
  }
}
</script>

<style>
    /* #photo{
        background-color: aquamarine;
        width: 250px;
        height: 250px;
        background-image: url(image); 
    } */
    .photo-profile{
        font-size: 3.5rem;
        margin-right: 20px;
    }
    .bi-pencil-fill{
        margin-left: 20px;
        font-size: 1rem;
    }
    label{
        margin: 5px;
        display: block;
    }
    
</style>