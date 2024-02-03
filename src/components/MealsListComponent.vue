<script setup>
import MealComponent from "@/components/MealCardComponent.vue";

const props = defineProps({
  meals:null
})
</script>

<template>
  <div class="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
    <div v-for="(meal, index) in meals" :key="index">
      <MealComponent :id="meal.id"
                     :name="meal.name"
                     :category="meal.category"
                     :imageUrl="meal.imageUrl"
      />
    </div>
  </div>
</template>

<style scoped>

</style>