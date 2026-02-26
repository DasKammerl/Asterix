<template>
  <div>
    <Navbar />

    <main class="bg-background">
      <IndexHeroSection :hero-intro="heroIntro" :hero-images="heroImages" />

      <SectionDivider />

      <IndexAblaufSection />

      <SectionDivider />

      <IndexFaqSection />

      <SectionDivider />

      <IndexVisitSection />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
const heroIntro = 'Die Halle ist 24/7 geöffnet – du kommst mit der Keycard-App am Handy rein. Hier findest du Preise, Standort und Antworten auf häufige Fragen.'

const heroImages = [
  { src: '/images/index_image_1.jpg', alt: 'Bouldern für alle Altersgruppen in der Boulderhalle Das Kammerl Wieselburg' },
  { src: '/images/index_image_2.jpg', alt: 'Abwechslungsreiche Kletterrouten in der Boulderhalle Kammerl' },
  { src: '/images/index_image_3.jpg', alt: 'Community und Session am Abend im Kammerl Wieselburg' }
]

usePageSeo({
  title: 'Das Kammerl – Boulderhalle Wieselburg',
  description:
    'Kammerl Bouldern in Wieselburg: Das Kammerl ist die Boulderhalle 24/7 geöffnet, Zutritt per Keycard-App. Preise, Anfahrt, Vision.',
  path: '/',
  image: '/images/index_image_1.jpg',
  keywords: 'Kammerl Bouldern, Boulderhalle Wieselburg, Das Kammerl Wieselburg'
})

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie erhalte ich Zugang?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zugang erhältst du nur über die Keycard-App auf deinem Handy: App herunterladen, registrieren, Karte in der App kaufen bzw. aktivieren und vor Ort einchecken. Ohne App ist kein Einlass möglich.'
      }
    },
    {
      '@type': 'Question',
      name: 'Brauche ich Vorerfahrung? Welche Voraussetzungen gibt es?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein, Vorerfahrung ist nicht nötig. Voraussetzung ist, dass du die App nutzt und den Haftungsausschluss digital in der App unterschreibst. Ohne diese digitale Unterschrift ist kein Zugang möglich.'
      }
    },
    {
      '@type': 'Question',
      name: 'Muss ich einen Haftungsausschluss unterschreiben?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Den Haftungsausschluss unterschreibst du digital in der App – das ist verbindliche Voraussetzung für den Zutritt zur Halle.'
      }
    },
    {
      '@type': 'Question',
      name: 'Gibt es Essen oder Getränke vor Ort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In der Halle gibt es keinen Verkauf von Essen oder Getränken. Für Verpflegung findest du in der Nähe Supermärkte und Gastronomie.'
      }
    },
    {
      '@type': 'Question',
      name: 'Gibt es eine Stundenkarte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wir bieten stattdessen eine Tageskarte (24h gültig) sowie Monats- und Jahreskarten an. Alle Tarife findest du auf der Preisseite.'
      }
    },
    {
      '@type': 'Question',
      name: 'Wo finde ich Preise und Adresse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alle Details findest du direkt auf den Seiten Preise und Location.'
      }
    }
  ]
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://daskammerl.at/#webpage',
  url: 'https://daskammerl.at/',
  name: 'Das Kammerl – Boulderhalle Wieselburg | Kammerl Bouldern',
  description: 'Kammerl Bouldern in Wieselburg: Das Kammerl ist die Boulderhalle 24/7 geöffnet, Zutritt per Keycard-App. Preise, Anfahrt, Vision.',
  isPartOf: { '@id': 'https://daskammerl.at/#website' },
  about: { '@id': 'https://daskammerl.at/#organization' },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://daskammerl.at/images/index_image_1.jpg',
    description: 'Bouldern für alle Altersgruppen in der Boulderhalle Das Kammerl Wieselburg'
  },
  mainEntity: { '@id': 'https://daskammerl.at/#faq' }
}

const faqSchemaWithId = { ...faqSchema, '@id': 'https://daskammerl.at/#faq' }

useHead({
  script: [
    { type: 'application/ld+json', children: JSON.stringify(faqSchemaWithId) },
    { type: 'application/ld+json', children: JSON.stringify(webPageSchema) }
  ]
})
</script>
