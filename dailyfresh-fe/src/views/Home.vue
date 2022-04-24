<template>
  <NavBarHome />
  <!-- Hero -->
  <section class="jumbotron position-relative">
    <img src="../assets/edamame.jpg" />
    <div class="center position-absolute top-50 start-50 translate-middle">
      <h1>
        Your <span>Fresh<br />Daily</span> Needs
      </h1>
    </div>
  </section>
  <!-- Hero End -->

  <!-- Carousel -->
  <section class="carousel">
    <div class="container">
      <div id="carouselI" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselI" data-bs-slide-to="0" class="active mx-2" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselI" data-bs-slide-to="1" aria-label="Slide 2" class="mx-2"></button>
          <button type="button" data-bs-target="#carouselI" data-bs-slide-to="2" aria-label="Slide 3" class="mx-2"></button>
        </div>
        <div class="carousel-inner position-relative">
          <div class="carousel-item active">
            <div class="carousel-desc position-relative">
              <div class="carousel-text position-absolute top-50 start-50 translate-middle text-center">
                <span class="desc-title"><h1>LIMITED SALE!!</h1></span>
                <span class="desc-item"><h1>Apel Zeus</h1></span>
                <span class="desc-price-before"><h1>Rp80.000,-</h1></span>
                <span class="desc-price-after"><h1>Rp40.000,-</h1></span>
              </div>
              <div class="disc-label position-absolute top-50 end-0 text-center">
                <h1>-50%</h1>
              </div>
            </div>
            <div class="right-item position-absolute top-0 end-0">
              <img src="../assets/apel-zeus_converted.jpg" class="d-block" alt="Apel Zeus" />
            </div>
          </div>
          <div class="carousel-item">
            <div class="carousel-desc position-relative">
              <div class="carousel-text position-absolute top-50 start-50 translate-middle text-center">
                <span class="desc-title"><h1>LIMITED SALE!!</h1></span>
                <span class="desc-item"><h1>All Meat Plus Ultra</h1></span>
                <span class="desc-price-before"><h1>Rp80.000,-</h1></span>
                <span class="desc-price-after"><h1>Rp40.000,-</h1></span>
              </div>
              <div class="disc-label position-absolute top-50 end-0 text-center">
                <h1>-50%</h1>
              </div>
            </div>
            <div class="right-item position-absolute top-0 end-0">
              <img src="../assets/perdagingan_converted.jpg" class="d-block" alt="Perdagingan" />
            </div>
          </div>
          <div class="carousel-item">
            <div class="carousel-desc position-relative">
              <div class="carousel-text position-absolute top-50 start-50 translate-middle text-center">
                <span class="desc-title"><h1>LIMITED SALE!!</h1></span>
                <span class="desc-item"><h1>Buah-Buahan</h1></span>
                <span class="desc-price-before"><h1>Rp80.000,-</h1></span>
                <span class="desc-price-after"><h1>Rp40.000,-</h1></span>
              </div>
              <div class="disc-label position-absolute top-50 end-0 text-center">
                <h1>-50%</h1>
              </div>
            </div>
            <div class="right-item position-absolute top-0 end-0">
              <img src="../assets/perbuahan_converted.jpg" class="d-block" alt="Perbuahan" />
            </div>
          </div>
        </div>
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
      <div class="row">
        <div class="col-lg-3">
          <div class="category">
            <div class="category-image">
              <img src="../assets/Vegetables_Thumbnail.png" width="300" />
            </div>
            <h1>Vegetables</h1>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="category">
            <div class="category-image">
              <img src="../assets/Fruits_Thumbnail.png" width="300" />
            </div>
            <h1>Fruits</h1>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="category">
            <div class="category-image">
              <img src="../assets/Meat_Thumbnail.png" width="300" />
            </div>
            <h1>Meat</h1>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="category">
            <div class="category-image">
              <img src="../assets/Spices_Thumbnail.png" width="300" />
            </div>
            <h1>Spices</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Categories End -->
</template>

<script>
import NavBarHome from "../components/NavBarHome.vue";

export default {
  name: "HomePage",
  components: {
    NavBarHome,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Hero Section */
section.jumbotron {
  /* margin-top: -115px; */
}
section.jumbotron img {
  width: 100%;
}

section.jumbotron .center h1 {
  white-space: nowrap;
  font-weight: 100;
  color: white;
  font-size: 10vw;
  text-shadow: 0 0 15px black;
}

section.jumbotron .center span {
  font-weight: 500;
}

/* Carousel Section */
section.carousel {
  background-color: white;
}
div#carouselI.carousel.slide div.carousel-indicators button {
  width: 15px;
  height: 15px;
  border-radius: 50%;
}

div#carouselI.carousel.slide div.carousel-indicators button.active {
  background-color: #0d8a22;
}

div.carousel-desc {
  height: 500px;
  width: 500px;
  background-color: #0d8a22;
}

div.carousel-text {
  color: white;
  text-shadow: 0 0 20px black;
  letter-spacing: 0.1rem;
}

span.desc-title h1 {
  font-size: 3.8rem;
  white-space: nowrap;
  font-weight: 700;
}

span.desc-item h1 {
  font-size: 3rem;
  font-weight: 100;
  margin-top: 5%;
  margin-bottom: 10%;
}

span.desc-price-before h1 {
  font-size: 1.5rem;
  white-space: nowrap;
  font-weight: 100;
  text-decoration: line-through;
  text-decoration-color: red;
  text-decoration-thickness: 0.1rem;
}

span.desc-price-after h1 {
  font-size: 5rem;
  white-space: nowrap;
  font-weight: 500;
}

div.disc-label {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgb(211, 15, 15);
  margin-right: -2.5vw;
  transform: rotate(-25deg);
  z-index: 1;
}

div.disc-label h1 {
  vertical-align: middle;
  margin-top: 25%;
  color: white;
}

/* Categories section*/
div.category {
  border-radius: 2%;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.627);
}

section.categories {
  margin-top: 50px;
  text-align: center;
}

div.row h1 {
  font-size: 3rem;
  margin-bottom: 50px;
}

div.category-image {
  padding-top: 100px;
  height: 300px;
}

div.category h1 {
  margin-top: 25px;
  padding-bottom: 50px;
}
</style>
