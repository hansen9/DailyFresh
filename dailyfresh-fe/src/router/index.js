import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import Checkout from "../views/Checkout.vue";
import Cart from "../views/CartView.vue";
import DetailProduct from "../views/DetailProduct.vue";
import Profile from "../views/Profile.vue";
import AddProduct from "../views/AddProduct.vue";
import Seller from "../views/SellerMenu.vue";
import ListProduct from "../views/ListProduct.vue";
import EditProduct from "../views/EditProduct.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import HistorySeller from "../views/HistorySeller.vue"
import ProcessSales from "../views/ProcessSales.vue";
import AdminMenu from "../views/AdminMenu.vue"
import BlockUser from "../views/BlockUser.vue"
import RegisterSeller from "../views/RegisterSeller.vue";
import CustomerService from "../views/CustomerService.vue";
import ListComplaint from "../views/ListComplaint.vue"

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
    children: [
      {
        path: "/products/:category",
        name: "Products",
        component: Products,
      }
    ]
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
    path: "/Detail_Product/:id",
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
    path: "/edit_product/:id",
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
    path: "/history_seller",
    name: "History",
    component: HistorySeller,
  },
  {
    path: "/srocess_sales",
    name: "ProcessSales",
    component: ProcessSales,
  },
  {
    path: "/admin_menu",
    name: "AdminMenu",
    component: AdminMenu,
  },
  {
    path: "/block_user",
    name: "BlockUser",
    component: BlockUser,
  },
  {
    path: "/register_seller",
    name: "RegisterSeller",
    component: RegisterSeller,
  },
  {
    path: "/list_complaint",
    name: "ListComplaint",
    component: ListComplaint,
  },
  {
    path: "/customer_service",
    name: "CustomerService",
    component: CustomerService,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  // linkActiveClass: 'active',
});
export default router;
