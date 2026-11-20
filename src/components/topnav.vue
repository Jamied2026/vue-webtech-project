<script setup lang="ts">
import {RouterLink, RouterView} from "vue-router"
</script>

<template>
  <div class="topBar">
    <h1><em>GameTalk</em></h1>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/contact">Contact Us</RouterLink>
    <RouterLink to="/backlog">Backlog</RouterLink>

  </div>
</template>

<style scoped>

</style>