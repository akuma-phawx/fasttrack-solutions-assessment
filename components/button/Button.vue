<template>
  <div>
    <button type="button">{{ displayText }}</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    displayText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
