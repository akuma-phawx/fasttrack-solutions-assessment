<template>
  <div class="container">
    <p class="title">404</p>
    <p class="message">{{ message }}</p>
    <NuxtLink :to="{ path: '/' }">
      <button class="goHomeButton">Home</button>
    </NuxtLink>
  </div>
</template>

<script setup>
import { ref } from "vue";

const message = ref(
  "Oops! Looks like you took a wrong turn. But don't worry, there's always a way back home."
);
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 100px;
  animation: pulse 2s infinite;
}

.message {
  font-size: 1.5rem;
  text-align: center;
  margin-top: 1rem;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
