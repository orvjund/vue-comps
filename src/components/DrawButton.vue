<template>
  <button class="draw-button comic-border-small">
    <slot>Click me</slot>
  </button>
</template>

<style scoped>
.draw-button {
  outline: none;
  padding: 8px 13px;
  border-width: 2px;
  cursor: pointer;
}
.draw-button:hover, .draw-button:focus {
  box-shadow: 0 0 6px #2d3436;
}
.draw-button:active {
  transform: scale(1.05);
}
</style>
