import { createRouter, createWebHistory } from 'vue-router';
import MoviesList from '../views/MoviesView.vue';

const routes = [
  { path: '/', name: 'Movies', component: MoviesList },

  /**
   * Lazy loading routes
   */
  { path: '/classic-movies', name: 'Classics', component: () => import(/* webpackChunkName: "classic-movies" */ '../views/ClassicView.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
