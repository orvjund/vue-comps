<template>
  <div id="app">
    <div id="nav">
      <router-link class="router-link" to="/">Home</router-link>
      <span class="router-link-divider">|</span>
      <router-link class="router-link" to="/draw">Draw</router-link>
      <span class="router-link-divider">|</span>
      <router-link class="router-link" to="/about">About</router-link>
    </div>
    <router-view class="router-view" />
  </div>
</template>

<style scoped>
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
</style>
