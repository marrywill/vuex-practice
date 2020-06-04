import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

// const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
// const API_URL = 'https://www.googleapis.com/youtube/v3/search'
const MOVIEDB_KEY = process.env.VUE_APP_MOVIE_API_KEY
const NOW_PLAYING_URL = 'https://api.themoviedb.org/3/movie/now_playing'
const TOP_RATED_URL = 'https://api.themoviedb.org/3/movie/top_rated'
const POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular'
const UPCOMING_URL = 'https://api.themoviedb.org/3/movie/upcoming'
// const DETAIL_URL = 'https://api.themoviedb.org/3/movie/'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie'

export default new Vuex.Store({
	state: {
		movies: null,
		searchMovies: null,
	},
	getters: {
		movies(state) {
			return state.movies
		},
		searchMovies(state) {
			return state.searchMovies
		},
	},
	mutations: {
		searchInput(state, payload) {
			state.searchMovies = payload
		},
		getMovies(state, payload) {
			state.movies = payload
		},
	},
	actions: {
		getVideos({ commit }, payload) {
			// axios
			// 	.get(API_URL, {
			// 		params: {
			// 			part: 'snippet',
			// 			type: 'video',
			// 			q: payload + ' trailer',
			// 			key: API_KEY,
			// 		},
			// 	})
			// 	.then((response) => {
			// 		commit('videoInput', response.data.items)
			// 	})
			// 	.catch((error) => {
			// 		console.log(error)
			// 	})
			axios
				.get(SEARCH_URL, {
					params: {
						api_key: MOVIEDB_KEY,
						language: 'ko-KR',
						query: payload,
						page: 1,
						include_adult: true,
					},
				})
				.then((res) => {
					console.log(res.data.results)
					commit('searchInput', res.data.results)
				})
				.catch((err) => console.log(err))
		},
		callMovieList({ commit }) {
			axios
				.get('http://www.json-generator.com/api/json/get/ceNyuXZmwi?indent=2')
				.then((response) => {
					commit('getMovies', response.data)
				})
				.catch((error) => {
					console.log(error)
				})
		},
		NowPlayingMovies({ commit }) {
			axios
				.get(NOW_PLAYING_URL, {
					params: {
						api_key: MOVIEDB_KEY,
						language: 'ko-KR',
						page: 1,
					},
				})
				.then((res) => {
					console.log(res.data)
					commit('getMovies', res.data.results)
				})
		},
		TopRatedMovies({ commit }) {
			axios
				.get(TOP_RATED_URL, {
					params: {
						api_key: MOVIEDB_KEY,
						language: 'ko-KR',
						page: 1,
					},
				})
				.then((res) => {
					commit('getMovies', res.data.results)
				})
				.catch((err) => console.log(err))
		},
		PopularMovies({ commit }) {
			axios
				.get(POPULAR_URL, {
					params: {
						api_key: MOVIEDB_KEY,
						language: 'ko-KR',
						page: 1,
					},
				})
				.then((res) => {
					commit('getMovies', res.data.results)
				})
				.catch((err) => console.log(err))
		},
		UpComingMovies({ commit }) {
			axios
				.get(UPCOMING_URL, {
					params: {
						api_key: MOVIEDB_KEY,
						language: 'ko-KR',
						page: 1,
					},
				})
				.then((res) => {
					commit('getMovies', res.data.results)
				})
				.catch((err) => console.log(err))
		},
	},
	modules: {},
})
