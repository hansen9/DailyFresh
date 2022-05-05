import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Checkout from '../views/Checkout.vue'
import Cart from '../views/CartView.vue'
import DetailProduct from '../views/DetailProduct.vue'
import Profile from '../views/Profile.vue'
import AddProduct from '@/views/AddProduct.vue'
import Seller from '../views/SellerMenu.vue'
import ListProduct from '../views/ListProduct.vue'
import EditProduct from '../views/EditProduct.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Products',
        name: 'Products',
        component: Products,
    },
    {
        path: '/Checkout',
        name: 'Checkout',
        component: Checkout,
    },
    {
        path: '/Cart',
        name: 'Cart',
        component: Cart,
    },
    {
        path: '/Detail_Product',
        name: 'Detail Product',
        component: DetailProduct,
    },
    {
        path: '/Profile',
        name: 'Profile',
        component: Profile,
    },
    {
        path: '/Add_Product',
        name: 'Add Product',
        component: AddProduct,
    },
    {
        path: '/Seller_Menu',
        name: 'Seller Menu',
        component: Seller,
    },
    {
        path: '/List_Product',
        name: 'List Product',
        component: ListProduct,
    },
    {
        path: '/Edit_product',
        name: 'Edit Product',
        component: EditProduct,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    // linkActiveClass: 'active',
});
export default router