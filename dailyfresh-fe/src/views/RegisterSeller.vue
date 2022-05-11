<template>
  <div class="list-store-container d-flex justify-content-center">
    <div class="list-store-form d-flex flex-column">
      <h1 class="m-0 w-100"><i class="bi bi-shop"></i> List Store</h1>
      <form class="d-flex flex-column justify-content-between px-4 py-3" action="#">
        <label for="name">Name</label>
        <input type="text" id="Name" placeholder="Levin Kun" />
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="dailyfresh@email.com" />
        <div class="password-section d-flex flex-row">
          <div class="password d-flex flex-column me-5">
            <label for="password">Password</label>
            <input type="password" />
          </div>
          <div class="confirm-password d-flex flex-column">
            <label for="password">Confirm Password</label>
            <input type="password" />
          </div>
        </div>
        <label for="store-name">Store Name</label>
        <input type="store-name" />
        <label for="store-address">Store Address</label>
        <input type="store-address" />

        <button class="align-self-end my-3 register" type="button">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterSeller",
};
</script>

<style scoped>
div.list-store-form {
  margin: 5vh;
  width: 70%;
  /* border: solid 1px black; */
}

.list-store-form h1 {
  font-size: 3em;
  padding-bottom: 5px;
  border-bottom: solid 3px #198754;
}

form label,
form input,
form div {
  margin: 4px 0;
}

form input,
button.register {
  padding: 5px 10px;
}

button.register {
  cursor: pointer;
  border: none;
  background-color: #198754;
  transition: all 0.1s ease-in-out;
  border-radius: 5px;
  color: white;
}

button.register:hover {
  background-color: #136941;
}
</style>
