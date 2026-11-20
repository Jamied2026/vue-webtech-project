import { createRouter, createWebHistory } from "vue-router"
//Views
import Backlog from "../views/Backlog.vue"
import News from "../views/News.vue"
import Contact from "../views/Contact.vue"
import Home from "../views/home.vue"

//Articles
import ootReview from "../views/articles/ootReview.vue"
import gtaOpinion from "../views/articles/gta6.vue"


const routes = [
    {path:"/", component: Home},
    { path: "/news", component: News },
    { path: "/backlog", component: Backlog },
    { path: "/contact", component: Contact },
    {path: "/ootReview", component: ootReview},
    {path: "/gtaOpinion", component: gtaOpinion}
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
