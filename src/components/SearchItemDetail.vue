<template>
  <div class="card col-3 mt-4">
    <img :src="searchUrl" class="card-img-top" :alt="movie.title" />
    <div class="card-body">
      <h5 class="card-title">{{ movie.title }}</h5>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        :data-target="MovieTarget"
      >영화정보 상세보기</button>
      <SearchItemDetailModal :movie="movie" />
    </div>
  </div>
</template>

<script>
import SearchItemDetailModal from "./SearchItemDetailModal";
export default {
  props: {
    movie: {
      type: Object
    }
  },
  components: {
    SearchItemDetailModal
  },
  computed: {
    MovieTarget() {
      return `#movie-${this.movie.id}`;
    },
    searchUrl() {
      if (this.movie.poster_path) {
        return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
      } else {
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8LOtbSz9KbWXi-eZAt2ids172dD3-bgqHetiuP96aCci66sXJ&usqp=CAU";
      }
    }
  }
};
</script>

<style>
li {
  list-style-type: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
}
h3 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
