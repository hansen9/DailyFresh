<template>
  <div id="navbar">
    <router-link to="/">
        <img src="@/assets/DailyFresh2_white.png" alt="Daily Fresh" id="daily-fresh">
    </router-link>
    <div id="searchbox">
        <div class="row height">
            <div class="col-md">
                <form class="form" @submit="toProducts"> 
                    <i class="fa fa-search"></i> 
                    <input type="text" class="form-control form-input" placeholder="Search anything...">
                </form>
            </div>
        </div>
    </div>
    
    <div>
        <router-link to="/Cart" class="cart-button">
            <i class="bi bi-cart2"></i>
        </router-link>
        <router-link class="user-profile" to="/Profile">
            <i class="bi bi-person-circle"></i>
        </router-link>
    </div>
    
  </div>
</template>
<script>
export default {
    methods: {
        toProducts(){
            this.$router.push('/Products')
            // $router.push('/Products')
        }
    }
}
</script>

<style>

.form {
    position: relative;
    padding-top: 15px;
    width: 95%;
}

.form .fa-search {
    position: absolute;
    top: 35px;
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

#navbar{
    margin-top: 0px;
    text-align: center;
    background-color: #198754;
    color: white;
    width: 100%;
    height: 20%;
    display: grid;
    grid-template-columns: 30% 50% 20%;
    z-index: 9999999999;
}
.user-profile, .cart-button{
    margin: 1rem;
    font-size: 2.5rem;
    color: white;
}
#col3{
    padding-right: 20px;
    border-right: 1px solid white;
}
#daily-fresh{
    margin-left: 50px;
    margin-top: 0.5rem;
    width: 50%;
}
#link{
    color: azure;
}
</style>