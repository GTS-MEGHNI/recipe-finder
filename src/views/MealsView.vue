<script setup>

import SearchComponent from "@/components/SearchComponent.vue";
import MealsListComponent from "@/components/MealsListComponent.vue";
import NotFoundComponent from "@/components/NotFoundComponent.vue";
import MealsLoaderComponent from "@/components/MealsLoaderComponent.vue";
import {onBeforeMount, onMounted, ref} from "vue";
import {MealService} from "@/services/MealService.js";
import {useStore} from "vuex";


let loading = ref(false)
let test = ref(true)

onBeforeMount(() =>
    MealService.fetchMeals(loading)
)

onMounted(() => {
  loading.value = true
  setTimeout(() => {
    test.value = false
  }, 5000)
})

const setLoading = (value) => {
  loading.value = value
}

const store = useStore()
const meals = store.getters.getMeals

</script>

<template>
  <div>
    <div class="container mx-auto flex flex-col">
      <SearchComponent :setLoading="setLoading" class="mt-20"/>
      <div>
        <Transition
            mode="out-in"
            appear
            enter-active-class="custom-enter-active"
            leave-active-class="custom-leave-active"
            enter-from-class="custom-enter-from"
            leave-to-class="custom-leave-to">
          <MealsListComponent v-if="meals.length > 0" :meals="meals"/>
        </Transition>
        <MealsLoaderComponent v-if="loading"/>
        <NotFoundComponent v-if="meals.length === 0 && !loading"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>