<script setup>

import SearchComponent from "@/components/SearchComponent.vue";
import MealsListComponent from "@/components/MealsListComponent.vue";
import NotFoundComponent from "@/components/NotFoundComponent.vue";
import MealsLoaderComponent from "@/components/MealsLoaderComponent.vue";
import {onBeforeMount, onMounted, ref, provide} from "vue";
import {MealService} from "@/services/MealService.js";
import {useStore} from "vuex";


let loading = ref(false)
let leavingToDetails = ref(false)
const store = useStore()
const meals = store.getters.getMeals

const setters = {
  setLoading: (value) => loading.value = value,
  setLeavingToDetails: (value) => leavingToDetails.value = value
}

provide('SetLeavingToDetails', setters.setLeavingToDetails)

onBeforeMount(() =>
    MealService.fetchMeals(loading)
)

onMounted(() => {
  loading.value = true
})



</script>

<template>
  <Transition
      mode="out-in"
      appear
      name="fade"
      leave-active-class="meals-view-custom-leave-active"
      leave-to-class="meals-view-custom-leave-to"
  >
    <div v-if="!leavingToDetails">
      <div class="container mx-auto flex flex-col">
        <SearchComponent :setLoading="setters.setLoading" class="mt-20"/>
        <div>
          <MealsListComponent v-if="meals.length > 0" :meals="meals"/>
          <MealsLoaderComponent v-if="loading"/>
          <NotFoundComponent v-if="meals.length === 0 && !loading"/>
        </div>
      </div>
    </div>
  </Transition>

</template>

<style scoped>

</style>