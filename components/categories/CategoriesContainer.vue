<template>
  <div class="categories-container">
    <div class="scene">
      <div class="carousel" :style="{ transform: carouselTranform }">
        <CategoriesCategory
          v-for="category in categories"
          :key="category.id"
          :category="category"
        />
      </div>
    </div>
    <div class="carousel_buttons_container">
      <Button
        :isSwiperButton="true"
        displayText="Next Category"
        @rotate-carousel="rotateCarousel"
      />
    </div>
    <NuxtLink :to="{ path: '/game/' + selectedCategory }">
      <Button class="startGameButton" displayText="Start Game" />
    </NuxtLink>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted } from "vue";
import Category from "./Category.vue";

const categories = ref([]);
const mappedCategoriesToIndex = ref({});

const selectedIndex = ref(0);
const selectedCategory = ref(0);
const carouselTranform = ref("");
const theta = 40;
const radius = Math.round(100 / 2 / Math.tan(Math.PI / 9));

function rotateCarousel() {
  selectedIndex.value++;
  const angle = theta * selectedIndex.value * -1;
  carouselTranform.value =
    "translateZ(" + -radius + "px)rotateY(" + angle + "deg)";
  selectedCategory.value =
    mappedCategoriesToIndex.value[selectedIndex.value % 9];
}

function mapCarouselIndexToCategory() {
  let tempVal = selectedIndex.value;
  categories.value.forEach((category) => {
    mappedCategoriesToIndex.value[tempVal] = category.id;
    tempVal++;
  });
}

//Fetcing Categories Before Mounting
onBeforeMount(async () => {
  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  const fetchCategories = async () => {
    try {
      const response = await fetch("https://opentdb.com/api_category.php");
      const { trivia_categories } = await response.json();
      categories.value = shuffle(trivia_categories).slice(0, 9); //displaying only 9 categories
    } catch (error) {
      console.log(error);
    }
  };
  await fetchCategories();
  selectedCategory.value = categories.value[0].id;
  mapCarouselIndexToCategory();
});
</script>

<style style="less">
@import "./CategoriesContainer.styles.less";
</style>
