<template>
  <div class="category">{{ category.id }} - {{ category.name }}</div>
</template>

<script>
export default {
  name: "Category",
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style style="less">
@import "./Category.styles.less";
</style>
