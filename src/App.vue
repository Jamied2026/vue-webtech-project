<script setup>
import {RouterLink, RouterView} from "vue-router"
import "@/assets/css/main.css"
import footer from "@/components/navBars/footer.vue"
import TopNav from "@/components/navBars/topnav.vue"
import side from "@/components/side.vue"
</script>
<template>
    <TopNav/>
    <RouterView/>
    <footer/>
  </template>
