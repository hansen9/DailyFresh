<template>
  <!-- Hero -->
  <section class="hero d-flex align-items-center justify-content-center">
    <div class="tagline-container d-flex">
      <div class="tagline">Your <span>Fresh</span></div>
      <div class="tagline"><span>Daily</span> Needs</div>
    </div>
  </section>
  <!-- Hero End -->

  <!-- Carousel -->
  <section class="carousel d-flex flex-column">
    <h1>Top Picks</h1>
    <div id="carouselIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="item1-desc d-flex flex-column align-items-center justify-content-evenly position-relative">
            <span>Mr. Green Apple</span>
            <span>Rp50.000,-</span>
            <div class="disc-label d-flex justify-content-center align-items-center position-absolute">-50%</div>
          </div>
          <div class="item1"></div>
        </div>
        <div class="carousel-item">
          <div class="item2-desc d-flex flex-column align-items-center justify-content-evenly position-relative">
            <span class="item2-desc-title">Buah Pohon Kebenaran</span>
            <span>Rp50.000,-</span>
            <div class="disc-label d-flex justify-content-center align-items-center position-absolute">-50%</div>
          </div>
          <div class="item2"></div>
        </div>
        <div class="carousel-item">
          <div class="item3-desc d-flex flex-column align-items-center justify-content-evenly position-relative">
            <span>All <span class="text-decoration-line"> Might</span> Meat</span>
            <span>Rp50.000,-</span>
            <div class="disc-label d-flex justify-content-center align-items-center position-absolute">-50%</div>
          </div>
          <div class="item3"></div>
        </div>
      </div>
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
    </div>
  </section>
  <!-- Carousel End -->

  <!-- Categories -->
  <section class="categories">
    <div class="container">
      <div class="row">
        <h1>Categories</h1>
      </div>
      <div class="row category-items justify-content-center">
        <div class="col-lg-3 col-5">
          <router-link to="/Products">
            <div class="category d-flex flex-column justify-content-end align-items-center">
              <img src="../assets/Vegetables_Thumbnail.png" />
              <h2 class="mt-4">Veggies</h2>
            </div>
          </router-link>
        </div>
        <div class="col-lg-3 col-5">
          <router-link to="/Products">
            <div class="category d-flex flex-column justify-content-end align-items-center">
              <img src="../assets/Fruits_Thumbnail.png" />
              <h2 class="mt-4">Fruits</h2>
            </div>
          </router-link>
        </div>
        <div class="col-lg-3 col-5">
          <router-link to="/Products">
            <div class="category d-flex flex-column justify-content-end align-items-center">
              <img src="../assets/Meat_Thumbnail.png" />
              <h2 class="mt-4">Meat</h2>
            </div>
          </router-link>
        </div>
        <div class="col-lg-3 col-5">
          <router-link to="/Products">
            <div class="category d-flex flex-column justify-content-end align-items-center">
              <img src="../assets/Spices_Thumbnail.png" />
              <h2 class="mt-4">Spices</h2>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
  <!-- Categories End -->

  <!-- List Store -->
  <section class="list-store position-relative d-flex flex-column justify-content-center align-items-center">
    <img class="tomato position-absolute" src="../assets/tomato.png" alt="tomato" />
    <img class="broccoli position-absolute" src="../assets/broccoli.png" alt="broccoli" />
    <img class="carrot position-absolute" src="../assets/carrot.png" alt="carrot" />
    <h1>Are you a <span class="font-color-green">seller?</span></h1>
    <h4>List your own store with <b>Daily Fresh!</b></h4>
    <img class="df-logo" src="../assets/DailyFreshLogo.png" alt="DailyFresh Logo" />
    <router-link to="/Register_Seller">
      <div class="join-button d-flex justify-content-center align-items-center"><b>Join Now</b></div>
    </router-link>
  </section>
  <!-- List Store End -->
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Hero Section */
section.hero {
  width: 100%;
  height: 100vh;
  background-image: url(../assets/edamame.jpg);
  background-size: cover;
}

div.tagline-container {
  flex-direction: column;
  font-size: 10vw;
}

div.tagline {
  color: #ffffff;
  text-align: center;
  line-height: 120%;
  font-weight: 400;
  text-shadow: 0 0 20px rgb(0, 0, 0);
}

div.tagline span {
  color: #ff8400;
  font-family: "Kaushan Script", cursive;
}

/* Carousel Section */
section.carousel {
  padding: 3% 10% 0;
}

section.carousel h1 {
  padding: 2% 0 1%;
  text-align: center;
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: flex;
}

.item1-desc,
.item2-desc,
.item3-desc {
  background-color: #198754;
  width: 30%;
  padding: 5% 0;
  color: white;
  font-size: 2.5vw;
  text-align: center;
}

.text-decoration-line {
  text-decoration-line: line-through;
  text-decoration-color: rgb(179, 0, 0);
  text-decoration-thickness: 5px;
}

div.disc-label {
  width: 70px;
  height: 70px;
  font-size: 23px;
  border-radius: 50%;
  right: 0;
  background-color: rgb(211, 15, 15);
  transform: translate(50%, 50%) rotate(-25deg);
  z-index: 1;
}

.item1,
.item2,
.item3 {
  height: 70vh;
  width: 70%;
  background-image: url(../assets/apel-zeus_converted.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.item2 {
  background-image: url(../assets/perbuahan_converted.jpg);
}

.item3 {
  background-image: url(../assets/perdagingan_converted.jpg);
}

div.carousel-indicators button {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 0 10px;
  border: none;
  box-shadow: 0 0 5px black;
}

div.carousel-indicators button.active {
  background-color: #198754;
}

/* Categories section*/
section.categories {
  text-align: center;
  padding: 3% 5%;
  background-color: #ffffff;
}

div.category {
  border-radius: 5%;
  border: solid 1px rgb(199, 199, 199);
  padding: 10% 0;
  height: 100%;
  transform: scale(90%);
  transition: all 0.1s ease-in-out;
  cursor: pointer;
}

div a {
  color: #198754;
  text-decoration: none;
}

div.category:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.627);
  transform: scale(100%);
}

div.row h1 {
  padding: 2% 0 1%;
}

div.category img {
  width: 90%;
}

/* List Store */
section.list-store {
  margin-top: 10vh;
  min-height: 70vh;
  background-image: url(../assets/leaves.png);
  text-align: center;
  color: rgb(4, 12, 27);
}

.tomato,
.broccoli,
.carrot {
  width: 20%;
}

.tomato {
  left: 0;
  bottom: 0;
  transform: rotate(20deg) translate(-15%, 25%);
}

.broccoli {
  right: 0;
  bottom: 0;
  transform: translate(30%, 20%);
}

.carrot {
  right: 0;
  top: 0;
  transform: rotate(-25deg) translate(35%, -40%);
}

.font-color-green {
  color: #198754;
}

.list-store a {
  width: 8%;
}

div.join-button {
  margin-top: 3%;
  height: 8vh;
  border: 1px solid #198754;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
}

div.join-button:hover {
  background-color: #198754;
  color: white;
}

.df-logo {
  width: 10%;
}

@media (max-width: 1200px) {
  /* Hero */
  section.carousel {
    padding: 0;
  }
}

@media (max-width: 768px) {
  /* Carousel */
  .carousel-item.active,
  .carousel-item-next,
  .carousel-item-prev {
    flex-direction: column;
  }

  .item1-desc,
  .item2-desc,
  .item3-desc {
    width: 100%;
    height: 20%;
    position: absolute !important;
    background-color: rgba(0, 0, 0, 0.896);
  }

  div.disc-label {
    right: 10%;
  }

  .item1,
  .item2,
  .item3 {
    height: 50vh;
    width: 100%;
  }
}

@media (max-width: 576px) {
  /* Hero */
  section.hero {
    height: 50vh;
  }
}
</style>
