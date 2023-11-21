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
            <span class="header-title">
              {{ title }}
            </span>
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
import { ref, toRefs } from 'vue';
import { RouterLink } from 'vue-router';

const activeItem = ref(0);

const search = ref('');

// eslint-disable-next-line no-undef
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  paths: {
    type: Array,
    required: true,
  },
});

const { title, paths } = toRefs(props);

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

  .title {
    color: #5b3cc4;
    font-weight: bold;
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
