import { computed, readonly, ref } from "vue";

export const initialArticles = [
    { id: 1, name: 'Ocarina of time Review', minutes: 5, category: 'Review', path: '/ootReview', completed: false },
    {
        id: 2,
        name: 'GTA 6 Fans Think a Beloved Legacy Character from a Previous Game Is Hiding in the Latest Trailer',
        minutes: 2,
        category: 'News',
        path: '/gtaOpinion',
        completed: false
    },
    { id: 3, name: 'Pirate Token odds Revealed', minutes: 5, category: 'Opinions', path: '/pirate', completed: false }
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
        articles.value.push({ id: nextId++, name, minutes, category, path: '/', completed: false })
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