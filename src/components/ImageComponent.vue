<script setup>
defineProps({
  imageUrl: null,
  name: null,
  shadow: null
})
</script>

<template>
  <div class="relative">
    <img :src="imageUrl" :alt="name" class="w-full rounded mt-4">
    <div v-if="shadow" class="absolute inset-0 bg-gradient-to-r from-transparent to-black"></div>
  </div>

</template>

<style scoped>

.bg-gradient-to-r {
  background-image: linear-gradient(to bottom right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1));
}

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

</style>