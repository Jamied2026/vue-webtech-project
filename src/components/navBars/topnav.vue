<script setup lang="ts">
import {RouterLink, RouterView} from "vue-router"
</script>

<template>
  <div class="topBar">
    <h1><em>GameTalk</em></h1>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/contact">Contact Us</RouterLink>
    <RouterLink to="/backlog">Backlog</RouterLink>
    <RouterLink to="/news">News</RouterLink>
<Router-Link to="/help">Help</Router-Link>
  </div>
</template>

<style scoped>

</style>