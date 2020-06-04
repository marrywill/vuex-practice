<template>
  <div class="row">
    <MovieListItem v-for="movie in movies" :movie="movie" :key="movie.id" />
  </div>
</template>

<script>
import MovieListItem from "@/components/MovieListItem.vue";
export default {
  components: {
    MovieListItem
  },
  computed: {
    movies() {
      return this.$store.getters.movies;
    }
  }
};
</script>

<style></style>
