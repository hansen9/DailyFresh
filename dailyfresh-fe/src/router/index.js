import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import Checkout from "../views/Checkout.vue";
import Cart from "../views/CartView.vue";
import DetailProduct from "../views/DetailProduct.vue";
import Profile from "../views/Profile.vue";
import AddProduct from "@/views/AddProduct.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Products",
    name: "Products",
    component: Products,
  },
  {
    path: "/Checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/Cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/Detail_Product",
    name: "DetailProduct",
    component: DetailProduct,
  },
  {
    path: "/Profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/Add_Product",
    name: "Add Product",
    component: AddProduct,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  // linkActiveClass: 'active',
});
export default router;
