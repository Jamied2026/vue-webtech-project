<script setup>
defineProps({
  comments: { type: Array, required: true },
  editing: { type: Boolean, default: false }
})

const emit = defineEmits(['edit', 'remove'])
</script>

<template>
  <p v-if="comments.length === 0" class="empty-state">
    No comments yet. Add one above.
  </p>

  <ul v-else class="comment-list">
    <li v-for="comment in comments" :key="comment.id" class="comment-item">
      <div>
        <strong>{{ comment.name }}</strong>
        <p>{{ comment.text }}</p>
      </div>
      <button
          type="button"
          class="secondary-button"
          :disabled="editing"
          @click="emit('edit', comment.id)"
      >
        Edit
      </button>
      <button
          type="button"
          class="remove-button"
          :disabled="editing"
          @click="emit('remove', comment.id)"
      >
        Remove
      </button>
    </li>
  </ul>
</template>