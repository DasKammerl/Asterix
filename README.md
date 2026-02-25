# Das Kammerl – Website (Nuxt)

Website für **Das Kammerl** (Boulderhalle Wieselburg, [daskammerl.at](https://daskammerl.at)).  
Technik: **Nuxt 4**, statischer Build, Deploy per FTP.

---

## Schnellstart

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten (http://localhost:3000)
npm run dev
```

Weitere Befehle: [Entwicklung & Build](#entwicklung--build) unten.

---

## Dokumentation

| Thema | Datei | Inhalt |
|--------|--------|--------|
| **Neue Entwickler** | [docs/SETUP-DEV.md](docs/SETUP-DEV.md) | Repo klonen, Remote anpassen, Branches, Pushen, Deploy starten |
| **Deploy (FTP)** | [docs/DEPLOY-FTP.md](docs/DEPLOY-FTP.md) | GitHub Secrets, FTP-Daten, Deploy-Limit (max. 3 pro 24h), `npm run deploy` |

---

## Umgang mit dem Projekt

### Entwicklung & Build

- **Lokal entwickeln:** `npm run dev` → Seite unter http://localhost:3000
- **Produktions-Build testen:** `npm run build` dann `npm run preview`
- **Statischen Build erzeugen (für Deploy):** `npm run generate` → Ausgabe in `.output/public/`

### Deploy

- Deploy läuft **nur manuell** (nicht bei jedem Push).
- **Max. 3 Deploys pro 24 Stunden** (für alle Nutzer); danach schlägt der Workflow fehl.
- Starten:
  - **Konsole:** `npm run deploy` (von `main`) oder `npm run deploy -- develop` (siehe [DEPLOY-FTP.md](docs/DEPLOY-FTP.md)).
  - **GitHub:** Actions → „Deploy to FTP“ → Run workflow, Branch wählen.

Details und Einrichtung (Secrets, FTP): [docs/DEPLOY-FTP.md](docs/DEPLOY-FTP.md).

### Für neue Teammitglieder

1. [docs/SETUP-DEV.md](docs/SETUP-DEV.md) durchgehen (Klonen, Install, Pushen, Deploy).
2. Bei bestehendem Klon nach Repo-Umzug: nur [Remote anpassen](docs/SETUP-DEV.md#repo-schon-geklont-nur-remote-anpassen-nach-umzug-in-die-organisation).

---

## Technik

- [Nuxt](https://nuxt.com) 4, Vue 3
- Statischer Export (`nuxt generate`), Upload per FTP (GitHub Actions)
- Repo: [github.com/DasKammerl-Bouldern/Asterix](https://github.com/DasKammerl-Bouldern/Asterix)
