<template>
  <div class="card col-3">
    <img :src="movieUrl" class="card-img-top" :alt="movie.title" />
    <div class="card-body">
      <h5 class="card-title">{{ movie.title }}</h5>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        :data-target="movieTarget"
      >영화정보 상세보기</button>
      <MovieListItemModal :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieListItemModal from "@/components/MovieListItemModal.vue";
export default {
  computed: {
    movieTarget() {
      return `#movie-${this.movie.id}`;
    },
    movieUrl() {
      if (this.movie.poster_path) {
        return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
      } else {
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8LOtbSz9KbWXi-eZAt2ids172dD3-bgqHetiuP96aCci66sXJ&usqp=CAU";
      }
    }
  },
  props: {
    movie: {
      type: Object
    }
  },
  components: {
    MovieListItemModal
  }
};
</script>

<style>
.card {
  margin-bottom: 2rem;
}
</style>
