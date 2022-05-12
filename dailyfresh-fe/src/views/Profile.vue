<template>
  <div id="content">
    <div id="sidebar" class="sidebar">
      <h5 @click="changeComponent(1)">Account</h5>
      <h5 @click="changeComponent(2)">My Orders</h5>
      <h5 @click="changeComponent(3)">General</h5>
      <h5 @click="logoutMethod">Logout</h5>
    </div>

    <div id="dashboard">
      <!-- Profile Info -->
      <div v-if="componentClicked == 1">
        <ProfileInfo />
      </div>

      <!-- My Orders -->
      <div v-if="componentClicked == 2">
        <MyOrders />
      </div>

      <div v-if="componentClicked == 3">
        <h1>Notifikasi</h1>
        <div id="general" class="general">
          <p>status pesanan<i class="bi bi-chevron-right"></i></p>
          <hr />
          <p>promo<i class="bi bi-chevron-right"></i></p>
          <hr />
          <p>info belanja<i class="bi bi-chevron-right"></i></p>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyOrders from "../components/MyOrders.vue";
import ProfileInfo from "../components/ProfileInfo.vue";
import axios from "axios";

export default {
  name: "ProfilePage",
  components: {
    MyOrders,
    ProfileInfo,
  },
  data() {
    return {
      componentClicked: 1,
    };
  },
  methods: {
    changeComponent(index) {
      this.componentClicked = index;
    },
    logoutMethod() {
      axios
        .get("http://localhost:8080/logout", { withCredentials: true })
        .then((res) => {
          console.log(res);
          localStorage.clear();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
#content {
  margin: 20px;
  display: grid;
  grid-template-columns: 20% 80%;
}
.bi {
  /* font-size: 3.5rem; */
  cursor: pointer;
}
.bi-chevron-right {
  float: right;
  font-size: 1rem;
}
label {
  cursor: pointer;
}
/* button{
    border: none;
  } */
.center {
  text-align: center;
}
div.general,
div.sidebar h5 {
  cursor: pointer;
}
</style>
