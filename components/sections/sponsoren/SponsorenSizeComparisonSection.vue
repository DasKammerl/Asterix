<template>
  <section class="py-16 sm:py-20">
    <div class="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
      <p class="text-xs font-bold uppercase tracking-[0.2em] text-accentdark">Übersicht</p>
      <h2 class="mt-3 text-3xl font-bold text-dark sm:text-4xl">Größenvergleich Sponsorenschilder</h2>
      <p class="mt-2 text-sm text-muted">Maßstab 1:10 – relative Darstellung der Schildgrößen.</p>

      <!-- Legende -->
      <div class="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
        <span v-for="item in sizes" :key="item.id" class="flex items-center gap-2 font-medium">
          <span
            class="h-4 w-4 rounded shrink-0"
            :class="item.colorClass"
          />
          <span class="text-dark">{{ item.name }}</span>
          <span class="text-muted">{{ item.size }}</span>
        </span>
      </div>

      <!-- Stapel-Visualisierung: Rechtecke im echten Maßstab (100:70, 80:60, …) -->
      <div class="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-center">
        <!-- Container mit Seitenverhältnis 100:70 wie das größte Schild -->
        <div class="relative w-full max-w-[min(400px,90vw)] shrink-0" style="aspect-ratio: 100/70;">
          <div
            v-for="(item, index) in sizeLayers"
            :key="item.id"
            class="absolute flex items-center justify-center rounded-lg border-2 border-white shadow-md"
            :class="item.colorClass"
            :style="{
              left: item.left + '%',
              top: item.top + '%',
              width: item.width + '%',
              height: item.height + '%'
            }"
          >
          </div>
        </div>
        <p class="max-w-xs text-center text-sm text-muted sm:text-left">
          Von außen nach innen: Namenssponsor → Gold → Silber → Bronze → Supporter
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sizes = [
  { id: 'namenssponsor', name: 'Namenssponsor', size: '100 × 70 cm', colorClass: 'bg-primary' },
  { id: 'gold', name: 'Gold-Sponsor', size: '80 × 60 cm', colorClass: 'bg-amber-500' },
  { id: 'silber', name: 'Silber-Sponsor', size: '60 × 40 cm', colorClass: 'bg-gray-500' },
  { id: 'bronze', name: 'Bronze-Sponsor', size: '40 × 30 cm', colorClass: 'bg-amber-700' },
  { id: 'supporter', name: 'Supporter', size: '30 × 20 cm', colorClass: 'bg-blue-600' }
]

// Rechtecke im echten Maßstab (cm), zentriert ineinander. Referenz: äußeres 100×70.
const REF_W = 100
const REF_H = 70

const sizeLayers = [
  { id: 'namenssponsor', w: 100, h: 70, colorClass: 'bg-primary' },
  { id: 'gold', w: 80, h: 60, colorClass: 'bg-amber-500' },
  { id: 'silber', w: 60, h: 40, colorClass: 'bg-gray-500' },
  { id: 'bronze', w: 40, h: 30, colorClass: 'bg-amber-700' },
  { id: 'supporter', w: 30, h: 20, colorClass: 'bg-blue-600' }
].map(({ id, w, h, colorClass }) => ({
  id,
  colorClass,
  left: (REF_W - w) / 2,
  top: ((REF_H - h) / 2 / REF_H) * 100,
  width: w,
  height: (h / REF_H) * 100
}))
</script>
