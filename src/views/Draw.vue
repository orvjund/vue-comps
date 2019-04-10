<template>
  <main>
    <section class="draws-container comic-border-large">
      <DrawCard
        v-for="index in 8"
        :key="index"
        v-bind="{id: index, imgSrc: 'http://clipart-library.com/images/rcLxG7qKi.jpg'}"
      />
    </section>
    <DrawButton>Draw</DrawButton>
  </main>
</template>

<script>
import DrawCard from '@/components/DrawCard.vue';
import DrawButton from '@/components/DrawButton.vue';

export default {
  name: 'Draw',
  components: {
    DrawCard,
    DrawButton,
  },
};
</script>

<style scoped>
.draws-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 10px;
  margin: 10px;
  padding: 10px 15px;
  box-sizing: border-box;
}
</style>
