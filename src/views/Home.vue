<template>
  <div>
    <SeachView
      v-if="showSearch"
      :result-item-component="SearchItemProduct"
      :results="searchResult"
      :searching="searchTimeout !== 0"
      class="screen-center"
      @close="() => showSearch = false"
      @keyword-change="($event) => searchKeyword = $event"
    />
  </div>
</template>

<script>
import SeachView from '@/components/SearchView.vue';
import SearchItemProduct from '@/components/SearchItemProduct.vue';

export default {
  name: 'Home',
  components: {
    SeachView,
  },
  data: () => ({
    showSearch: true,
    searchKeyword: '',
    searchTimeout: 0,
    products: [...new Set('Notice that when clicking on the buttons each one maintains its own separate count. That’s because each time you use a component a new instance of it is created'.split(' '))]
      .map((word, index) => ({
        id: index,
        name: word[0].toUpperCase() + word.slice(1),
        price: index * 10,
      })),
    searchResult: [],
    SearchItemProduct,
  }),
  watch: {
    searchKeyword: {
      handler(keyword) {
        if (this.searchTimeout !== 0) {
          clearTimeout(this.searchTimeout);
        }
        const results = this.products.filter(product => product.name.includes(keyword));

        if (results.length > 5) results.length = 5;

        const timeout = setTimeout(() => {
          if (this.searchTimeout === timeout) {
            this.searchResult = results;
            this.searching = false;
            this.searchTimeout = 0;
          }
        }, 500);
        this.searchTimeout = timeout;
      },
      immediate: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.screen-center {
  max-width: calc(100% - 10px);
  margin: auto;
  display: block;
  width: 450px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
