<template>
  <div class="container">
    <h2>영화 검색</h2>
    <Search />
    <SearchItem />
  </div>
</template>

<script>
import Search from "../components/Search.vue";
import SearchItem from "../components/SearchItem.vue";

export default {
  components: {
    Search,
    SearchItem
  }
};
</script>

<style></style>
