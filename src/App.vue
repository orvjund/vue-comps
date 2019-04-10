<template>
  <div id="app">
    <TheNavBar class="the-nav" />
    <transition>
      <keep-alive>
        <router-view :key="$route.fullPath" class="router-view" />
      </keep-alive>
    </transition>
    <ThePlayer class="the-footer" />
  </div>
</template>

<script>
import TheNavBar from '@/components/TheNavBar.vue';
import ThePlayer from '@/components/ThePlayer.vue';

export default {
  name: 'App',
  components: {
    TheNavBar,
    ThePlayer,
  },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Merienda');

html {
  font-size: 10px;
}
body {
  display: block;
  overflow-x: hidden;
}
.comic-border {
  border: 3px solid #2d3436;
  border-radius: 2% 95% 2% 99%/97% 2% 96% 2%;
}
.comic-border-large {
  border: 3px solid #2d3436;
  border-radius: 1% 98% 1% 99%/98% 1% 96% 1%;
}
.comic-border-small {
  border: 3px solid #2d3436;
  border-radius: 3% 96% 4% 92%/94% 4% 95% 3%;
}
.border-top-only {
  border-left: none;
  border-right: none;
  border-bottom: none;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
</style>

<style scoped>
#app {
  font-family: 'Merienda', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-rows: calc(1.6rem + 30px) 1fr calc(4.2rem + 10px);
  min-height: 100vh;
  width: 100vw;
}
.router-view {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 1.6rem;
  padding: 10px;
  overflow-x: auto;
}
.the-nav, .the-footer {
  z-index: 1;
  position: sticky;
  width: 100vw;
}
.the-nav {
  top: 0;
}
.the-footer {
  bottom: 0;
}
</style>
