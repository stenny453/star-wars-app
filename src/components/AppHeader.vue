<template>
  <div class="main-header">
    <vs-navbar
      v-model="activeItem"
      class="nabarx"
      active-text-color="#5b3cc4"
      type="flat"
    >
      <div class="navbar-item">
        <div slot="title">
          <vs-navbar-title>
            {{ title }}
          </vs-navbar-title>
        </div>

        <vs-navbar-item
          v-for="path in paths"
          :key="path.index"
          :index="path.index"
        >
          <RouterLink :to="path.link">
            {{ path.name }}
          </RouterLink>
        </vs-navbar-item>
      </div>

      <div class="navbar-search">
        <vs-input
          v-model="search"
          icon="search"
          placeholder="Search"
        />
      </div>
    </vs-navbar>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const title = ref('Star Wars');

const activeItem = ref(0);

const search = ref('');

/**
 * Paths list
 */
const paths = ref([
  {
    index: 0,
    link: '/',
    name: 'Movies',
  },
  {
    index: 1,
    link: '/classic-movies',
    name: 'Classics',
  },
]);

</script>

<style>
  .main-header {
    padding: 10px;
    position: sticky;
    z-index: 2;
    top: 0;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .vs-con-items {
    width: 100%;
    justify-content: space-between !important;
    min-height: 60px;
    padding-right: 10px;
  }

  .navbar-item {
    display: flex;
    align-items: center;
  }

  .vs-input--icon {
    top: 4px !important;
  }

  @media screen and (max-width: 800px) {
    .navbar-item {
      flex-direction: column;
    }

    .navbar-search {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
</style>
