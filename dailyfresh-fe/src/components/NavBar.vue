<template>
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
    
    <div>
        <router-link to="/Checkout" class="user-profile" id="col3">
            <i class="bi bi-cart"></i>
        </router-link>
        <router-link class="user-profile" to="/Profile">
            <i class="bi bi-person-circle"></i>
        </router-link>
    </div>
    
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
.user-profile{
    padding-top: 20px;
    margin: 10px;
    font-size: 3.5rem;
    color: white;
}
#col3{
    border-right: 1px solid white;
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