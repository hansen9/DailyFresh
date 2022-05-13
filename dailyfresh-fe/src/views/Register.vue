<template>
  <div class="background d-flex justify-content-center align-items-center">
    <div class="login-container d-flex flex-column">
      <router-link to="/">
        <img src="../assets/DailyFresh2.png" alt="df_logo" class="img-fluid" />
      </router-link>
      <form class="d-flex flex-column justify-content-between" @submit.prevent="registerSubmit">
        <label for="name">Name</label>
        <input v-model="user.name" type="text" id="Name" placeholder="Levin Kun" />

        <label for="email">Email</label>
        <input v-model="user.email" type="email" id="email" placeholder="dailyfresh@email.com" />

        <label for="name">Address</label>
        <input v-model="user.address" type="text" id="Name" placeholder="Address" />

        <label for="name">Phone Number</label>
        <input v-model="user.phone" type="text" id="Name" placeholder="000" />

        <label for="password">Password</label>
        <input v-model="user.password" type="password" />
        <label for="password">Confirm Password</label>
        <input v-model="user.confirmPassword" type="password" />

        <button class="align-self-center" type="submit">Register</button>
        <p class="have-account">Have an Account? <router-link to="/Login"> Sign In </router-link></p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "RegisterPage",
  data(){
    return{
      user:{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
        phone: "",
        balance: 0
      }
    }
  },
  methods:{
    async registerSubmit(){
      const FormData = require('form-data')
      const formData = new FormData();


      // if(this.password == this.confirmPassword){
        formData.append("name", this.user.name);
        formData.append("email", this.user.email);
        formData.append("password", this.user.password);
        formData.append("phone", this.user.phone);
        formData.append("cust_address", this.user.address);
        formData.append("balance", this.user.balance);
  
        axios
          .post("http://localhost:8080/customer", formData)
          .then(res => {
            console.log(res);
            location.replace("/login")
          })
          .catch(err => {
            console.log(err);
          });
      // }else{
      //   console.log("Error");
      // }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.background {
  background-image: url("../assets/login_background.jpg");
  background-size: cover;
  height: 100vh;
}

div.login-container {
  background-color: rgba(255, 255, 255, 0.7);
  width: 30%;
  padding: 2.5% 3% 1.5%;
  border-radius: 15px;
  backdrop-filter: blur(5px);
}

div.login-container form {
  height: 60%;
  color: black;
}

form input,
form button {
  border-radius: 10px;
  border: 1px solid black;
}

form input {
  padding: 5px 10px;
  border: none;
  outline: none;
}

p.have-account {
  font-size: 80%;
}

p.have-account a {
  text-decoration: none;
  color: #198754;
}

p.have-account a:hover {
  text-decoration: underline;
}

form button {
  width: 30%;
  border-radius: 15px;
  padding: 5px 0;
  margin: 15px 0;
  border: none;
  background-color: #198754;
  color: white;
  transition: all 0.1s ease-in-out;
}

form button:hover {
  background-color: #136941;
}

p.have-account {
  text-align: center;
}
</style>
