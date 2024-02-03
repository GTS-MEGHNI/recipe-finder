<script setup>

defineProps({
  meal: null
})
import ImageComponent from "@/components/ImageComponent.vue";
import MealCategoryBadgeComponent from "@/components/MealCategoryBadgeComponent.vue";
</script>

<template>
  <div class="flex gap-10 w-full rounded-lg shadow-md p-6">
    <div>
      <h1 class="text-3xl font-bold mb-2 text-white">{{ meal.name }}</h1>
      <MealCategoryBadgeComponent :content="meal.category"/>
      <ImageComponent :imageUrl="meal.imageUrl" :name="meal.name"/>
    </div>
    <div class="border-r border-gray-200 h-32 my-auto mx-6"></div>
    <div>
      <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <div v-for="(ingredient, index) in meal.ingredients" :key="index">
          <div class="rounded-lg shadow-md overflow-hidden bg-gray-800">
            <h2 class="text-xl font-semibold py-4 px-6 bg-primary text-white">{{ ingredient }}</h2>
            <div class="w-40 mx-auto mb-4">
              <ImageComponent :shadow="false" :name="ingredient" :imageUrl="`https://www.themealdb.com/images/ingredients/${ingredient}.png`"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>