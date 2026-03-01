<template>
  <section class="bg-altbg py-16 sm:py-20">
    <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <p class="text-xs font-bold uppercase tracking-[0.2em] text-accentdark">Partnerschaftsklassen</p>
      <h2 class="mt-3 text-3xl font-bold text-dark sm:text-4xl">Sponsoring-Pakete</h2>

      <div class="mt-8 overflow-x-auto rounded-2xl border border-primary/15 bg-white shadow-md">
        <table class="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr>
              <th class="bg-altbg/80 p-3 font-semibold text-dark sm:p-4">Eigenschaft</th>
              <th
                v-for="plan in plans"
                :key="plan.id"
                class="p-3 text-center font-bold text-white sm:p-4"
                :class="plan.headerBg"
              >
                {{ plan.title }}
                <p v-if="plan.subtitle" class="mt-0.5 text-xs font-normal opacity-95">{{ plan.subtitle }}</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, rowIndex) in tableRows"
              :key="row.label"
              :class="rowIndex % 2 === 1 ? 'bg-altbg/40' : ''"
            >
              <td class="border-t border-primary/10 p-3 font-medium text-dark sm:p-4">{{ row.label }}</td>
              <td
                v-for="(cell, colIndex) in row.values"
                :key="plans[colIndex].id"
                class="border-t border-primary/10 p-3 text-center sm:p-4"
              >
                <span v-if="cell === true" class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary" aria-hidden="true">✓</span>
                <span v-else-if="cell" class="text-muted" v-html="cell" />
                <span v-else class="text-muted">–</span>
              </td>
            </tr>
            <!-- Letzte 3 Zeilen: nur Trennlinie, Rest wie oben -->
            <tr class="border-t-2 border-primary/25 font-medium">
              <td class="border-t border-primary/10 p-3 text-dark sm:p-4">Mindestlaufzeit</td>
              <td
                v-for="plan in plans"
                :key="plan.id"
                class="border-t border-primary/10 p-3 text-center text-muted sm:p-4"
              >
                {{ plan.minimumTerm }}
              </td>
            </tr>
            <tr :class="tableRows.length % 2 === 1 ? 'bg-altbg/40' : ''" class="font-medium">
              <td class="border-t border-primary/10 p-3 text-dark sm:p-4">Anzahl Sponsoren</td>
              <td
                v-for="plan in plans"
                :key="plan.id"
                class="border-t border-primary/10 p-3 text-center text-muted sm:p-4"
              >
                {{ plan.sponsorCount ?? '–' }}
              </td>
            </tr>
            <tr class="font-medium">
              <td class="border-t border-primary/10 p-3 text-dark sm:p-4">Preis</td>
              <td
                v-for="plan in plans"
                :key="plan.id"
                class="border-t border-primary/10 p-3 text-center font-bold text-primary sm:p-4"
              >
                {{ plan.price }}
              </td>
            </tr>
            <!-- Button -->
            <tr>
              <td class="border-t border-primary/15 p-3 sm:p-4"></td>
              <td
                v-for="plan in plans"
                :key="plan.id"
                class="border-t border-primary/15 p-3 sm:p-4"
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc0Dp8SmKTix6MK79pxjOoW1CYwl-pKZnurHXj1jk3ChH6rtA/viewform?pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block w-full rounded-xl bg-primary px-3 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-accentdark sm:py-3"
                >
                  Paket anfragen
                </a>
              </td>
            </tr>
          </tbody>
        </table>
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
    sponsorCount: null,
    minimumTerm: 'Keine Mindestlaufzeit',
    price: '500 € / Jahr'
  },
  {
    id: 'bronze',
    title: 'Bronze-Sponsor',
    subtitle: null,
    headerBg: 'bg-amber-700',
    sponsorCount: null,
    minimumTerm: 'Mindestlaufzeit 3 Jahre',
    price: '1.100 € / Jahr'
  },
  {
    id: 'silber',
    title: 'Silber-Sponsor',
    subtitle: null,
    headerBg: 'bg-gray-500',
    sponsorCount: null,
    minimumTerm: 'Mindestlaufzeit 3 Jahre',
    price: '2.225 € / Jahr'
  },
  {
    id: 'gold',
    title: 'Gold-Sponsor',
    subtitle: 'Premium-Partner',
    headerBg: 'bg-amber-500',
    sponsorCount: '3–6 Sponsoren',
    minimumTerm: 'Mindestlaufzeit 3 Jahre',
    price: '5.550 € / Jahr'
  },
  {
    id: 'namenssponsor',
    title: 'Namenssponsor',
    subtitle: 'Exklusivpartner',
    headerBg: 'bg-primary',
    sponsorCount: '1 exklusiver Sponsor',
    minimumTerm: 'Mindestlaufzeit 3 Jahre',
    price: '12.500 € / Jahr'
  }
]

// Zeilen = Eigenschaften, Werte pro Paket: true = Häkchen, string = Text, false = –
const tableRows = [
  { label: 'Logo in der Halle', values: [true, true, true, true, true] },
  { label: 'Logo auf der Website', values: [false, true, true, true, true] },
  { label: 'Sponsorenschild', values: ['30 × 20 cm', '40 × 30 cm', '60 × 40 cm', '80 × 60 cm', '100 × 70 cm'] },
  { label: 'Hohe Sichtbarkeit / Premium-Präsenz', values: [false, false, false, true, true] },
  { label: 'Eigene Challenge', values: [false, false, false, true, true] },
  { label: 'Namenszusatz der Halle', values: [false, false, false, false, true] },
  { label: 'Werbung auf Bildschirm im Warteraum', values: [false, false, false, true, true] },
  { label: 'Mitarbeiter-Rabatt', values: ['–', '–', '15%', '25%', '50%'] }
]
</script>
