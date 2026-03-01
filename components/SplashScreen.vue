<template>
  <Transition name="splash-fade">
    <div
      class="fixed inset-0 z-[80] flex items-center justify-center bg-black"
    >
      <div class="splash-hand-wrap h-56 w-56 md:h-72 md:w-72 relative">
        <!-- Weiße Hand: immer sichtbar -->
        <img
          src="/images/Icon_Hand.png"
          alt="Das Kammerl Logo"
          class="splash-hand-white absolute inset-0 h-full w-full object-contain"
        >
        <!-- Lila füllt von unten nach oben (gleiche Handform als Maske) -->
        <div
          class="splash-fill absolute inset-0"
          style="background-color: var(--primary)"
          @animationend="onSplashFillEnd"
        />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const emit = defineEmits<{ close: [] }>()

function onSplashFillEnd() {
  emit('close')
}

onMounted(() => {
  // Fallback: Falls animationend nicht feuert, nach 1,2 s ausblenden (Füll-Animation ist 1 s)
  setTimeout(() => {
    emit('close')
  }, 1200)
})
</script>

<style scoped>
.splash-hand-wrap {
  overflow: visible;
}

.splash-hand-white {
  filter: brightness(0) invert(1);
  transform-origin: center center;
}

.splash-fill {
  --primary: #8e3a76;
  background-color: var(--primary);
  -webkit-mask-image: url('/images/Icon_Hand.png');
  mask-image: url('/images/Icon_Hand.png');
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  animation: splash-fill-up 1s ease-out forwards;
}

@keyframes splash-fill-up {
  from {
    clip-path: inset(100% 0 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

.splash-fade-enter-active,
.splash-fade-leave-active {
  transition: opacity 0.1s ease-out;
}

.splash-fade-enter-from,
.splash-fade-leave-to {
  opacity: 0;
}
</style>
