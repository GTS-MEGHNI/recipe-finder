<script setup>

</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="spinner">
      <div class="spinner-circle"></div>
    </div>
    <h1 class="text-lg font-semibold text-white">Loading, please wait...</h1>
  </div>
</template>

<style scoped>
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
}

.spinner-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: #0078D4; /* Fluent Design Blue */
  animation: spinner-animation 1.5s linear infinite;
}

@keyframes spinner-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>