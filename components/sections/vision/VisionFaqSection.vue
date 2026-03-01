<template>
  <section class="py-8">
    <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="rounded-3xl border border-primary/20 bg-white p-6 shadow-md sm:p-8">
        <h2 class="text-2xl font-bold text-dark">Kurz beantwortet</h2>
        <div class="mt-5 space-y-3">
          <details class="rounded-xl border border-primary/15 bg-altbg p-4">
            <summary class="cursor-pointer font-semibold text-dark">Wofür steht Das Kammerl langfristig?</summary>
            <p class="mt-2 text-sm text-muted">Für einen offenen Boulder-Ort mit fairem Zugang, klarer Struktur und echter Community in Wieselburg.</p>
          </details>
          <details class="rounded-xl border border-primary/15 bg-altbg p-4">
            <summary class="cursor-pointer font-semibold text-dark">Wie hilft die Vision mir als Besucher?</summary>
            <p class="mt-2 text-sm text-muted">Du bekommst einfache Infos, faire Preise und einen klaren Einstieg vom ersten Besuch an.</p>
          </details>
          <details class="rounded-xl border border-primary/15 bg-altbg p-4">
            <summary class="cursor-pointer font-semibold text-dark">Warum liegt der Fokus auf Gemeinschaft?</summary>
            <p class="mt-2 text-sm text-muted">Weil Motivation, Respekt und gemeinsame Entwicklung die Qualität jeder Session spürbar verbessern.</p>
          </details>
        </div>

        <div class="mt-6 flex flex-wrap gap-3">
          <NuxtLink to="/price" class="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-accentdark">Preise ansehen</NuxtLink>
          <NuxtLink to="/location" class="rounded-xl border border-primary/30 px-5 py-3 text-sm font-semibold text-primary hover:border-accentdark hover:text-accentdark">Zur Anfahrt</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
