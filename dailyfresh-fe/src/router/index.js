import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import Checkout from "../views/Checkout.vue";
import Cart from "../views/CartView.vue";
import DetailProduct from "../views/DetailProduct.vue";
import Profile from "../views/Profile.vue";
import AddProduct from "@/views/AddProduct.vue";
import Seller from "../views/SellerMenu.vue";
import ListProduct from "../views/ListProduct.vue";
import EditProduct from "../views/EditProduct.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import RegisterSeller from "../views/RegisterSeller.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/detail_product",
    name: "Detail Product",
    component: DetailProduct,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/add_product",
    name: "Add Product",
    component: AddProduct,
  },
  {
    path: "/seller_menu",
    name: "Seller Menu",
    component: Seller,
  },
  {
    path: "/list_product",
    name: "List Product",
    component: ListProduct,
  },
  {
    path: "/edit_product",
    name: "Edit Product",
    component: EditProduct,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/register_seller",
    name: "RegisterSeller",
    component: RegisterSeller,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  // linkActiveClass: 'active',
});
export default router;
