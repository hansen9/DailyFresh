<template>
  <div class="background d-flex justify-content-center align-items-center">
    <div class="login-container d-flex flex-column">
      <router-link to="/">
        <img src="../assets/DailyFresh2.png" alt="df_logo" class="img-fluid" />
      </router-link>
      <form class="d-flex flex-column justify-content-between" action="#">
        <label for="name">Name</label>
        <input type="text" id="Name" placeholder="Levin Kun" />
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="dailyfresh@email.com" />
        <label for="password">Password</label>
        <input type="password" />
        <label for="password">Confirm Password</label>
        <input type="password" />
        <button class="align-self-center" type="button">Register</button>
        <p class="have-account">Have an Account? <router-link to="/Login"> Sign In </router-link></p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
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
