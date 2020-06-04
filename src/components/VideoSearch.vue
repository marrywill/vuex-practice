<template>
  <div>
    <input v-model="videoData" @keypress.enter="videoInput" type="text" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "VideoSearch",
  data() {
    return {
      videoData: null
    };
  },
  methods: {
    ...mapActions(["getVideos"]),
    videoInput() {
      if (this.videoData) {
        this.getVideos(this.videoData);
      }
    }
  }
};
</script>

<style></style>
