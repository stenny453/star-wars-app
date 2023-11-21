<template>
  <div>
    <vs-row vs-justify="center">
      <vs-col
        type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="8"
        class="main-movies-item"
      >
        <vs-card>
          <div slot="header">
            <h3>
              {{ movie.title }}
            </h3>
          </div>
          <div v-if="movie.director">
            <span>
              by {{ movie.director }}
            </span>
          </div>
          <div slot="footer">
            <div v-if="movie.release_date">
              released on <i>{{ movie.release_date }}</i>
            </div>
            <vs-row vs-justify="flex-end">
              <vs-button
                color="primary"
                icon="turned_in_not"
              />
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script setup>
import { toRefs, defineProps } from 'vue';

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});

const { movie } = toRefs(props);

</script>

<style scope>
  @media screen and (max-width: 800px) {
        .main-movies-item {
          width: 90% !important;
        }
  }
</style>
