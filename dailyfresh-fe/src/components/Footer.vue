<template>
  <footer class="d-flex flex-column">
    <div class="contact-container d-flex justify-content-between align-items-center">
      <ul class="about-us d-flex">
        <li>about us</li>
        <li>home</li>
      </ul>
      <ul class="media d-flex">
        <li><i class="bi bi-facebook"></i></li>
        <li><i class="bi bi-twitter"></i></li>
        <li><i class="bi bi-whatsapp"></i></li>
        <li><i class="bi bi-instagram"></i></li>
      </ul>
    </div>
    <div class="copyright-container d-flex">
      <ul class="copyright d-flex w-100 justify-content-end">
        <li>terms of use</li>
        <li>privacy policy</li>
        <li>&copy;daily fresh 2022 all rights reserved.</li>
      </ul>
    </div>
    <div class="logo-container d-flex justify-content-center">
      <img src="../assets/DailyFresh2_white.png" alt="df logo" />
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style scoped>
footer {
  width: 100%;
  background-color: #198754;
  color: rgb(200, 200, 200);
  text-transform: uppercase;
  z-index: 10000;
}

footer div {
  margin: 0 10vh;
}

div.contact-container {
  padding: 2.5vh 0;
  margin-top: 5vh;
  border-bottom: solid 1px rgb(200, 200, 200);
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

ul.about-us li {
  margin-right: 20px;
}

ul.media li {
  font-size: 1.4em;
  margin: 0 10px;
}

div.copyright-container {
  font-size: 0.65em;
  padding: 10px 0;
}

ul.copyright li {
  margin-left: 20px;
}

ul.about-us li,
ul.media li,
ul.copyright li {
  cursor: pointer;
  transition: all 0.1s ease-in-out;
}

ul.about-us li:hover,
ul.media li:hover,
ul.copyright li:hover {
  color: white;
}

ul.copyright li:last-child {
  cursor: default;
}

ul.copyright li:last-child:hover {
  color: rgb(200, 200, 200);
}

div.logo-container img {
  height: 30vh;
  margin: 5vh 0;
}
</style>
