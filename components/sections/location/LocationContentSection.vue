<template>
  <section class="bg-altbg/50 py-16 sm:py-20">
    <div class="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
      <p class="text-xs font-bold uppercase tracking-[0.2em] text-accentdark">Location</p>
      <h1 class="mt-3 text-4xl font-extrabold text-dark sm:text-5xl">Standort & Anfahrt</h1>
      <p class="mt-3 max-w-2xl text-muted">
        So findest du uns: Adresse, Parken, Anreise mit ÖPNV und direkte Routenplanung in Google Maps.
      </p>

      <div class="mt-10 grid gap-6 lg:grid-cols-1">
        <article class="rounded-2xl border border-primary/10 bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
          <div class="flex items-center gap-3">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
            </span>
            <h2 class="text-xl font-bold text-dark">Adresse</h2>
          </div>
          <p class="mt-4 font-medium text-dark">
            Bewegungsgarage<br>
            <span class="text-muted">Am Bahnhof 8 · Wieselburg</span>
          </p>
          <div class="mt-5 space-y-3 text-sm text-muted">
            <p>
              <strong class="text-dark">Parken:</strong> Parkplatz vor Ort verfügbar.
              <span class="mt-1.5 block rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">
                Anmerkung: An Tagen mit Fußballspiel in der Umgebung kann die Anzahl der Parkplätze geringer sein.
              </span>
            </p>
            <p>
              <strong class="text-dark">ÖPNV:</strong> Bahnhof Wieselburg/Erlauf in der Nähe (ca. 750 m).
            </p>
            <p>
              <strong class="text-dark">Fußweg vom Bahnhof:</strong> Vom Bahnhof Wieselburg in etwa 10 Minuten zu Fuß – Richtung Ortszentrum, die Straße „Am Bahnhof“ entlang bis Hausnummer 8. Die Bewegungsgarage liegt direkt am Bahnhofsbereich.
            </p>
          </div>
        </article>

        <article class="overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-md lg:col-span-2">
          <div class="flex items-center gap-3 border-b border-primary/10 bg-white px-4 py-3 sm:px-5">
            <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" /></svg>
            </span>
            <p class="text-sm font-semibold text-dark">Karte</p>
          </div>
          <iframe
            :src="googleMapsEmbedUrl"
            class="h-72 w-full border-0 sm:h-80 lg:h-96"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
            title="Karte: Bewegungsgarage Wieselburg"
          />
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const googleMapsEmbedUrl = 'https://www.google.com/maps?q=Bewegungsgarage+Wieselburg&output=embed'
</script>
