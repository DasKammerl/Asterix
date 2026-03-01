<template>
  <div
    class="relative h-72 overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-card select-none touch-pan-y"
    @touchstart.passive="onTouchStart"
    @touchmove.passive="onTouchMove"
    @touchend="onTouchEnd"
  >
    <template v-if="hasImages">
      <p
        v-if="label"
        class="absolute left-3 top-3 z-10 rounded bg-white/80 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-primary"
      >
        {{ label }}
      </p>
      <div
        v-for="(image, index) in images"
        :key="image.src"
        class="absolute inset-0 transition-opacity duration-700 ease-in-out"
        :class="index === currentIndex ? 'opacity-100' : 'opacity-0'"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          :title="image.alt"
          class="h-full w-full object-cover pointer-events-none"
          :loading="index === 0 ? 'eager' : 'lazy'"
          decoding="async"
          width="1600"
          height="900"
          sizes="(max-width: 1024px) 100vw, 50vw"
        >
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-dark/45 via-transparent to-dark/10 pointer-events-none" />
      <!-- Links: Pfeil links (w-resize), Rechts: Pfeil rechts (e-resize) – Klick wechselt Bild -->
      <button
        type="button"
        class="absolute left-0 top-0 z-20 h-full w-1/4 min-w-[80px] cursor-w-resize"
        aria-label="Vorheriges Bild"
        @click="goPrev"
      />
      <button
        type="button"
        class="absolute right-0 top-0 z-20 h-full w-1/4 min-w-[80px] cursor-e-resize"
        aria-label="Nächstes Bild"
        @click="goNext"
      />
      <div class="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 pointer-events-none">
        <p v-if="images[currentIndex]?.alt" class="rounded-xl bg-white/85 px-3 py-2 text-xs font-semibold text-primary">
          {{ images[currentIndex].alt }}
        </p>
        <div class="flex gap-1.5 pointer-events-auto">
          <span
            v-for="(_, index) in images"
            :key="`dot-${index}`"
            class="h-2 w-2 rounded-full transition-all duration-300"
            :class="index === currentIndex ? 'w-5 bg-white' : 'bg-white/55'"
          />
        </div>
      </div>
    </template>
    <div
      v-else
      class="absolute inset-0 grid place-items-center bg-gradient-to-br from-altbg to-background p-6 text-center text-sm font-medium text-muted"
    >
      Keine Bilder hinterlegt.
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    images: { src: string; alt: string }[]
    intervalMs?: number
    label?: string
  }>(),
  { intervalMs: 3800, label: '' }
)

const currentIndex = ref(0)
const hasImages = computed(() => props.images.length > 0)
let sliderInterval: ReturnType<typeof setInterval> | undefined

const SWIPE_THRESHOLD = 50
let touchStartX = 0

function goNext() {
  if (props.images.length < 2) return
  currentIndex.value = (currentIndex.value + 1) % props.images.length
  resetAutoPlay()
}

function goPrev() {
  if (props.images.length < 2) return
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
  resetAutoPlay()
}

function resetAutoPlay() {
  if (sliderInterval) clearInterval(sliderInterval)
  if (props.images.length < 2) return
  sliderInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.images.length
  }, props.intervalMs)
}

function onTouchStart(e: TouchEvent) {
  touchStartX = e.touches[0].clientX
}

function onTouchMove(_e: TouchEvent) {
  // passive – keine preventDefault nötig für reines Auslesen
}

function onTouchEnd(e: TouchEvent) {
  if (!e.changedTouches[0]) return
  const deltaX = e.changedTouches[0].clientX - touchStartX
  if (Math.abs(deltaX) < SWIPE_THRESHOLD) return
  if (deltaX > 0) goPrev()
  else goNext()
}

onMounted(() => {
  resetAutoPlay()
})

onBeforeUnmount(() => {
  if (sliderInterval) clearInterval(sliderInterval)
})
</script>
