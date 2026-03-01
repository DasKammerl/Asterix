# Setup für neue Entwickler

Damit bei dir alles funktioniert (entwickeln, pushen, deployen), einmal durcharbeiten.

---

## Repo schon geklont? Nur Remote anpassen (nach Umzug in die Organisation)

Wenn du das Projekt **schon lokal** hast und sich nur der GitHub-Link geändert hat (z.B. von `DasKammerl/Asterix` zu `DasKammerl-Bouldern/Asterix`), reicht das:

```bash
cd Asterix   # (oder in deinen Projektordner)
git remote set-url origin https://github.com/DasKammerl-Bouldern/Asterix.git
```

Danach gehen `git push` und `git pull` wieder auf das richtige Repo. Prüfen:

```bash
git remote -v
# Sollte zeigen: origin  https://github.com/DasKammerl-Bouldern/Asterix.git (fetch/push)
```

---

## 1. Repo klonen (wenn du es noch nicht hast)

```bash
git clone https://github.com/DasKammerl-Bouldern/Asterix.git
cd Asterix
```

---

## 2. Abhängigkeiten installieren

```bash
npm install
```

---

## 3. Entwicklungsserver starten

```bash
npm run dev
```

Seite läuft unter **http://localhost:3000**.

---

## 4. Pushen (Änderungen nach GitHub)

**Voraussetzung:** Dein GitHub-Account hat im Repo **Schreibrechte** (z.B. als Member der Organisation **DasKammerl-Bouldern**).

```bash
# Branch prüfen (z.B. main oder feature-Branch)
git status
git branch

# Änderungen committen
git add .
git commit -m "Deine Commit-Nachricht"

# Nach GitHub pushen
git push origin main
```

Wenn du einen anderen Branch nutzt (z.B. `develop`), entsprechend anpassen: `git push origin develop`.

---

## 5. Deploy (Website live schalten)

Der Deploy baut die Seite und lädt sie per FTP auf den Server (World4you). Es gibt zwei Wege:

### Option A: Im Browser (ohne GitHub CLI)

1. Öffne **https://github.com/DasKammerl-Bouldern/Asterix**
2. Reiter **Actions** → links **„Deploy to FTP“** wählen
3. Rechts **„Run workflow“** klicken
4. Branch wählen (z.B. `main`) → grüner Button **„Run workflow“**
5. Lauf abwarten (grün = erfolgreich), dann ist **www.daskammerl.at** aktualisiert

### Option B: In der Konsole mit `npm run deploy`

**Voraussetzung:** [GitHub CLI (gh)](https://cli.github.com/) installiert und eingeloggt mit einem Account, der im Repo Rechte hat.

```bash
# Einmal einloggen (Code im Browser eingeben)
gh auth login

# Deploy starten (baut + uploaded automatisch)
npm run deploy              # deployt von Branch main
npm run deploy -- develop   # deployt von Branch develop
```

Der eigentliche Build und FTP-Upload laufen auf GitHub; du startest nur den Workflow.

---

## Kurz-Checkliste

| Schritt          | Befehl / Aktion                                                              |
| ---------------- | ---------------------------------------------------------------------------- |
| Repo holen       | `git clone https://github.com/DasKammerl-Bouldern/Asterix.git && cd Asterix` |
| Dependencies     | `npm install`                                                                |
| Lokal entwickeln | `npm run dev`                                                                |
| Pushen           | `git add . && git commit -m "…" && git push origin main`                     |
| Deploy (Browser) | Actions → Deploy to FTP → Run workflow                                       |
| Deploy (CLI)     | `gh auth login` (einmalig), dann `npm run deploy`                            |

---

## FTP / Secrets

Die FTP-Zugangsdaten liegen als **GitHub Secrets** im Repo (Settings → Secrets and variables → Actions). Neue Devs müssen sie **nicht** lokal eintragen – der Deploy-Workflow nutzt sie auf GitHub. Nur wer den Workflow auslöst (Browser oder `npm run deploy`), braucht Zugriff auf das Repo.
