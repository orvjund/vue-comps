<template>
  <button class="btn-media btn-play" @click="() => $emit('click')">
    <unicon class="btn-media-icon" :name="icon" :fill="color" :width="48" :height="48" />
  </button>
</template>

<script>
export default {
  name: 'VueniconButton',
  props: {
    icon: {
      type: String,
      default: 'exclamation-octagon',
    },
    color: {
      type: String,
      default: '#0984e3',
    },
  },
};
</script>

<style scoped>
.btn-media {
  background: none;
  border: none;
  cursor: pointer;
  height: 4.2rem;
  width: 4.2rem;
  outline: none;
  padding: 0;
}
.btn-media:active {
  transform: scale(1.05);
}
.btn-media-icon {
  height: 4.2rem;
  width: 4.2rem;
}
</style>
