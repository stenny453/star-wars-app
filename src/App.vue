<template>
  <div id="app">
    <div class="main-app">
      <AppHeader
        :title="appTitle"
        :paths="AppPaths"
      />
      <ErrorHandler />
      <InitializeData />
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import ErrorHandler from './components/ErrorHandler/ErrorHandler.vue';
import InitializeData from './components/Initialize/InitializeData.vue';
import AppPaths from './router/path';

const appTitle = 'Star Wars';

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.main-app {
  max-width: 1100px;
  margin: 0 auto 20px;
  position: relative;
  z-index: 20;
}
</style>
