<template>
  <div
    class="modal fade"
    :id="`movie-${movie.id}`"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ movie.title }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <img class="w-100" :src="backDropUrl" :alt="movie.title" />
          <p class="badge badge-info">{{ movie.vote_average }}</p>
          <p>{{ movie.overview }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object
    }
  },
  computed: {
    backDropUrl() {
      if (this.movie.backdrop_path) {
        return `https://image.tmdb.org/t/p/w500${this.movie.backdrop_path}`;
      } else {
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8LOtbSz9KbWXi-eZAt2ids172dD3-bgqHetiuP96aCci66sXJ&usqp=CAU";
      }
    }
  }
};
</script>

<style></style>
