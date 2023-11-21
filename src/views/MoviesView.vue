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

const listMovies = computed(() => sort(storeMovies?.movies, 'title'));

</script>
