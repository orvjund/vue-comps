<template>
  <div>
    <!-- Draw cards -->
    <div class="draws-container comic-border-large">
      <div v-for="index in 8" :key="index" class="draw-card comic-border">
        <span class="draw-card-title comic-border border-top-only">What is up</span>
      </div>
    </div>
    <!-- Draw buttons -->
    <button class="draw-button comic-border-small">Draw</button>
  </div>
</template>

<script>
export default {
  name: 'Draw',
};
</script>

<style scoped>
.comic-border {
  border: 3px solid #2d3436;
  font-family: 'Merienda', cursive;
  border-radius: 2% 95% 2% 99%/97% 2% 96% 2%;
}
.comic-border-large {
  font-family: 'Merienda', cursive;
  border: 3px solid #2d3436;
  border-radius: 1% 98% 1% 99%/98% 1% 96% 1%;
}
.comic-border-small {
  font-family: 'Merienda', cursive;
  border: 3px solid #2d3436;
  border-radius: 3% 96% 4% 92%/94% 4% 95% 3%;
}
.draws-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 10px;
  margin: 10px;
  padding: 10px 15px;
  box-sizing: border-box;
}
.draw-card {
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
.border-top-only {
  border-left: none;
  border-right: none;
  border-bottom: none;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

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
