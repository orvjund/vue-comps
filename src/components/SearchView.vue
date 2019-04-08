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

      <component
        :is="resultItemComponent"
        v-for="item in results"
        :key="item.id"
        v-bind="item"
        class="animated fadeIn"
      />
    </div>

    <div class="bottom">
      <ButtonColored
        bg-color="rgba(116, 185, 255,1.0)"
        bg-color-hover="rgba(9, 132, 227,1.0)"
        class="btn-close"
        @click="close()"
      >
        Close
      </ButtonColored>
    </div>
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue';
import ButtonColored from '@/components/ButtonColored.vue';

export default {
  name: 'SearchView',
  components: {
    SearchBox,
    ButtonColored,
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
.result-view {
  padding: 10px 4px;
}
</style>
