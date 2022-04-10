<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div id="navbar">
    <router-link to="/">
        <img src="@/assets/DailyFresh2_white.png" alt="Daily Fresh" id="daily-fresh">
    </router-link>
    <div id="searchbox">
        <div class="row height">
            <div class="col-md">
                <div class="form"> <i class="fa fa-search"></i> <input type="text" class="form-control form-input" placeholder="Search anything..."></div>
            </div>
        </div>
    </div>
    
    <!-- <router-link id="link" to="/">Home</router-link> |
    <router-link id="link" to="/Products">Products</router-link> -->
    <router-link id="user-profile" to="/Profile">
        <img src="@/assets/user-logo-48.png" alt="user-logo">
    </router-link>
  </div>
</template>
<script>

</script>

<style>

.form {
    position: relative;
    padding-top: 20px;
}

.form .fa-search {
    position: absolute;
    top: 40px;
    left: 20px;
    color: #368E12
}

.form-input {
    height: 55px;
    text-indent: 33px;
    border-radius: 30px
}

.form-input:focus {
    box-shadow: none;
    border: none
}
<!-- -->

#navbar{
    margin-top: 0px;
    text-align: center;
    background-color: #368E12;
    color: white;
    height: 125px;
    display: grid;
    grid-template-columns: 30% 50% 20%;
}
#user-profile{
    padding-top: 20px;
    /* margin: 10px; */
}
#user-profile img{
    /* padding: -40px; */
    border-radius: 50%;
}
#daily-fresh{
    margin-left: 50px;
    width: 260px;
    height: 86px;
}
#link{
    color: azure;
}
</style>