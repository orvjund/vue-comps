<template>
  <div id="app">
    <nav id="nav">
      <router-link class="router-link" to="/">Home</router-link>
      <span class="router-link-divider">|</span>
      <router-link class="router-link" to="/draw">Draw</router-link>
      <span class="router-link-divider">|</span>
      <router-link class="router-link" to="/about">About</router-link>
    </nav>
    <transition>
      <keep-alive>
        <router-view :key="$route.fullPath" class="router-view" />
      </keep-alive>
    </transition>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Merienda');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.router-link {
  font-family: 'Merienda', cursive;
  padding: 0 15px;
  text-decoration: none;
  border-bottom: 2px solid;
  border-bottom-left-radius: 99% 11%;
  border-bottom-right-radius: 10% 5%;
}
.router-link-divider {
  font-family: 'Merienda', cursive;
}
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
.border-top-only {
  border-left: none;
  border-right: none;
  border-bottom: none;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
