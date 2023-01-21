<script setup>
const props = defineProps({
  displayText: {
    type: String,
    required: true,
    default: "",
  },
  isStartButton: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <div>
    <button
      :class="{ startGameButton: isStartButton }"
      type="button"
      @click="$emit('rotate-carousel')"
    >
      {{ displayText }}
    </button>
  </div>
</template>
