<template>
  <li>
    <h3>{{ title }}</h3>
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" :src="videoUrl" allowfullscreen></iframe>
    </div>
  </li>
</template>

<script>
import _ from "lodash";
export default {
  props: {
    video: {
      type: Object
    }
  },
  computed: {
    videoUrl() {
      return `https://www.youtube.com/embed/${this.video.id.videoId}`;
    },
    title() {
      return _.unescape(this.video.snippet.title, "text/html");
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
