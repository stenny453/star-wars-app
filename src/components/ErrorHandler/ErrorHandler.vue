<template>
  <br>
</template>

<script setup>
import { inject } from 'vue';
import useMoviesStore from '../../store/movies';

const notif = inject('$vs');

const storeMovies = useMoviesStore();

const throwError = (text) => {
  notif.notify({
    title: 'ERROR',
    text,
    color: 'danger',
  });
};

// listen it
storeMovies.$subscribe((mutation, state) => {
  // if error
  if (state.error) {
    throwError(state.error);
  }
});

</script>
