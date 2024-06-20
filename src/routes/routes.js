import {createRouter, createWebHashHistory} from "vue-router"
import HomePage from '../components/HomePage.vue'
import HabitacionesPage from '../components/HabitacionesPage.vue'
import ContactoPage from '../components/ContactoPage.vue'
import DeportesExtremosPage from '../components/DeportesExtremosPage.vue'
import ServiciosPage from '../components/ServiciosPage.vue'


const routes = [
    { path: '/', component: HomePage },
    { path: '/habitaciones', component: HabitacionesPage },
    { path: '/servicios', component: ServiciosPage },
    { path: '/deportes-extremos', component: DeportesExtremosPage },
    { path: '/contacto', component: ContactoPage },

  ]

export const router = createRouter({
history: createWebHashHistory(),
routes
})

export default router