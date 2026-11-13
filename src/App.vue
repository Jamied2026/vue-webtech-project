<script>
import {RouterLink, RouterView} from "vue-router"



</script>



<template>
  <div id="topBar">
    <nav id ="navBar">
   <RouterLink to="/">Home</RouterLink>
<RouterLink to="/contact">Contact Us</RouterLink>
      <RouterLink to="/backlog">Backlog</RouterLink>
<RouterView/>

    </nav>

  </div>


</template>



<style>


  </style>