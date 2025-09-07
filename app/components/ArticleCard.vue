<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  }
})
</script>

<template>
  <NuxtLink
    :to="path"
    :aria-label="title"
    class="flex cursor-pointer flex-col gap-2"
  >
    <div class="flex flex-col">
      <h3 class="text-lg font-semibold">
        {{ title }}
      </h3>
      <span class="text-xs text-muted">{{ date }}</span>
    </div>
  </NuxtLink>
</template>
