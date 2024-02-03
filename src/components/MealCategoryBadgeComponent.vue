<script setup>

defineProps({
  content: null
})

</script>

<template>
  <div>
    <span class="text-white px-2 py-1 bg-blue-600 rounded-full text-xs uppercase font-semibold tracking-wide"> {{ content }}</span>
  </div>
</template>