<template>
  <div class="results-wrapper">
    <div class="results-container">
      <div class="results-content">
        <h2>Your Results</h2>
        <p>Correct Answers: {{ correctAnswers }}</p>
        <p>You were better then {{ randomPercentage }} of all quizers</p>
      </div>
    </div>
    <div>
      <NuxtLink :to="{ path: '/' }">
        <button class="reset-button">Reset</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

const randomPercentage = ref(Math.floor(Math.random() * 100) + 1 + "%");
const props = defineProps({
  correctAnswers: Number,
});
</script>
<style style="less">
@import "./Results.styles.less";
</style>
