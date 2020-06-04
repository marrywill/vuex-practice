<template>
  <div class="container">
    <h2>영화 예고편 검색</h2>
    <VideoSearch />
    <VideoItem />
  </div>
</template>

<script>
import VideoSearch from "../components/VideoSearch.vue";
import VideoItem from "../components/VideoItem.vue";

export default {
  components: {
    VideoSearch,
    VideoItem
  }
};
</script>

<style></style>
