<script setup lang="ts">
import {RouterLink, RouterView} from "vue-router"
import "@/assets/main.css"
import footer from "@/components/footer.vue"
import topnav from "@/components/topnav.vue"
</script>

<template>

  <h1>Featured: </h1>
  <p>Sort By: </p>

  <div class="grid">
    <div class="mainBox">
      <img src ="../assets/ootReview.jpg" alt="dekutree">
      <div class="sideBox">
        <h3>Ocarina of time review</h3>
        <p>How does the remake of the best game of all time play?</p>
        <RouterLink to="/ootReview">Read More:</RouterLink>
      </div>
    </div>

    <div class="side">
      <h2>View My Backlog</h2>
      <img src="../assets/next.png" alt="next">
    </div>

    <div class="mainBox">
      <img src ="../assets/gtaImg.png" alt="viceCity">
      <div class="sideBox">
        <h3> GTA 6 Fans Think a Beloved Legacy Character from a Previous Game Is Hiding in the Latest Trailer</h3>
        <p>Return of the king?</p>
        <RouterLink to ="/gtaOpinion">Read More:</RouterLink>
      </div>
    </div>
    <div class="side">
      <h2>View My Reviews</h2>
      <img src="../assets/chat.png" alt="comment Bubble">
    </div>
  </div>


</template>

<style scoped>

</style>