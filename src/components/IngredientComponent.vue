<script setup>
import ImageComponent from "@/components/ImageComponent.vue";

defineProps({
  name: null
})
</script>

<template>
  <div class="w-fit mx-auto rounded-lg shadow-md overflow-hidden">
    <h1 class="text-xl font-semibold text-center py-4">{{ name }}</h1>
    <div class="w-40 mx-auto">
      <ImageComponent :name="name" :imageUrl="`https://www.themealdb.com/images/ingredients/${name}.png`"/>
    </div>
  </div>
</template>

<style scoped>

</style>