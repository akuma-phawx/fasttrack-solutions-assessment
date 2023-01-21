<script setup>
import { defineProps } from "vue";
const props = defineProps({
  questionText: String,
});
</script>

<template>
  <div class="question-container">
    <div class="question-content">
      <span class="questionInitial">Q: </span>{{ questionText }}
    </div>
  </div>
</template>
