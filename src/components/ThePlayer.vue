<template>
  <footer class="the-player">
    <VueniconButton icon="step-backward" color="#2d3436" />
    <VueniconButton
      :icon="isPlaying ? 'pause' : 'play'"
      color="#2d3436" @click="isPlaying = !isPlaying"
    />
    <VueniconButton icon="skip-forward" color="#2d3436" />
  </footer>
</template>

<script>
import VueniconButton from '@/components/VueniconButton.vue';

export default {
  name: 'ThePlayer',
  components: {
    VueniconButton,
  },
  data: () => ({
    isPlaying: false,
  }),
};
</script>


<style scoped>
.the-player {
  box-shadow: 0 0 2px 2px rgba(178, 190, 195,0.8);
  background-color: #dfe6e9;
  font-size: 4.2rem;
  overflow: hidden;
  padding: 5px 0;
  box-sizing: border-box;
  widows: 100vw;
}
</style>
