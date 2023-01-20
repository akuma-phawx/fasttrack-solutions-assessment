<template>
  <div class="home">
    <h2>Welcome To Learning Bot</h2>
    <CategoriesContainer />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
<style>
* {
  font-family: sans-serif;
}
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
