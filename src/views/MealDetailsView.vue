<script setup>

import {useStore} from "vuex";
import {useRoute} from "vue-router";
import MealsDetailsComponent from "@/components/MealsDetailsComponent.vue";


let store = useStore()
let router = useRoute()
let meal = store.getters.getMealById(parseInt(router.params.id))

</script>

<template>
    <div class="text-white flex">
      <MealsDetailsComponent :meal="meal"/>
    </div>
</template>
<style scoped>

</style>
