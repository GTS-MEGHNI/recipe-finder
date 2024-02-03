<script setup>
import {computed} from "vue";
import MealImageComponent from "@/components/MealImageComponent.vue";

let props = defineProps({
  id: null,
  name: null,
  category: null,
  imageUrl: null,
})

function showDetails() {
  console.log(props.id)
}

const truncatedName = computed(() => {

})
</script>

<template>
  <div @click="showDetails" class="bg-gray-800 text-white rounded-lg shadow-md p-6 w-full mx-auto cursor-pointer">
    <div class="w-fit h-fit" @click.stop="">
      <h1 class="truncate text-lg font-medium mb-2 cursor-auto w-fit">Name {{ name }}</h1>
      <div class="flex items-center mb-4 cursor-auto w-fit">
        <span class="px-2 py-1 bg-blue-600 rounded-full text-xs uppercase font-semibold tracking-wide"> {{ category }}</span>
      </div>
    </div>
    <MealImageComponent :imageUrl="imageUrl"/>
  </div>
</template>

<style scoped>

.truncate {
  width: 200px; /* Adjust this value as needed */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>