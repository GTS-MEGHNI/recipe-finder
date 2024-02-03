<script setup>
import SpinnerComponent from "@/components/SpinnerComponent.vue";
import {ref} from "vue";

let props = defineProps({
  imageUrl: null
})

const loading = ref(true)

function disableLoading() {
  loading.value = false
}
</script>


<template>
  <div class="relative w-[246px] h-[246px]">
    <div v-if="loading" class="h-full w-full flex justify-center items-center">
      <SpinnerComponent/>
    </div>
    <div v-show="!loading">
      <img :src="imageUrl" alt="" class="w-full h-auto max-w-full rounded" @load="disableLoading">
      <div class="absolute inset-0 bg-gradient-to-r from-transparent to-black"></div>
    </div>
  </div>
</template>

<style scoped>
.relative {
  position: relative;
}

.absolute {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}


</style>