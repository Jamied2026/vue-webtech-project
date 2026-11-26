import { computed, readonly, ref } from "vue";
import ootImg from "./images/ootReview.jpg";
import gtaImg from "./images/gtaImg.png";
import pirateImg from "./images/article1.png";
import gta6 from "./images/gta6.png";
import personaImg from "./images/personaImg.jpg"
import eldenRingimg from "./images/eldenRingimg.png"

export const initialArticles = [
    {
        id: 1,
        name: 'Ocarina of time review',
        minutes: 5,
        category: 'Review',
        path: '/ootReview',
        image: ootImg,
        alt: 'Deku Tree',
        completed: false
    },
    {
        id: 2,
        name: 'GTA 6 Possible Returnee?',
        minutes: 2,
        category: 'News',
        path: '/gtaOpinion',
        image: gtaImg,
        alt: 'Vice City',
        completed: false
    },
    {
        id: 3,
        name: 'Pirate Token odds Revealed',
        minutes: 1,
        category: 'Opinions',
        path: '/pirate',
        image: pirateImg,
        alt: 'Pirate Token',
        completed: false
    },
    {
        id: 4,
        name: 'Gta 6 Review',
        minutes: 10,
        category: 'Review',
        path: '/gtaReview',
        image: gta6,
        alt: "Gta6",
        completed: false
    },
    {
        id: 5,
        name: 'Persona 5 Royal Review',
        minutes: 10,
        category: 'Review',
        path: '/Royal',
        image: personaImg,
        alt: 'persona',
        completed: false
    },
    {
        id: 6,
        name: 'Elden ring Movie update',
        minutes: 3,
        category: 'News',
        path: '/elden',
        image: eldenRingimg,
        alt: 'Erdtree',
        completed: false
    },

    ]

const articles = ref(initialArticles.map(item => ({ ...item })))
let nextId = Math.max(0, ...articles.value.map(item => item.id)) + 1

const completedCount = computed(() =>
    articles.value.filter(item => item.completed).length
)

const totalMinutes = computed(() =>
    articles.value.reduce((total, item) => total + item.minutes, 0)
)

const progressPercent = computed(() => {
    if (articles.value.length === 0) return 0
    return Math.round((completedCount.value / articles.value.length) * 100)
})

function saveArticle(id, rawName, rawMinutes, rawCategory) {
    const name = rawName.trim()
    const category = String(rawCategory ?? '').trim()
    if (!category) return 'Choose a category.'

    const minutes = Number(rawMinutes)
    if (!name) return 'Please enter an article name.'
    if (name.length > 150) return 'Use no more than 150 characters.'
    if (!Number.isInteger(minutes) || minutes < 1 || minutes > 180) {
        return 'Enter a whole number from 1 to 180 minutes.'
    }

    if (id === null) {
        articles.value.push({
            id: nextId++,
            name,
            minutes,
            category,
            path: '/',
            image: pirateImg,
            alt: name,
            completed: false
        })
    } else {
        const existingArticle = articles.value.find(item => item.id === id)
        if (!existingArticle) return 'This article is no longer available.'
        existingArticle.name = name
        existingArticle.minutes = minutes
        existingArticle.category = category
    }
    return ''
}

function removeArticle(id) {
    articles.value = articles.value.filter(item => item.id !== id)
}

function toggleArticle(id) {
    const foundArticle = articles.value.find(item => item.id === id)
    if (foundArticle) {
        foundArticle.completed = !foundArticle.completed
    }
}

function clearArticle() {
    articles.value = articles.value.filter(item => !item.completed)
}

const articleStore = {
    articles: readonly(articles),
    completedCount,
    totalMinutes,
    progressPercent,
    saveArticle,
    removeArticle,
    toggleArticle,
    clearArticle
}

export function useArticle() {
    return articleStore
}