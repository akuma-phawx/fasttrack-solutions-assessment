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

function categoryClicked(categoryId) {
  selectedIndex.value = mappedCategoriesToIndex.value[categoryId];
  selectedCategory.value = categoryId;
  rotateCarousel();
}
function rotateCarousel() {
  const angle = theta * selectedIndex.value * -1;
  carouselTranform.value =
    "translateZ(" + -radius + "px)rotateY(" + angle + "deg)";
}

function mapCarouselIndexToCategory() {
  let tempVal = selectedIndex.value;
  categories.value.forEach((category) => {
    mappedCategoriesToIndex.value[category?.id] = tempVal;
    tempVal++;
  });
}

onBeforeMount(async () => {
  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  const fetchCategories = async () => {
    try {
      const response = await fetch("https://opentdb.com/api_category.php");
      const { trivia_categories } = await response.json();
      categories.value = shuffle(trivia_categories).slice(0, 9); //displaying only 9 categories
    } catch (error) {}
  };
  await fetchCategories();
  selectedCategory.value = categories.value[0]?.id;
  mapCarouselIndexToCategory();
});
</script>

<template>
  <div class="categories-container">
    <div v-if="categories.length > 0" class="scene">
      <div class="carousel" :style="{ transform: carouselTranform }">
        <CategoriesCategory
          v-for="category in categories"
          :key="category?.id"
          :category="category"
          @categoryclick="categoryClicked"
        />
      </div>
    </div>
    <div class="loadingText" v-else>
      Patience! This is difficult, you know...
    </div>
    <div class="carousel_buttons_container">
      <NuxtLink :to="{ path: '/game/' + selectedCategory }">
        <Button :isStartButton="true" displayText="Start" />
      </NuxtLink>
    </div>
  </div>
</template>
