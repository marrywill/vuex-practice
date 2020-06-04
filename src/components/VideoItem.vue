<template>
  <div v-if="videos">
    <ul>
      <VideoItemDetail v-for="video in videos" :key="video.etag" :video="video" />
    </ul>
  </div>
</template>

<script>
import VideoItemDetail from "./VideoItemDetail.vue";
export default {
  components: {
    VideoItemDetail
  },
  computed: {
    videos() {
      return this.$store.getters.videos;
    }
  }
};
</script>

<style>
li {
  margin-top: 2rem;
}
</style>
