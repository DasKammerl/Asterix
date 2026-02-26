<template>
  <div>
    <Navbar />

    <main class="bg-background">
      <!-- Hero mit Fortschritts-Slider -->
      <SponsorenHeroSection :current-amount="0" :target-amount="75000" />

      <SectionDivider />

      <SponsorenMehrwertSection />
      <SponsorenAnsatzSection />
      <SponsoringCards />
      <SponsorenSizeComparisonSection />

      <SponsorenDirectSupportSection />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
usePageSeo({
  title: 'Sponsoren – Das Kammerl Boulderhalle',
  description:
    'Sponsoring Kammerl Bouldern Wieselburg: Partnerschaftsklassen von Supporter bis Namenssponsor. Regionale Sichtbarkeit, langfristige Partnerschaften.',
  keywords: 'Das Kammerl Sponsoring, Boulderhalle Wieselburg Sponsor'
})
</script>
