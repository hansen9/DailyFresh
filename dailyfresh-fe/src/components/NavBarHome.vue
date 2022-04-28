<template>
  <nav>
    <a class="d-flex align-items-center" href="/">
      <img src="../assets/DailyFresh2_white.png" alt="Daily Fresh Logo" />
    </a>
    <ul :class="{ side: active }" class="nav">
      <div class="li-container d-flex justify-content-between align-items-center">
        <li class="nav-item left-items d-flex align-items-center">
          <div class="search position-relative">
            <div class="searchbutton position-absolute">
              <i class="bi bi-search"></i>
            </div>
            <input type="search" placeholder="search items" />
          </div>
        </li>
        <li class="nav-item right-items d-flex">
          <div class="d-flex align-items-center justify-content-between buttons">
            <div class="cartbutton">
              <i class="bi bi-cart2"></i>
              <span class="cart"></span>
            </div>
            <div class="separator"></div>
            <div class="profilebutton">
              <i class="bi bi-person-circle"></i>
              <span class="profile"></span>
            </div>
          </div>
        </li>
      </div>
    </ul>
    <div class="button-container">
      <div class="expand-button" @click="isActive">
        <i :class="{ clicked: active }" class="bi bi-list"></i>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBarHome",
  data() {
    return {
      active: false,
    };
  },
  methods: {
    isActive: function () {
      this.active = !this.active;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  overflow-x: hidden;
}
nav {
  padding: 1vw 8%;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 17%;
  display: flex;
  justify-content: space-between;
}

a img {
  height: 80%;
  margin-top: -4%;
}

ul.nav {
  flex-wrap: nowrap;
  width: 73%;
}

div.li-container {
  width: 100%;
}

li.left-items {
  width: 70%;
}

div.search,
input {
  width: 100%;
}

li.right-items {
  width: 13%;
}

div.searchbutton,
div.cartbutton,
div.profilebutton {
  font-size: 2.9em;
  color: #0d8a22;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
}

div.searchbutton {
  font-size: 1.3em;
  left: 10px;
  top: 15%;
  cursor: pointer;
}

div.searchbutton:hover,
div.cartbutton:hover,
div.profilebutton:hover {
  color: #0d8a22;
}

div.cartbutton,
div.profilebutton {
  font-size: 2em;
  color: white;
}

div.separator {
  height: 75%;
  border-right: 2px solid white;
}

div.search input {
  padding: 10px 38px;
  border: none;
  border-radius: 30px;
  height: 90%;
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 0.17s ease-in-out;
}
div.search input:focus {
  background-color: rgb(255, 255, 255);
  outline: none;
}

div.button-container {
  top: 0;
  display: flex;
  height: 100%;
  position: absolute;
  display: none;
  right: 3%;
}

div.expand-button {
  color: white;
  font-size: 2.6em;
  display: none;
  margin-top: 2%;
}

div.buttons {
  width: 100%;
}

@media (max-width: 1200px) {
  nav {
    justify-content: center;
    height: 15%;
  }
  div.button-container {
    display: flex;
    align-items: center;
  }
  div.expand-button {
    display: flex;
  }

  div.expand-button i {
    transition: all 0.15s;
    cursor: pointer;
  }

  div.expand-button i:active,
  div.expand-button i.clicked:active {
    transform: scale(0.75);
  }

  div.expand-button i.clicked {
    transform: scale(0.9);
  }

  ul.nav {
    z-index: 0;
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(15px);
    transform: translateX(100%);
    transition: all 0.65s ease-in-out;
  }

  div.li-container {
    flex-direction: column;
    justify-content: start !important;
    position: absolute;
    top: 20%;
  }

  ul.nav.side {
    transform: translateX(0);
  }

  ul.nav li {
    width: 100%;
    justify-content: center;
  }

  li.nav-item {
    padding: 0 10%;
  }

  li.right-items {
    padding: 0;
    margin-top: 5%;
  }

  div.separator {
    display: none;
  }

  div.cartbutton,
  div.profilebutton {
    font-size: 1.8em;
    padding: 2% 10%;
    width: 100%;
  }

  div.cartbutton:hover,
  div.profilebutton:hover {
    background-color: rgba(38, 38, 38, 0.8);
  }

  div.cartbutton i,
  div.profilebutton i {
    margin-right: 15px;
  }

  div.buttons {
    align-items: flex-start !important;
    flex-direction: column;
  }

  .cart::before {
    content: "Cart";
  }
  .profile::before {
    content: "Profile";
  }
}

@media (max-width: 576px) {
  nav {
    height: 9%;
  }
  div.expand-button {
    font-size: 1.8em;
  }
  ul.nav {
    width: 70%;
  }
  div.cartbutton,
  div.profilebutton {
    font-size: 1.5em;
    margin: 2% 0;
  }
  li.right-items {
    margin-top: 2%;
  }
}
</style>
