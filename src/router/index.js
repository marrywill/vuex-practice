import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieView from '@/views/MovieView.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Movie',
		component: MovieView,
	},
	{
		path: '/search',
		name: 'Search',
		component: () => import(/* webpackChunkName: "video" */ '../views/SearchView.vue'),
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
