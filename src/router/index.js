import { createRouter, createWebHistory } from "vue-router"
//Views
import Backlog from "../views/Backlog.vue"
import News from "../views/News.vue"
import Contact from "../views/Contact.vue"
import Home from "../views/home.vue"

//Articles on home page
import ootReview from "../views/articles/ootReview.vue"
import gtaOpinion from "../views/articles/gta6.vue"
import pirate from "../views/articles/token.vue"
import gtaReview from "../views/articles/gta6Review.vue"



const routes = [
    {path:"/", component: Home},
    { path: "/news", component: News },
    { path: "/backlog", component: Backlog },
    { path: "/contact", component: Contact },
    //Articles for news page
    {path: "/ootReview", component: ootReview},
    {path: "/gtaOpinion", component: gtaOpinion},
    {path: "/pirate", component: pirate},
    {path: "/gtaReview",component: gtaReview}
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
