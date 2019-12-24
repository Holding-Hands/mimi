import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Movie = () =>
    import('views/movie/Movie.vue')
const City = () =>
    import('views/movie/childrenComponents/City.vue')
const Now = () =>
    import('views/movie/childrenComponents/Now.vue')
const Future = () =>
    import('views/movie/childrenComponents/Future.vue')
const Search = () =>
    import('views/movie/childrenComponents/Search.vue')

const Cinema = () =>
    import('views/cinema/Cinema.vue')
const Profile = () =>
    import('views/profile/Profile.vue')

const routes = [
  {path: '/', redirect: '/movie'},
  {
    path: '/movie',
    name: 'movie',
    component: Movie,
    children: [
      {path: '/', redirect: 'now'},
      {path: 'city', component: City},
      {path: 'now', component: Now},
      {path: 'future', component: Future},
      {path: 'search', component: Search},
    ]
  },
  {path: '/cinema', name: 'movie', component: Cinema},
  {path: '/profile', name: 'movie', component: Profile},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
