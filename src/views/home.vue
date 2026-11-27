<script setup lang="ts">
import {RouterLink, RouterView} from "vue-router"
import "@/assets/css/main.css"
import footer from "@/components/navBars/footer.vue"
import topnav from "@/components/navBars/topnav.vue"
</script>

<template>

  <h1>Welcome! </h1>
  <h2>This weeks featured articles:</h2>

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
      <h2>Welcome!</h2>
      <h3>On this site you will find</h3>
      <ul>
        <li>Gaming Reviews</li>
        <li>Gaming Opinions</li>
        <li>important Updates</li>
      </ul>
      <br>
      <h3>We also have a form where you can suggest any features you wish to have added or if you just have feedback on how we can improve</h3>
      <br>
      <h3>Feel free to add a comment and interatct with the community!</h3>
    </div>



    <div class="mainBox">
      <img src ="../assets/images/gtaImg.png" alt="viceCity">
      <div class="sideBox">
        <h2> GTA 6 Fans Think a Beloved Legacy Character from a Previous Game Is Hiding in the Latest Trailer</h2>
        <p>Return of the king?</p>
        <RouterLink to ="/gtaOpinion">Read More:</RouterLink>
      </div>
    </div>

  </div>

</template>

<style scoped>

</style>