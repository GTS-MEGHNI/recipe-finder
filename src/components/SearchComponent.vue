<script setup>

  let props = defineProps({
    setLoading: null
  })

  import {ref} from "vue";
  import {MealService} from "@/services/MealService.js";

  let searchInput = ref('')

  function startSearch() {
    MealService.search(searchInput.value, props.setLoading)
    props.setLoading(true)
  }
</script>

<template>
  <div class="relative">
    <input v-model="searchInput" type="text" placeholder="Search" class="bg-white border border-gray-300 rounded-md py-2 pl-4 pr-10 block w-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
    <button @click="startSearch" type="button" class="absolute inset-y-0 right-0 px-3 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
      Search
    </button>
  </div>
</template>

<style scoped>

</style>