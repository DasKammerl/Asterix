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
  { src: '/images/index_image_1.jpg', alt: 'Bouldern für alle Altersgruppen' },
  { src: '/images/index_image_2.jpg', alt: 'Abwechslungsreiche Routen' },
  { src: '/images/index_image_3.jpg', alt: 'Community Session am Abend' }
]

usePageSeo({
  title: 'Boulderhalle Wieselburg',
  description:
    'Das Kammerl Boulderhalle in Wieselburg: 24/7 geöffnet, Zutritt per Keycard-App. Preise, Anfahrt, Vision und Sponsoring.',
  path: '/',
  image: '/images/index_image_1.jpg'
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

useHead({
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify(faqSchema)
  }]
})
</script>
