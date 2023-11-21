<template>
  <div>
    <MoviesList
      :movies="listMovies"
      :loading="storeMovies.loading"
      :count="storeMovies.count"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import MoviesList from '../components/Movies/MoviesList.vue';
import sort from '../utils/sort';
import useMoviesStore from '../store/movies';

const storeMovies = useMoviesStore();

const listMovies = computed(() => {
  const filteredFilms = storeMovies?.movies.filter((film) => {
    const releaseYear = new Date(film.release_date).getFullYear();
    return releaseYear < 1990;
  });

  const sortedFilms = sort(filteredFilms, 'release_date');

  return sortedFilms;
});

</script>
