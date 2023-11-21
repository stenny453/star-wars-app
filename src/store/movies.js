import { defineStore } from 'pinia';

const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: [],
    count: 0,
    loading: false,
    error: null,
  }),
  actions: {
    setMovies(movies) {
      this.movies = movies;
    },
    setCount(count) {
      this.count = count;
    },
    setError(error) {
      this.error = error;
    },
  },
  getters: {
    getMovies: (state) => state.movies,
    isLoading: (state) => state.loading,
    getCount: (state) => state.count,
    getError: (state) => state.error,
  },
});

export default useMoviesStore;
