<script setup>
let props = defineProps({
  id: null,
  name: null,
  category: null,
  imageUrl: null,
})
</script>

<template>
  <div class="bg-gray-800 text-white rounded-lg shadow-md p-6 w-full mx-auto">
    <h1 class="text-lg font-medium mb-2">Name {{ name }}</h1>
    <div class="flex items-center mb-4">
      <span class="px-2 py-1 bg-blue-600 rounded-full text-xs uppercase font-semibold tracking-wide"> {{ category }}</span>
    </div>
    <div class="relative">
      <img :src="imageUrl" alt="" class="w-full h-auto max-w-full rounded" style="max-width: 250px">
      <div class="absolute inset-0 bg-gradient-to-r from-transparent to-black"></div>
    </div>
  </div>
</template>

<style scoped>
.relative {
  position: relative;
}

.absolute {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.bg-gradient-to-r {
  background-image: linear-gradient(to bottom right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1));
}
</style>