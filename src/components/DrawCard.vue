<template>
  <figure class="draw-card comic-border">
    <figcaption class="draw-card-title comic-border-small border-top-only">What is up</figcaption>
  </figure>
</template>

<script>
export default {
  name: 'DrawCard',
  props: {
    card: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
.draw-card {
  font-family: 'Merienda', cursive;
  margin: 0;
  background-image: url(http://clipart-library.com/images/rcLxG7qKi.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #dfe6e9;
  height: 200px;
  display: flex;
  flex-direction: row;
  position: relative;
  cursor: pointer;
}
.draw-card-title {
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  background-color: #dfe6e9;
  transition: padding 0.2s ease-in;
}
.draw-card:hover > .draw-card-title {
  background-color: #b2bec3;
  padding: 15px 5px;
}
</style>
