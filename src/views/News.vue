<script setup>
import { ref, computed } from "vue"
import { RouterLink } from "vue-router"
import { useArticle } from "../assets/articles.js"

const { articles } = useArticle()

const searchQuery = ref('')
const selectedCategory = ref('')

const categories = computed(() =>
    [...new Set(articles.value.map(item => item.category))].sort()
)

const filteredArticles = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  return articles.value.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(query)
    const matchesCategory = selectedCategory.value === '' || item.category === selectedCategory.value
    return matchesSearch && matchesCategory
  })
})

function clearFilters() {
  searchQuery.value = ''
  selectedCategory.value = ''
}
</script>

<template>
  <section>
    <h1 tabindex="-1">Category:</h1>

    <label for="article-search">Search Articles</label>
    <input id="article-search" v-model="searchQuery" type="search" />

    <label for="article-category">Category</label>
    <select id="article-category" v-model="selectedCategory">
      <option value="">All categories</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>

    <button type="button" @click="clearFilters">Clear filters</button>

    <p role="status">{{ filteredArticles.length }} of {{ articles.length }} articles shown.</p>

    <p v-if="articles.length === 0">No articles yet.</p>
    <p v-else-if="filteredArticles.length === 0">No articles match. Change your search or clear the filters.</p>
  </section>

  <div v-if="filteredArticles.length > 0" class="newsGrid">
    <div v-for="article in filteredArticles" :key="article.id" class="newsMainBox">
      <img v-if="article.image" :src="article.image" :alt="article.alt || article.name" />
      <div class="sideBox">
        <h2>{{ article.name }}</h2>
        <p>{{ article.category }} · {{ article.minutes }} min read</p>
        <RouterLink :to="article.path || '/'">Read More:</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>