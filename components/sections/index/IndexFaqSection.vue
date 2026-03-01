<template>
  <section id="anyquestions" class="bg-altbg py-16 sm:py-20">
    <div class="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
      <p class="text-xs font-bold uppercase tracking-[0.2em] text-accentdark">FAQ</p>
      <h2 class="mt-3 text-3xl font-bold text-dark sm:text-4xl">Häufige Fragen</h2>
      <div class="mt-8">
        <FaqBlock :items="faqItems" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqItems = [
  {
    question: 'Wie erhalte ich Zugang?',
    answer: 'Zugang erhältst du nur über die Keycard-App auf deinem Handy: App herunterladen, registrieren, Karte (Tages-, Monats- oder Jahreskarte) in der App kaufen bzw. aktivieren und vor Ort einchecken. Ohne App ist kein Einlass möglich.'
  },
  {
    question: 'Brauche ich Vorerfahrung? Welche Voraussetzungen gibt es?',
    answer: 'Nein, Vorerfahrung ist nicht nötig – Einsteiger und Fortgeschrittene sind willkommen. Voraussetzung ist, dass du die App nutzt und den Haftungsausschluss digital in der App unterschreibst. Ohne diese digitale Unterschrift ist kein Zugang möglich.'
  },
  {
    question: 'Muss ich einen Haftungsausschluss unterschreiben?',
    answer: 'Ja. Den Haftungsausschluss unterschreibst du digital in der App – das ist verbindliche Voraussetzung für den Zutritt zur Halle.'
  },
  {
    question: 'Gibt es Essen oder Getränke vor Ort?',
    answer: 'In der Halle gibt es keinen Verkauf von Essen oder Getränken. Für Verpflegung findest du in der Nähe Supermärkte und Gastronomie.'
  },
  {
    question: 'Gibt es eine Stundenkarte?',
    answer: 'Wir bieten stattdessen eine Tageskarte (24h gültig) sowie Monats- und Jahreskarten an. Alle Tarife findest du auf der Preisseite.'
  },
  {
    question: 'Wo finde ich Preise und Adresse?',
    answer: 'Alle Details findest du direkt auf den Seiten Preise und Location.'
  }
]
</script>
