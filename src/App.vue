<script>
import {RouterLink, RouterView} from "vue-router"

</script>


<template>
  <body>
  <div class="topBar">
    <h1><em>GameTalk</em></h1>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/contact">Contact Us</RouterLink>
    <RouterLink to="/backlog">Backlog</RouterLink>
    <RouterView/>

  </div>
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

<footer>
  <div class="footer">

    </div>
</footer>
  </body>

</template>

<style>
body{
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 100%;
  display: block;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 30px;
  width: 90%;
  margin: 20px auto;
}
.topBar{
  background-color:#E67B7B;
  height:100px;
  display:flex;
  padding:10px;
  box-sizing: border-box;
  align-items: center;
  gap: 20px;
  width: 100vw;
  top: 0;
  left: 0;
}


.sideBox{
  background-color: #c98970;
  padding: 20px;
  width: 300px;
}
.side{
  height:300px;
  width:300px;
  background-color:#E67B7B;
  display:flex;
  flex-direction:column;
  border-radius:40px;
  align-items: center;
}
.side img{
  height:40%;
  width:40%;
  border-radius:40px;
}


.mainBox{
  background-color:#E67B7B;
  display:flex;
  height:300px;
border-radius:40px;
}


.mainBox img{


}

footer{
  background-color: #E67B7B;
position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px
}

  </style>