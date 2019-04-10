<template>
  <div>
    <ButtonBordered v-if="!showSearch" @click="showSearch = true" />
    <SearchView
      v-else
      :result-item-component="SearchItemSong"
      :results="searchResult"
      :searching="searchTimeout !== 0"
      class="screen-center"
      @close="() => showSearch = false"
      @keyword-change="($event) => searchKeyword = $event"
    />
  </div>
</template>

<script>
import SearchView from '@/components/SearchView.vue';
import SearchItemSong from '@/components/SearchItemSong.vue';
import ButtonBordered from '@/components/ButtonBordered.vue';

export default {
  name: 'About',
  components: {
    SearchView,
    ButtonBordered,
  },
  data: () => ({
    SearchItemSong,
    showSearch: false,
    searchResult: [],
    searchKeyword: '',
    searchTimeout: 0,
    songs: [{ id: 1, title: 'Let me go', year: 2015 }, { id: 2, title: 'Complicated', year: 2002 }, { id: 3, title: 'Forever and one', year: 1985 }, { id: 4, title: 'Love song', year: 2005 }],
  }),
  watch: {
    searchKeyword: {
      handler(keyword) {
        if (this.searchTimeout !== 0) {
          clearTimeout(this.searchTimeout);
        }
        const results = this.songs.filter(product => product.title.includes(keyword));

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

<style scoped>
.screen-center {
  max-width: calc(100% - 10px);
  margin: auto;
  display: block;
  width: 450px;
}
</style>
