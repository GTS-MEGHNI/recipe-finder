<script setup>
import MealComponent from "@/components/MealCardComponent.vue";

defineProps({
  meals: null
})
</script>

<template>
  <div class="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
    <div v-for="(meal, index) in meals" :key="index">
      <Transition
          mode="out-in"
          appear
          enter-active-class="meal-card-custom-enter-active"
          enter-from-class="meal-card-custom-enter-from">
        <MealComponent :id="meal.id"
                       :name="meal.name"
                       :category="meal.category"
                       :imageUrl="meal.imageUrl"
        />
      </Transition>
    </div>
  </div>
</template>

<style scoped>

</style>