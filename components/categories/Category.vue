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

<template>
  <div class="category">{{ category?.id }} - {{ category.name }}</div>
</template>

<style style="less">
@import "./Category.styles.less";
</style>
