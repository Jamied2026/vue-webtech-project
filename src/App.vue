<script setup>
import "@/assets/main.css"
import footer from "@/components/footer.vue"
import topnav from "@/components/topnav.vue"
</script>


<template>
  <body>
  <topnav/>
    <h1>Featured: </h1>
    <p>Sort By: </p>

  <div class="grid">
  <div class="mainBox">
<img src ="../src/assets/article1.png" alt="pirateToken">
    <div class="sideBox">
      <h3>Odds Revealed for Pirate token</h3>
      <p>Epic games confirms in recent blog post.</p>
    </div>
  </div>

  <div class="side">
<h2>View My Backlog</h2>
    <img src="../src/assets/next.png" alt="next">
  </div>

  <div class="mainBox">
    <img src ="../src/assets/eldenRingimg.png" alt="eldenRing">
    <div class="sideBox">
      <h3>Is Elden Ring really that hard?</h3>
      <p>To some it really is.</p>
    </div>
  </div>
  <div class="side">
    <h2>View My Reviews</h2>
    <img src="../src/assets/chat.png" alt="comment Bubble">
  </div>
  </div>

<footer/>
  </body>

</template>

<style>


  </style>