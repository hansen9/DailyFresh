<template>
  <div class="background d-flex justify-content-center align-items-center">
    <div class="login-container d-flex flex-column justify-content-between">
      <router-link to="/">
        <img src="../assets/DailyFresh2.png" alt="df_logo" class="img-fluid" />
      </router-link>
      <form v-on:submit.prevent="loginForm" class="d-flex flex-column justify-content-between">
        <label for="email">Email</label>
        <input v-model="user.email" type="email" id="email" placeholder="dailyfresh@email.com" />
        <label for="password">Password</label>
        <input v-model="user.password" type="password" />
        <p class="forgot-pass"><router-link to="/">Forgot your password?</router-link></p>
        <button class="align-self-center">Login</button>
        <p class="not-registered">Not Registered? <router-link to="/Register"> Create an Account </router-link></p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    loginForm() {
      axios
        .get("http://localhost:8080/login", this.user)
        .then((res) => {
          console.log(res);
          location.replace("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {},
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
  height: 70%;
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

p.forgot-pass,
p.not-registered {
  font-size: 80%;
}

p.forgot-pass a,
p.not-registered a {
  text-decoration: none;
  color: #198754;
}

p.forgot-pass a:hover,
p.not-registered a:hover {
  text-decoration: underline;
}

p.forgot-pass {
  text-align: right;
}

form button {
  width: 30%;
  border-radius: 15px;
  padding: 5px 0;
  margin: 8px 0;
  border: none;
  background-color: #198754;
  color: white;
  transition: all 0.1s ease-in-out;
}

form button:hover {
  background-color: #136941;
}

p.not-registered {
  text-align: center;
}
</style>
