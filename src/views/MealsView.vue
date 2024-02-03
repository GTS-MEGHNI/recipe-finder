<script setup>

import SearchComponent from "@/components/SearchComponent.vue";
import MealsListComponent from "@/components/MealsListComponent.vue";
import NotFoundComponent from "@/components/NotFoundComponent.vue";
import MealsLoaderComponent from "@/components/MealsLoaderComponent.vue";
import {onBeforeMount, onMounted, ref} from "vue";
import {MealService} from "@/services/MealService.js";
import {useStore} from "vuex";


let loading = ref(false)

onBeforeMount(() =>
    MealService.fetchMeals(loading)
)

onMounted(() => {
  loading.value = true
})

const setLoading = (value) => {
  loading.value = value
}

const store = useStore()
const meals = store.getters.getMeals

</script>

<template>
  <div class="container mx-auto flex flex-col">
    <div class="mt-20">
      <SearchComponent :setLoading="setLoading"/>
    </div>
    <div>
      <MealsListComponent v-if="meals.length > 0" :meals="meals"/>
      <MealsLoaderComponent v-if="loading"/>
      <NotFoundComponent v-if="meals.length === 0 && !loading"/>
    </div>
  </div>
</template>

<style scoped>

</style>