<template>
  <nav id="nav">
    <router-link class="router-link" to="/">Home</router-link>
    <span class="router-link-divider">|</span>
    <router-link class="router-link" to="/draw">Draw</router-link>
    <span class="router-link-divider">|</span>
    <router-link class="router-link" to="/about">About</router-link>
  </nav>
</template>

<style scoped>
#nav {
  box-shadow: 0 0 2px 2px rgba(178, 190, 195,0.8);
  font-size: 1.6rem;
  background-color: #dfe6e9;
  padding: 15px 0;
}

#nav .router-link {
  font-weight: bold;
  color: #2c3e50;
}
#nav .router-link.router-link-exact-active {
  color: #42b983;
}
.router-link {
  padding: 0 15px;
  text-decoration: none;
  border-bottom: 2px solid;
  border-bottom-left-radius: 99% 11%;
  border-bottom-right-radius: 10% 5%;
}
</style>
