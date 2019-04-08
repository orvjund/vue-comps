<template>
  <button class="btn-bordered" @click="$emit('click')">
    <slot>Click me</slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonBordered',
  props: {
    color: { type: String, default: 'rgba(99, 110, 114,1.0)' },
    colorHover: { type: String, default: 'rgba(45, 52, 54,1.0)' },
  },
  mounted() {
    this.$el.style.setProperty('--color', this.color);
    this.$el.style.setProperty('--color-hover', this.colorHover);
  },
};
</script>

<style scoped>
.btn-bordered {
  color: var(--color);
  border: 2px solid var(--color);
  background: none;
  padding: 3px 8px;
  cursor: pointer;
  border-radius: 2px;
  font-weight: bold;
  outline: none;
}
.btn-bordered:hover {
  padding: 2px 7px;
  border-width: 3px;
  color: var(--color-hover);
  border-color: var(--color-hover);
}
.btn-bordered:active {
  transform: scale(1.05);
}
</style>
