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
  title: 'Sponsor werden | Das Kammerl Wieselburg',
  description:
    'Sponsoring bei Das Kammerl Wieselburg: Mehrwert für Sponsoren, Partnerschaftsklassen von Supporter bis Namenssponsor und direkte Anfrage.'
})
</script>
