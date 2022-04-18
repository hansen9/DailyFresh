<template>
  <!-- Navbar -->
  <!-- <nav class="navbar navbar-light py-2">
    <div class="container-md">
      <a href="index.html" class="navbar-brand"><img src="../assets/DailyFresh2_white.png" width="240" alt="Daily Fresh Logo" /></a>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav> -->
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid mx-5 py-1">
      <a class="navbar-brand" href="#"><img src="../assets/DailyFresh2_white.png" width="240" alt="Daily Fresh Logo" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-lg-0 position-relative">
          <li class="nav-item position-absolute">
            <button class="btn" type="submit">
              <i class="bi bi-search"></i>
            </button>
          </li>
          <li class="nav-item">
            <input class="form-control me-2" type="search" placeholder="search product" aria-label="Search" />
          </li>
          <li class="nav-item login">
            <button class="btn" type="submit">Login</button>
          </li>
          <li class="nav-item register">
            <button class="btn" type="submit">Sign Up</button>
          </li>
        </ul>
        <form class="d-flex"></form>
      </div>
    </div>
  </nav>
  <!-- Navbar End -->
</template>

<script>
export default {
  name: "NavBarHome",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
nav.navbar {
  position: relative;
  z-index: 999999;
}

ul li.nav-item button {
  padding: 0;
  border: 0;
  padding-left: 10px;
  padding-top: 5px;
  font-size: 1.2rem;
  color: #0d8a22;
}

ul li.nav-item input {
  border: 0;
  margin: 0;
  width: 45vw;
  border-radius: 18px;
  padding-left: 40px;
  background-color: rgba(255, 255, 255, 0.5);
}

div.collapse ul {
  margin-left: 6vw;
}

li.login {
  border-right: 1px solid rgb(255, 255, 255);
  margin-left: 5vw;
  padding-right: 1.5vw;
}

li.login button.btn {
  color: white;
}

li.register {
  margin-left: 1.5vw;
}

li.register button.btn {
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 5px;
  color: white;
  background-color: #0d8a22;
  border-radius: 50px;
  white-space: nowrap;
}
</style>
