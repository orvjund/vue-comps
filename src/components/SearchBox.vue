<template>
  <div class="search-box">
    <unicon class="search-icon" name="search" :fill="'#636e72'" :width="22" :height="22" />
    <input
      v-model="keyword"
      type="text"
      name="keyword"
      placeholder="Product name"
      class="search-text"
    >
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  data: () => ({
    keyword: '',
    debounceTimeout: 0,
  }),
  watch: {
    keyword() {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(() => {
        this.$emit('change-keyword', this.keyword);
        this.debounceTimeout = 0;
      }, 200);
    },
  },
};
</script>

<style scoped>
.search-box {
  height: 30px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 2px;
  background-color: white;
  border: none;
  display: grid;
  grid-template-columns: 30px 1fr;
}
.search-box:focus-within {
  box-shadow: 0 0 2px 2px rgba(178, 190, 195,0.8);
}
.search-box > .search-icon {
  margin: 4px;
  cursor: pointer;
}
.search-box > .search-text {
  outline: none;
  background: none;
  border: none;
  padding: 4px 0;
}
</style>
