<template>
  <section class="bg-gradient-to-b from-altbg to-background pt-6 pb-16 sm:pt-10 sm:pb-20">
    <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <p class="text-xs font-bold uppercase tracking-[0.2em] text-accentdark">Sponsoring</p>
      <h1 class="mt-3 max-w-3xl text-4xl font-extrabold leading-tight text-dark sm:text-5xl">
        Sponsoring und Partnerschaften im Aufbau.
      </h1>
      <p class="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        Mit deiner Unterstützung bauen wir Angebot, Infrastruktur und Community in Wieselburg weiter aus.
      </p>

      <div class="mt-8 w-full">
        <ProgressBar :current-amount="currentAmount" :target-amount="targetAmount" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  currentAmount: number
  targetAmount: number
}>()
</script>
