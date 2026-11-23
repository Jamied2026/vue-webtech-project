<script setup lang="ts">
import "@/assets/css/main.css"
import {ref} from "vue"
const name=ref("Jamie")
const age=ref("19")
const email=ref("k00333285@student.tus.ie")
const feedback=ref("Enter feedback...")
</script>

<template>
<h1>Contact Us:</h1>
  <div class="formBox">
    <form @submit.prevent>
<label for="name">Your Name:</label>
    <input id="name" v-model="name" maxlength="60">
    <label for="age">Your age:</label>
    <input id="age" v-model="age" maxlength="3">
    <label for="email">Email:</label>
    <input id="email"v-model="email" maxlength="50">
    <label for="feedback">Feedback:</label>
    <input id="feedback"v-model="feedback" maxlength="500">
    <button type="submit" class="primary-button">Submit Form</button>
    </form>
  </div>


</template>

<style scoped>


</style>