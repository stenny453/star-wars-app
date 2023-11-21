<!-- fetch movies to avoid multiple fetch on different views  -->

<template>
  <br>
</template>

<script setup>
import { onMounted } from 'vue';
import axiosUtil from '../../utils/axios';
import useMoviesStore from '../../store/movies';

const storeMovies = useMoviesStore();

/**
 * Get films from the API
 * and put values for movies store
 */
const getFilms = async () => {
  storeMovies.loading = true;
  storeMovies.loaded = false;

  await axiosUtil.get('films').then((response) => {
    storeMovies.count = response?.data?.count;
    storeMovies.movies = response?.data?.results;
    storeMovies.loading = false;
  }).catch((error) => {
    storeMovies.error = error;
    storeMovies.loading = false;
  });

  storeMovies.loaded = true;
};

onMounted(() => {
  getFilms();
});

</script>
