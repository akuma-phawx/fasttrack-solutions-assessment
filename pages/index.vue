<script setup></script>

<template>
  <div class="home">
    <h2>&#129302; FTS QuizBot &#129302;</h2>
    <CategoriesContainer />
  </div>
</template>

<style>
@font-face {
  font-family: "Raleway";
  src: url("./../assets/fonts/Raleway-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
* {
  font-family: "Raleway";
}

body {
  background-color: #dfe4e8;
}
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
