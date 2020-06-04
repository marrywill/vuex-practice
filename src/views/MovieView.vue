<template>
  <div class="container">
    <h2>나만의 무비컬렉션</h2>
    <button class="btn btn-primary" @click="NowPlayingMovies">상영중</button>
    <button class="btn btn-info" @click="TopRatedMovies">평점순</button>
    <button class="btn btn-danger" @click="PopularMovies">인기순</button>
    <button class="btn btn-dark" @click="UpComingMovies">개봉예정</button>
    <MovieList />
  </div>
</template>

<script>
import MovieList from "@/components/MovieList.vue";
import { mapActions } from "vuex";

export default {
  created() {
    this.NowPlayingMovies();
  },
  methods: {
    ...mapActions([
      "NowPlayingMovies",
      "TopRatedMovies",
      "PopularMovies",
      "UpComingMovies"
    ])
  },
  components: {
    MovieList
  }
};
</script>

<style></style>
