<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  correctAnswers: Number,
});

const correctPercentage = ((props.correctAnswers / 3) * 100).toFixed(0);
const randomPercentage = Math.floor(Math.random() * 100) + 1 + "%";
</script>

<template>
  <div class="results-wrapper">
    <div class="results-container">
      <div class="results-content">
        <h1>&#127881; Bravo! &#127881;</h1>
        <h2>Your Results</h2>
        <p>
          Correct Answers:
          <span class="correctAnswers">{{ correctAnswers }}</span
          >&nbsp;
          <span>({{ correctPercentage }}%)</span>
        </p>
        <p>You were better then {{ randomPercentage }} of all quizers.</p>
      </div>
    </div>
    <div>
      <NuxtLink :to="{ path: '/' }">
        <button class="reset-button">home page</button>
      </NuxtLink>
    </div>
  </div>
</template>
