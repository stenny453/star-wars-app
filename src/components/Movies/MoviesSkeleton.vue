<template>
  <div>
    <vs-row vs-justify="center">
      <vs-col
        type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="8"
      >
        <vs-card />
      </vs-col>
    </vs-row>
  </div>
</template>

<style scoped>
    .con-vs-card {
        height: 100px;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: skeleton-animation 1.5s infinite;
        animation: pulse-bg 1.5s infinite;
    }

    @keyframes pulse-bg {
        0% {
        background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }
</style>
