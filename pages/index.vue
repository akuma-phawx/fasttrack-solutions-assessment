<template>
  <div class="home">
    <h2>Welcome To FTS QuizBot &#129302;</h2>
    <CategoriesContainer />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
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
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
