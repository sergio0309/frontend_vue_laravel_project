import { createWebHistory, createRouter } from 'vue-router';
import Inicio from './../views/web/Inicio.vue'
import Nosotros from './../views/web/Nosotros.vue'
import Servicios from './../views/web/Servicios.vue'
import Blog from './../views/web/Blog.vue'
import Login from './../views/auth/Login.vue'

const routes = [
    { path: '/', component: Inicio },
    { path: '/nosotros', component: Nosotros },
    { path: '/servicios', component: Servicios },
    { path: '/blog', component: Blog },
    { path: '/auth/login', component: Login }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;