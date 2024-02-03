<script setup>

import IngredientComponent from "@/components/IngredientComponent.vue";
import ImageComponent from "@/components/ImageComponent.vue";
import MealCategoryBadgeComponent from "@/components/MealCategoryBadgeComponent.vue";

defineProps({
  meal: null
})

</script>

<template>
  <Transition
      mode="out-in"
      appear
      enter-active-class="meals-details-enter-active"
      enter-from-class="meals-details-enter-from"
  >
    <div class="rounded-lg shadow-md p-6">
      <div class="flex gap-10 w-full">
        <div>
          <h1 class="text-3xl font-bold mb-2 text-white">{{ meal.name }}</h1>
          <MealCategoryBadgeComponent :content="meal.category"/>
          <ImageComponent :imageUrl="meal.imageUrl" :name="meal.name"/>
        </div>
        <div class="border-r border-gray-200 h-32 my-auto mx-6"></div>
        <div>
          <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
          <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div v-for="(ingredient, index) in meal.ingredients" :key="index">
              <IngredientComponent :name="ingredient"/>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8">
        <h2 class="text-2xl font-semibold mb-4">Cooking Instructions</h2>
        <div class="grid gap-4">
          <div v-for="(instruction, index) in meal.instructions" :key="index"
               class="p-4 rounded-lg shadow-md bg-gray-800">
            <h3 class="text-lg font-medium text-white mb-2">{{ index + 1 }}. {{ instruction }}</h3>
            <div class="border-t border-gray-600 mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>

</style>