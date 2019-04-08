<template>
  <button class="btn-colored" @click="$emit('click')">
    <slot>Click me</slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonColored',
  props: {
    bgColor: { type: String, default: 'rgba(178, 190, 195,1.0)' },
    bgColorHover: { type: String, default: 'rgba(99, 110, 114,1.0)' },
  },
  mounted() {
    this.$el.style.setProperty('--bg-color', this.bgColor);
    this.$el.style.setProperty('--bg-color-hover', this.bgColorHover || this.bgColor);
  },
};
</script>

<style scoped>
.btn-colored {
  background-color: var(--bg-color);
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 2px;
  font-weight: bold;
}
.btn-colored:hover {
  background-color: var(--bg-color-hover);
}
.btn-colored:active {
  transform: scale(1.05);
}
</style>
