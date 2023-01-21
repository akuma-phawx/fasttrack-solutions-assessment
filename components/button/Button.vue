<script>
export default {
  name: "Button",
  props: {
    isSwiperButton: {
      type: Boolean,
      required: false,
      default: false,
    },
    isStartButton: {
      type: Boolean,
      required: false,
      default: false,
    },
    displayText: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div>
    <button
      :class="{ nextButton: isSwiperButton, startGameButton: isStartButton }"
      type="button"
      @click="$emit('rotate-carousel')"
    >
      {{ displayText }}
    </button>
  </div>
</template>

<style style="less">
@import "./Button.styles.less";
</style>
