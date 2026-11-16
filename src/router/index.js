import{createRouter, createMemoryHistory} from "vue-router"
import Backlog from"../views/Backlog.vue"
import News from "../views/News.vue"
import Contact from "../views/Contact.vue"

const routes=[

    {path:"/",component: News},
    {path:"/backlog",component: Backlog},
    {path: "/contact", component: Contact}

]
export const router = createRouter({
    history: createMemoryHistory(),
    routes,

})