<script setup>
import ImageComponent from "@/components/ImageComponent.vue";

defineProps({
  name: null
})
</script>

<template>
  <div class="rounded-lg shadow-md overflow-hidden bg-gray-800">
    <h2 class="text-xl font-semibold py-4 px-6 bg-primary text-white">{{ name }}</h2>
    <div class="w-40 mx-auto mb-4">
      <ImageComponent :shadow="false" :name="name" :imageUrl="`https://www.themealdb.com/images/ingredients/${name}.png`"/>
    </div>
  </div>
</template>

<style scoped>

</style>