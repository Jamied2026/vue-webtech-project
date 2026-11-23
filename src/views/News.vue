<script setup lang="ts">

import {RouterLink} from "vue-router";
</script>

<template>
  <p>Sort By: </p>
  <div class="newsGrid">
    <div class="newsMainBox">
      <img src ="../assets/images/ootReview.jpg" alt="dekutree">
      <div class="sideBox">
        <h2>Ocarina of time review</h2>
        <RouterLink to="/ootReview">Read More:</RouterLink>
      </div>
    </div>


    <div class="newsMainBox">
      <img src ="../assets/images/gtaImg.png" alt="viceCity">
      <div class="sideBox">
        <h2> GTA 6 Possible Returnee?</h2>
        <RouterLink to ="/gtaOpinion">Read More:</RouterLink>
      </div>
    </div>
    <div class="newsMainBox">
      <img src ="../assets/images/article1.png" alt="pirateToken">
      <div class="sideBox">
        <h2> Pirate Token odds Revaled</h2>
        <RouterLink to ="/gtaOpinion">Read More:</RouterLink>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>