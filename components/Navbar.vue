<template>
  <header class="sticky top-0 z-50 border-b border-primary/15 bg-background/90 backdrop-blur">
    <div class="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <NuxtLink to="/" class="group ml-3 flex items-center gap-3">
        <img
          src="/images/Icon_Hand.png"
          alt="Das Kammerl Hand-Logo"
          class="h-9 w-9 object-contain transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:rotate-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(142,58,118,0.5)]"
        >
        <span class="text-lg font-extrabold tracking-tight text-primary">Das Kammerl</span>
      </NuxtLink>

      <nav class="hidden items-center gap-1 text-sm font-semibold lg:flex">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="motion-link rounded-md px-3 py-2 transition-colors"
          :class="isActive(item.to) ? 'bg-primary/10 text-primary' : 'text-dark hover:bg-primary/5 hover:text-accentdark'"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSc0Dp8SmKTix6MK79pxjOoW1CYwl-pKZnurHXj1jk3ChH6rtA/viewform?pli=1"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accentdark"
      >
        Sponsor werden
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/vision', label: 'Vision' },
  { to: '/price', label: 'Preise' },
  { to: '/location', label: 'Location' },
  { to: '/sponsoren', label: 'Sponsoren' }
]

const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>


