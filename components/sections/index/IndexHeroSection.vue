<template>
  <section class="bg-gradient-to-b from-altbg to-background py-16 sm:py-20">
    <div class="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div>
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-accentdark">Das Kammerl | Bouldern</p>
        <h1 class="mt-3 text-4xl font-extrabold leading-tight text-dark sm:text-5xl">Bouldern in Wieselburg.</h1>
        <p class="mt-4 max-w-xl text-base text-muted sm:text-lg">
          {{ heroIntro }}
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <NuxtLink to="/price" class="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-accentdark">Zu den Preisen</NuxtLink>
          <NuxtLink to="/location" class="rounded-xl border border-primary/30 px-5 py-3 text-sm font-semibold text-primary hover:border-accentdark hover:text-accentdark">Zur Anfahrt</NuxtLink>
        </div>
      </div>

      <ImageSlider :images="heroImages" label="Beispielbilder" />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  heroIntro: string
  heroImages: { src: string; alt: string }[]
}>()
</script>
