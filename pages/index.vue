<script setup></script>

<template>
  <div class="home">
    <h2>&#129302; FTS QuizBot &#129302;</h2>
    <p>Click/Tap on a category to select it</p>
    <p style="margin-top: 0px">Swiping doesn't work &#128531;</p>
    <CategoriesContainer />
  </div>
</template>

<style scoped>
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
p:nth-child(n + 3) {
  text-align: center;
  margin-top: 0;
}
</style>
