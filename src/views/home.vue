<script setup lang="ts">
import {RouterLink, RouterView} from "vue-router"
import "@/assets/css/main.css"
import footer from "@/components/navBars/footer.vue"
import topnav from "@/components/navBars/topnav.vue"
</script>

<template>

  <h1>Featured: </h1>

  <div class="grid">
    <div class="mainBox">
      <img src ="../assets/images/ootReview.jpg" alt="dekutree">
      <div class="sideBox">
        <h2>Ocarina of time review</h2>
        <p>How does the remake of the best game of all time play?</p>
        <RouterLink to="/ootReview">Read More:</RouterLink>
      </div>
    </div>

    <div class="side">
      <h2>View My Backlog</h2>
 <img src="../assets/images/next.png" alt="next">
<!-- <RouterLink to="/backlog"><img src="../assets/images/next.png" alt="next"></RouterLink>-->
    </div>

    <div class="mainBox">
      <img src ="../assets/images/gtaImg.png" alt="viceCity">
      <div class="sideBox">
        <h2> GTA 6 Fans Think a Beloved Legacy Character from a Previous Game Is Hiding in the Latest Trailer</h2>
        <p>Return of the king?</p>
        <RouterLink to ="/gtaOpinion">Read More:</RouterLink>
      </div>
    </div>

    <div class="side">
      <h2>View My Comments</h2>
      <img src="../assets/images/chat.png" alt="comment Bubble">
    </div>
  </div>


</template>

<style scoped>

</style>