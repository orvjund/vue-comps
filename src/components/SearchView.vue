<template>
  <div class="search-view">
    <h4 class="title">Search</h4>

    <div class="search-box-container">
      <SearchBox @change-keyword="onChangeKeyword" />
    </div>

    <div class="result-view">
      <div v-if="searching && results.length === 0" class="status-indicator">
        Searching...!
      </div>
      <div v-else-if="results.length === 0" class="status-indicator">
        Found nothing...!
      </div>

      <component :is="resultItemComponent" v-for="item in results" :key="item.id" v-bind="item" />
    </div>

    <div class="bottom">
      <button class="close-btn" @click="close()">Close</button>
    </div>
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue';

export default {
  name: 'SearchView',
  components: {
    SearchBox,
  },
  props: {
    results: {
      type: Array,
      default: () => [],
    },
    searching: {
      type: Boolean,
    },
    resultItemComponent: {
      type: Object,
      default: null,
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
    onChangeKeyword(keyword) {
      this.$emit('keyword-change', keyword);
    },
  },
};
</script>

<style scoped>
.search-view {
  box-shadow: 0 0 2px 2px rgba(178, 190, 195,0.8);
  border-radius: 4px;
}
.title {
  font-weight: normal;
  font-size: large;
  padding: 10px 0;
  margin: 0;
}
.search-box-container, .bottom {
  background-color: #dfe6e9;
  padding: 10px;
  box-sizing: border-box;
}
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
.status-indicator {
  margin: 10px 0;
}
.bottom {
  text-align: right;
}
.close-btn {
  border: none;
  background-color: rgba(116, 185, 255,1.0);
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 2px;
  font-weight: bold;
}
.close-btn:hover {
  background-color: rgba(9, 132, 227,1.0);
}
.close-btn:active {
  transform: scale(1.05);
}
.result-view {
  padding: 10px 4px;
}
</style>
