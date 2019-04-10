<template>
  <footer class="the-player">
    <button class="btn-play">
      <unicon class="play-icon" name="play" :fill="'#0984e3'" :width="48" :height="48" />
    </button>
  </footer>
</template>

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
.btn-play {
  background: none;
  border: none;
  cursor: pointer;
  height: 4.2rem;
  width: 4.2rem;
  outline: none;
  padding: 0;
}
.btn-play:active {
  transform: scale(1.05);
}
.play-icon {
  height: 4.2rem;
  width: 4.2rem;
}
</style>
