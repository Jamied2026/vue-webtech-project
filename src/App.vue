<script setup>
import {RouterLink, RouterView} from "vue-router"
import "@/assets/main.css"
import footer from "@/components/footer.vue"
import TopNav from "@/components/topnav.vue"
</script>


<template>
    <TopNav />
    <RouterView />
    <footer />
  </template>
<style>


  </style>