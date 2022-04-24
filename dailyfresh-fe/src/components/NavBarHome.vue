<template>
  <nav class="navbar navbar-expand-xl navbar-dark">
    <a class="navbar-brand d-flex" href="/"><img src="../assets/DailyFresh2_white.png" width="240" alt="Daily Fresh Logo" /></a>
    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav position-relative align-items-center">
        <li class="nav-item position-absolute">
          <button class="btn" type="submit">
            <i class="bi bi-search"></i>
          </button>
        </li>
        <li class="nav-item mx-5">
          <input class="form-control" type="search" placeholder="search product" aria-label="Search" />
        </li>
        <li class="nav-item login pe-2">
          <button class="btn" type="submit">Login</button>
        </li>
        <li class="nav-item register ms-3">
          <button class="btn" type="submit">Sign Up</button>
        </li>
      </ul>
      <!-- <form class="d-flex"></form> -->
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</template>

<script>
export default {
  name: "NavBarHome",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@media (max-width: 1200px) {
  nav.navbar {
  }
}
span.navbar-toggler-icon {
  /* display: block; */
}

a.navbar-brand {
  margin: 0;
}
nav.navbar {
  padding: 0 5vw;
  background-color: #000000;
  z-index: 1;
}

ul li.nav-item button {
  font-size: 1.2rem;
  color: #0d8a22;
}

ul li.nav-item.position-absolute {
  left: 50px;
}

ul li.nav-item input {
  padding-left: 42px;
  border: none;
  width: 45vw;
  border-radius: 18px;
  background-color: rgba(255, 255, 255, 0.5);
}

div.collapse ul {
}

li.login {
  border-right: 1px solid rgb(255, 255, 255);
}

li.login button.btn {
  color: white;
}

li.register {
}

li.register button.btn {
  color: white;
  background-color: #0d8a22;
  border-radius: 50px;
  white-space: nowrap;
}
</style>
