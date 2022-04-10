import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Checkout from '../views/Checkout.vue'
import Profile from '../views/Profile.vue'

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
        path: '/Profile',
        name: 'Profile',
        component: Profile,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    // linkActiveClass: 'active',
});
export default router