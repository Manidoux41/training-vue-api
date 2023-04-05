import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import ProductPage from "../views/ProductPage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/product/:id",
        name: "Product",
        component: ProductPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;