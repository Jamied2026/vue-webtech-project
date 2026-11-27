import { createRouter, createWebHistory } from "vue-router"
//Views
import Backlog from "../views/Backlog.vue"
import News from "../views/News.vue"
import Contact from "../views/Contact.vue"
import Home from "../views/home.vue"

//Articles
import ootReview from "../views/articles/ootReview.vue"
import gtaOpinion from "../views/articles/gta6.vue"
import pirate from "../views/articles/token.vue"
import gtaReview from "../views/articles/gta6Review.vue"
import royal from "../views/articles/royal.vue"
import elden from "../views/articles/elden.vue"



const routes = [
    //top bar
    {path:"/", component: Home},
    { path: "/news", component: News },
    { path: "/contact", component: Contact },

    //Articles for news page
    {path: "/ootReview", component: ootReview},
    {path: "/gtaOpinion", component: gtaOpinion},
    {path: "/pirate", component: pirate},
    {path: "/gtaReview",component: gtaReview},
    {path: "/royal", component: royal},
    {path: "/elden",component: elden}
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
