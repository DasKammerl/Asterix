<template>
  <div class="space-y-3">
    <details
      v-for="(item, index) in items"
      :key="index"
      class="rounded-2xl border border-primary/20 bg-white p-4 shadow-sm"
    >
      <summary class="cursor-pointer font-semibold text-dark">{{ item.question }}</summary>
      <p class="mt-2 text-sm text-muted">{{ item.answer }}</p>
    </details>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: { question: string; answer: string }[]
}>()
</script>
