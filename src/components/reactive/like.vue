<script setup lang="ts">
import {ref} from "vue"
const likes=ref(0)
</script>

<template>
  <button type="button" @click="likes++">Like this page</button>
  <p aria-live="polite">Likes: {{ likes }}</p>
</template>

<style scoped>

</style>