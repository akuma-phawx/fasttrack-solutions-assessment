<template>
  <div class="categories-container">
    <div class="scene">
      <div class="carousel">
        <CategoriesCategory
          v-for="category in categories"
          :key="category.id"
          :category="category"
        />
      </div>
    </div>
    <Button class="startGameButton" displayText="Start Game" />
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import Category from "./Category.vue";

const categories = ref([]);

function rotateCarousel() {}
onBeforeMount(async () => {
  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  const fetchCategories = async () => {
    try {
      const response = await fetch("https://opentdb.com/api_category.php");
      const { trivia_categories } = await response.json();
      categories.value = shuffle(trivia_categories).slice(0, 9);
    } catch (error) {
      console.log(error);
    }
  };
  await fetchCategories();
});
</script>

<style style="less">
@import "./CategoriesContainer.styles.less";
</style>
