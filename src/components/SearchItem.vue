<template>
  <div class="row">
    <SearchItemDetail v-for="movie in searchMovies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script>
import SearchItemDetail from "./SearchItemDetail.vue";
export default {
  components: {
    SearchItemDetail
  },
  computed: {
    searchMovies() {
      return this.$store.getters.searchMovies;
    }
  }
};
</script>

<style>
li {
  margin-top: 2rem;
}
</style>
