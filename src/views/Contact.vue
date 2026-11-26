<script setup lang="ts">
import "@/assets/css/main.css";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const name = ref("Jamie");
const age = ref<number | string>(19);
const email = ref("k00333285@student.tus.ie");
const feedback = ref("");

function handleSubmit() {
  if (!name.value.trim() || !email.value.trim() || !feedback.value.trim()) {
    alert("Please fill in name, email, and feedback.");
    return;
  }

  console.log("Feedback registered:", {
    name: name.value.trim(),
    age: Number(age.value) || 0,
    email: email.value.trim(),
    feedback: feedback.value.trim(),
    createdAt: new Date().toISOString(),
  });

  alert("Feedback registered!");
  router.push("/");
}
</script>

<template>
  <h1>Contact Us:</h1>
  <div class="formBox">
    <form @submit.prevent="handleSubmit">
      <label for="name">Your Name:</label>
      <input id="name" v-model="name" maxlength="60" required />

      <label for="age">Your age:</label>
      <input id="age" v-model="age" type="number" min="1" max="120" required />

      <label for="email">Email:</label>
      <input id="email" v-model="email" type="email" maxlength="50" required />

      <label for="feedback">Feedback:</label>
      <textarea
          id="feedback" v-model="feedback" maxlength="500"
          placeholder="Enter feedback..." required/>

      <button type="submit" class="primary-button">Submit Form</button>
    </form>
  </div>
</template>

<style scoped>
</style>