<template>
  <section class="bg-altbg py-16 sm:py-20">
    <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <p class="text-xs font-bold uppercase tracking-[0.2em] text-accentdark">Partnerschaftsklassen</p>
      <h2 class="mt-3 text-3xl font-bold text-dark sm:text-4xl">Sponsoring-Pakete</h2>
      <!-- Pakete gleichmäßig nebeneinander, ganzer Inhalt sichtbar -->
      <div class="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        <article
          v-for="(plan, index) in plans"
          :key="plan.id"
          class="flex min-h-0 min-w-0 flex-col overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-md transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
        >
          <!-- Kopfzeile mit Paketfarbe, oben abgerundet -->
          <div
            class="shrink-0 rounded-t-2xl px-4 py-3.5 text-white sm:px-5 sm:py-4"
            :class="plan.headerBg"
          >
            <h3 class="text-base font-bold leading-tight sm:text-lg">{{ plan.title }}</h3>
            <p v-if="plan.subtitle" class="mt-0.5 text-xs font-medium opacity-95 sm:text-sm">{{ plan.subtitle }}</p>
          </div>

          <div class="flex min-h-0 flex-1 flex-col p-4 sm:p-5">
            <ul class="space-y-1.5 text-sm text-muted sm:space-y-2">
              <li
                v-for="(feature, i) in plan.features"
                :key="i"
                class="flex items-start gap-2 leading-snug"
              >
                <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span v-html="feature" class="break-words" />
              </li>
            </ul>
            <!-- Preis, Laufzeit und Button gemeinsam am unteren Rand, unten abgerundet – gleiche Höhe bei allen -->
            <div
              class="mt-auto rounded-b-2xl bg-altbg px-4 py-4 sm:px-5 sm:py-5 -mx-4 -mb-4 sm:-mx-5 sm:-mb-5"
              :class="{ 'mt-3': index === plans.length - 1 }"
            >
              <!-- Fester Platz für 1–2 Zeilen, damit der Block überall gleich hoch ist -->
              <div class="min-h-[2.75rem]">
                <p v-if="plan.sponsorCount" class="whitespace-nowrap text-sm font-semibold text-dark">
                  {{ plan.sponsorCount }}
                </p>
                <p class="whitespace-nowrap text-sm font-semibold text-dark" :class="{ 'mt-0.5': plan.sponsorCount }">
                  {{ plan.minimumTerm }}
                </p>
              </div>
              <p class="mt-1 text-lg font-extrabold text-primary sm:text-xl">{{ plan.price }}</p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc0Dp8SmKTix6MK79pxjOoW1CYwl-pKZnurHXj1jk3ChH6rtA/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-4 block w-full rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accentdark"
              >
                Paket anfragen
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const plans = [
  {
    id: 'supporter',
    title: 'Supporter',
    subtitle: null,
    headerBg: 'bg-blue-600',
    features: ['Logo Halle', 'Einzelschild <strong class="text-dark">30 × 20 cm</strong>'],
    sponsorCount: null,
    minimumTerm: 'Keine Mindestlaufzeit',
    price: '500 € / Jahr'
  },
  {
    id: 'bronze',
    title: 'Bronze-Sponsor',
    subtitle: null,
    headerBg: 'bg-amber-700',
    features: ['Logo Halle & Website', 'Sponsorenschild 40 × 30 cm'],
    sponsorCount: null,
    minimumTerm: 'Mindestlaufzeit 3 Jahre',
    price: '1.100 € / Jahr'
  },
  {
    id: 'silber',
    title: 'Silber-Sponsor',
    subtitle: null,
    headerBg: 'bg-gray-500',
    features: [
      'Sichtbarkeit in Halle & Website',
      'Sponsorenschild <strong class="text-dark">60 × 40 cm</strong>',
      'Mitarbeiter: <strong class="text-dark">15% Rabatt</strong>'
    ],
    sponsorCount: null,
    minimumTerm: 'Mindestlaufzeit 3 Jahre',
    price: '2.225 € / Jahr'
  },
  {
    id: 'gold',
    title: 'Gold-Sponsor',
    subtitle: 'Premium-Partner',
    headerBg: 'bg-amber-500',
    features: [
      'Hohe Sichtbarkeit in Halle & Website',
      'Eigene Challenge',
      'Sponsorenschild <strong class="text-dark">80 × 60 cm</strong>',
      'Werbung auf Bildschirm im Warteraum',
      'Mitarbeiter: <strong class="text-dark">25% Rabatt</strong>'
    ],
    sponsorCount: '3–6 Sponsoren',
    minimumTerm: 'Mindestlaufzeit 3 Jahre',
    price: '5.550 € / Jahr'
  },
  {
    id: 'namenssponsor',
    title: 'Namenssponsor',
    subtitle: 'Exklusivpartner',
    headerBg: 'bg-primary',
    features: [
      'Namenszusatz der Halle („presented by Firmenname“)',
      'Größte Präsenz in Halle, App & Website',
      'Haupt-Challenge',
      'Premium-Sponsorenschild 100 × 70 cm',
      'Werbung auf Bildschirm im Warteraum',
      'Mitarbeiter: <strong class="text-dark">50% Rabatt</strong>'
    ],
    sponsorCount: '1 exklusiver Sponsor',
    minimumTerm: 'Mindestlaufzeit 3 Jahre',
    price: '12.500 € / Jahr'
  }
]
</script>
