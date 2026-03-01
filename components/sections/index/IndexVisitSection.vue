<template>
  <section id="visit" class="py-16 sm:py-20">
    <div class="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div>
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-accentdark">Besuch planen</p>
        <h2 class="mt-3 text-3xl font-bold text-dark sm:text-4xl">Komm vorbei</h2>
        <p class="mt-3 text-muted">24/7 geöffnet – Zutritt mit der Keycard-App am Handy. Standort: Bewegungsgarage, Am Bahnhof 8. Alle Tarife und Karten (24h, Monat, Jahr) findest du auf der Preisseite.</p>
      </div>
      <div class="rounded-2xl border border-primary/20 bg-white p-6 shadow-md">
        <p class="text-sm font-semibold text-dark">Schnelle Links</p>
        <div class="mt-4 flex flex-wrap gap-3">
          <NuxtLink to="/price" class="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-accentdark">Preise ansehen</NuxtLink>
          <NuxtLink to="/location" class="rounded-xl border border-primary/30 px-4 py-2 text-sm font-semibold text-primary hover:border-accentdark hover:text-accentdark">Anfahrt anzeigen</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
