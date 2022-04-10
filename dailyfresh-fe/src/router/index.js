import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Checkout from '../views/Checkout.vue'
import Cart from '../views/CartView.vue'
import DetailProduct from '../views/DetailProduct.vue'

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
        path: '/Detail-Product',
        name: 'DetailProduct',
        component: DetailProduct,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    // linkActiveClass: 'active',
});
export default router