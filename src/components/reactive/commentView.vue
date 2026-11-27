<script setup>
import "@/assets/css/main.css"
import { ref } from "vue"
import CommentList from "@/components/reactive/commentList.vue"

const newName = ref("Jamie")
const newComment = ref("")
const errorMessage = ref("")
const editingId = ref(null)
let nextId = 1

const comments = ref([])

function startEditing(id) {
  const item = comments.value.find(c => c.id === id)
  if (!item) return
  editingId.value = id
  newName.value = item.name
  newComment.value = item.text
  errorMessage.value = ""
}

function resetForm() {
  editingId.value = null
  newComment.value = ""
  errorMessage.value = ""
}

function saveComment() {
  const name = newName.value.trim()
  const text = newComment.value.trim()

  if (!name) {
    errorMessage.value = "Please enter your name."
    return
  }
  if (!text) {
    errorMessage.value = "Please enter a comment."
    return
  }

  if (editingId.value === null) {
    comments.value.push({
      id: nextId++,
      name,
      text
    })
  } else {
    const item = comments.value.find(c => c.id === editingId.value)
    if (!item) {
      errorMessage.value = "This comment is no longer available."
      return
    }
    item.name = name
    item.text = text
  }

  resetForm()
}

function removeComment(id) {
  comments.value = comments.value.filter(c => c.id !== id)
}
</script>

<template>
  <h1>Comments</h1>

  <div class="formBox">
    <h2>{{ editingId === null ? "Add a comment" : "Edit comment" }}</h2>
    <form @submit.prevent="saveComment">
      <label for="commentName">Your Name:</label>
      <input id="commentName" v-model="newName" maxlength="60" />

      <label for="commentText">Comment:</label>
      <input id="commentText" v-model="newComment" maxlength="500" />

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

      <button type="submit" class="primary-button">
        {{ editingId === null ? "Post comment" : "Save changes" }}
      </button>
      <button
          v-if="editingId !== null"
          type="button"
          class="secondary-button"
          @click="resetForm"
      >
        Cancel
      </button>
    </form>
  </div>

  <section>
    <h2>Posted comments</h2>
    <CommentList
        :comments="comments"
        :editing="editingId !== null"
        @edit="startEditing"
        @remove="removeComment"
    />
  </section>
</template>