<script setup>
import MealImageComponent from "@/components/MealImageComponent.vue";
import {useRouter} from "vue-router";
import {onMounted} from "vue";
import MealCategoryBadgeComponent from "@/components/MealCategoryBadgeComponent.vue";
import ImageComponent from "@/components/ImageComponent.vue";

let props = defineProps({
  id: null,
  name: null,
  category: null,
  imageUrl: null,
})

let router = null

onMounted(() => {
  router = useRouter()
})

function showDetails() {
  router.push('/meals/'+props.id)
}

</script>

<template>
  <div @click="showDetails" class="bg-gray-800 text-white rounded-lg shadow-md p-6 w-full mx-auto cursor-pointer">
    <div class="w-fit h-fit" @click.stop="">
      <h1 class="truncate text-lg font-medium mb-2 cursor-auto w-fit">Name {{ name }}</h1>
      <div class="flex items-center mb-4 cursor-auto w-fit">
        <MealCategoryBadgeComponent :content="category"/>
      </div>
    </div>
      <ImageComponent :shadow=true :imageUrl="imageUrl"/>
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