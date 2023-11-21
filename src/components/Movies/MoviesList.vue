<template>
  <div>
    <template v-for="index in 3">
      <MoviesSkeleton
        v-if="loading"
        :key="`skeleton-${index}`"
      />
    </template>

    <div v-if="!loading">
      <MoviesItem
        v-for="movie in movies"
        :key="movie.episode_id"
        :movie="movie"
      />
      <div
        v-if="movies.length > 0"
        class="pagination"
      >
        <vs-pagination
          v-model="currentPage"
          :total="Math.ceil(count / pageSize)"
        />
      </div>

      <!-- if no result found -->
      <vs-alert
        v-if="movies.length === 0"
        active="true"
      >
        No data
      </vs-alert>
    </div>
  </div>
</template>

<script setup>
import { toRefs, defineProps, ref } from 'vue';
import MoviesItem from './MoviesItem.vue';
import MoviesSkeleton from './MoviesSkeleton.vue';

const currentPage = ref(1);

const pageSize = 10;

const props = defineProps({
  movies: {
    type: Array,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  loading: {
    type: Boolean,
    required: false,
  },
});

const { movies, loading } = toRefs(props);

</script>

<style>
  .vs-pagination--mb {
    justify-content: center !important;
  }
</style>
