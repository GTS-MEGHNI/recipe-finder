<script setup>

import {onBeforeMount} from "vue";
import {MealService} from "@/services/MealService.js";
import {useStore} from "vuex";
import MealComponent from "@/components/MealComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";

onBeforeMount(() =>
    MealService.fetchMeals()
)

const store = useStore()
const meals = store.getters.getMeals


</script>

<template>
  <div class="container mx-auto flex flex-col">
    <div class="mt-20">
      <SearchComponent/>
    </div>
    <div class="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <div v-for="(meal, index) in meals" :key="index">
        <MealComponent :id="meal.id"
                       :name="meal.name"
                       :category="meal.category"
                       :imageUrl="meal.imageUrl"
        />
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>
