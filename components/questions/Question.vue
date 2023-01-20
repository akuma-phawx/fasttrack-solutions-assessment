<template>
  <div class="question-container">
    <div class="question-content">
      <span class="questionInitial">Q: </span>{{ questionText }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  questionText: String,
});
</script>
<style style="less">
@import "./Question.styles.less";
</style>
