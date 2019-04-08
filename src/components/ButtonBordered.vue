<template>
  <button class="btn-bordered" @click="$emit('click')">
    <slot>Click me</slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonBordered',
};
</script>

<style scoped>
.btn-bordered {
  background-color: rgba(99, 110, 114,1.0);
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 2px;
  font-weight: bold;
}
.btn-bordered:active {
  transform: scale(1.05);
}
</style>
