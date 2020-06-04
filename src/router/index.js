import Vue from "vue";
import VueRouter from "vue-router";
import MovieView from "@/views/MovieView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Movie",
    component: MovieView
  },
  {
    path: "/video",
    name: "Video",
    component: () =>
      import(/* webpackChunkName: "video" */ "../views/VideoView.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
