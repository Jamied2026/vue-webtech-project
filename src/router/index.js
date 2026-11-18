import { createRouter, createWebHistory } from "vue-router"
import Backlog from "../views/Backlog.vue"
import News from "../views/News.vue"
import Contact from "../views/Contact.vue"

const routes = [
    { path: "/", component: News },
    { path: "/backlog", component: Backlog },
    { path: "/contact", component: Contact }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router