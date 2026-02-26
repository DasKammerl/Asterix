<template>
  <div>
    <Navbar />
    <main class="bg-background">
      <ImpressumContentSection />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
usePageSeo({
  title: 'Impressum',
  description: 'Impressum und rechtliche Angaben – Das Kammerl, Bewegungsgarage Wieselburg.'
})
</script>
