# DESIGN.md (ASTRATTO) — Fortun SRL

> ⚠️ Questo file è ASTRATTO. Le scelte concrete (palette hex, font esatti, componenti specifici) vivono nel passaggio successivo:
> **Intermezzo Design su Claude Code** via `/nexus-design`.
> Prima di Chat 2 CONTENUTI, questo file viene aggiornato con la sezione "Scelte concrete approvate".

## Purpose primario
- Categoria: **D — Lead qualification**
- Motivazione: Fortun non vende online e non prende booking. Il visitatore è un buyer professionale (trader, raffineria, distributore, broker, operatore industriale) che sta valutando se Fortun è una controparte credibile. L'unica azione sensata è un contatto commerciale qualificato tramite form strutturato. Il settore è pieno di broker fasulli: il sito deve dimostrare legittimità prima di chiedere il contatto.

## Target principale
- Chi: buyer professionale del settore Oil & Gas, internazionale. Decide di testa, non di pancia.
- Dispositivo prevalente: desktop (contesto ufficio, valutazione di un partner).
- Urgenza: bassa — valutativo. Arriva diffidente, va convinto un blocco alla volta.
- Lingua/cultura: **bilingue IT + EN** con toggle. L'inglese è la lingua del trading petrolifero; l'italiano serve per la dimensione aziendale/legale Roma-based.

## Concept scelto
- Nome: **Terminale**
- Mood (3 parole): infrastrutturale, globale, concreto
- Tono di voce: diretto e fattuale, da trading house seria. Mai promozionale, mai gonfio. Parla di barili reali, hub reali, specifiche reali.

## Direzione estetica (astratta, da raffinare con /nexus-design)
- Approccio hero: **atmosferico** — terminale petrolifero notturno / cisterna ormeggiata, luce calda contro blu-nero. Gravitas nel primo secondo, prima ancora delle parole.
- Approccio servizi: **narrativo/editoriale asimmetrico** — mai griglia di card 2×2.
- Approccio testimonianze: **assente**. Non esistono recensioni reali e in questo settore quelle finte distruggono credibilità. Il ruolo della prova sociale è sostituito da prove fattuali: i tre hub operativi, le specifiche prodotto reali, i dati aziendali verificabili.
- Approccio fotografico: deve trasmettere **scala industriale reale e movimento globale** — terminali, navi cisterna, parchi serbatoi notturni con luce artificiale calda. Deve sentirsi "questo è un posto vero dove passano barili veri". Mai estrazione, mai stock-sunset, mai astrazione decorativa.
- Atmosfera tipografica: **display sans geometrico forte e monumentale** per wordmark e titoli (registro istituzionale e contemporaneo) + **secondo registro neutro e leggibile** per il corpo. Niente monospace, niente italic numerals vecchio stile, niente serif decorativo.
- Atmosfera cromatica: **i colori del logo** — blu notte profondo + oro/champagne caldo come accento + off-white per le sezioni chiare. Base chiara con sezioni scure full-bleed come ancore. **Mai lime/acid green** (è la palette del reference Petrova, non la nostra).
- Energia CTA: **equilibrata** — chiara e presente ma professionale, non aggressiva. Purpose D + buyer razionale e diffidente: niente urgenza fasulla, niente hard-sell, ma neanche CTA sussurrato/editoriale che si nasconde. Il contatto deve essere sempre raggiungibile.

## Archetipo animazione
- Dominante: **C — Storytelling Scroll-driven (70%)** — il buyer razionale si convince scrollando, impilando prove (chi sei → cosa muovi → dove → come operi → compliance). La pagina costruisce fiducia un blocco alla volta.
- Mix 70/30: **B — Cinematico Minimal (30%)** solo sull'hero. Serve il colpo di gravitas iniziale: una trading house deve sembrare solida prima che tu legga una parola.
- Tipo hero direzionale: **atmosferico** (terminale/cisterna notturna, loop lento o still pesante). Niente galleria, niente prima/dopo: non c'è un prodotto da esibire, c'è una credibilità da dimostrare.

## Banlist specifica del progetto
(aggiuntiva a quella globale del CLAUDE.md Nexus)

- Estetica:
  - No lime / acid green (palette del reference, non di Fortun)
  - No mappa-globo con puntini luminosi e linee di "global network"
  - No numerazione eyebrow stile (01/04), (02/04)
  - No griglia di card 2×2
  - No italic numerals vecchio stile, no monospace
- Cliché di settore da evitare (critico):
  - **No immaginario di estrazione/upstream**: niente piattaforme di perforazione, rig, operai col casco, trivelle. Fortun fa **trading**, non estrazione. Copiare quell'immaginario racconta una bugia e segnala "broker fasullo".
  - No raffineria-al-tramonto stock photography
  - No barili impilati generici, no fiamme/torce, no goccia di petrolio decorativa ripetuta
  - No stretta-di-mano corporate da stock
- Riferimenti culturali / copy da evitare:
  - No "eccellenza", "passione", "qualità", "soluzioni innovative" (IT)
  - No "excellence", "passion", "seamless", "cutting-edge", "world-class" (EN)
  - **No loghi partner finti**: la riga "trusted partners" si aggiunge SOLO con loghi reali e autorizzati dal cliente, altrimenti si omette.

## Direzione per Claude Code
- Tono generale del codice: **cinematico** sull'hero (B) + **editoriale-istituzionale** sul corpo (C). Sobrietà e peso, non spettacolo.
- Filtri obbligatori da rispettare:
  - Purpose = D → CTA equilibrata e professionale, sempre raggiungibile; no whisper CTA, no hard-sell aggressivo.
  - Palette ancorata ai colori del logo (blu notte + oro/champagne + off-white). **Mai lime.**
  - Sito **bilingue IT/EN** con hreflang IT↔EN. La EN è la versione specchio della IT.
  - Archetipo **C 70% / B 30%**.
  - Rispetta tutta la banlist sopra + banlist globale Nexus.
- Cosa Claude Code DEVE proporre nell'Intermezzo:
  - 3 direzioni palette (compatibili con blu notte + oro/champagne + off-white)
  - 3 direzioni tipografia (display sans forte/monumentale + corpo neutro leggibile; no monospace, no serif decorativo)
  - 3 direzioni energia CTA (compatibili con purpose D — equilibrata, professionale)
  - 3 direzioni macro-layout sezioni (compatibili con approccio servizi narrativo/editoriale e con la sezione-hub come cuore della pagina)

## Scelte concrete approvate
> Compilato da `/nexus-design` il 26 giugno 2026. Scelte fondate sul database `ui-ux-pro-max` (colors.csv, typography.csv, google-fonts.csv, styles.csv, landing.csv, ux-guidelines.csv) e verificate contro banlist globale Nexus + banlist specifica di progetto.
> Riferimenti forniti dal cliente: **logo Fortun** (goccia 3D blu-notte + oro/champagne + terra notturna con luci dorate) come SORGENTE COLORI; **Petrova** come riferimento di LAYOUT (solo scheletro: lime/rig/operai/eyebrow-numerati/testimonial/logo-strip sono in banlist e NON vanno replicati).

### Palette — "Banchina di Notte"
Mood: infrastrutturale, istituzionale, notturno, concreto. Base chiara dominante (corpo editoriale ~70%) con ancore scure full-bleed (~30%). L'oro champagne è l'**unica** luce calda contro il blu-nero.

| Token | Hex | Uso |
|---|---|---|
| `--bg-deep` | `#0A0E14` | ancore più profonde: contatti, footer (near-black del logo) |
| `--navy` | `#101826` | scuro primario: hero, sezioni full-bleed (lift navy per atmosfera) |
| `--steel` | `#1B2838` | layering, superfici scure secondarie, bordi/divisori su scuro |
| `--gold` (accento) | `#C99A4E` | CTA, wordmark, dato-chiave — **un solo token oro, riusato ovunque** |
| `--gold-deep` | `#9A6E3B` | oro antico del logo: hairline, bordi, stati hover dell'oro |
| `--champagne` | `#E5C27D` | highlight, micro-dettagli metallici |
| `--offwhite` | `#F5F2EA` | base chiara dominante delle sezioni di corpo |
| testo su chiaro | `#101826` | corpo neutro ad alta leggibilità |
| testo su scuro | `#F5F2EA` | — |
| muted su chiaro | `#5C6573` | — |
| muted su scuro | `#93A1B3` | — |

- **Motivazione**: la più fedele al logo (navy profondo puro + oro champagne + off-white) senza derive terrose/bronzo. Realizza esattamente "base chiara con ancore scure full-bleed". L'oro champagne #C49A53 = "la sola luce calda contro il blu-nero del terminale".
- **Fonti DB**: `colors.csv` → 'Banking/Traditional Finance' (Trust navy + premium gold), 'Legal Services' (Authority navy + trust gold), 'Luxury/Premium Brand' (Premium black + gold). Accent scaldato dal #A16207/#B45309 del DB (ramato/bronzo) verso il champagne #C49A53.
- ✅ **Hex calibrati via color-pick** dal logo reale (`public/Logo Fortun.png`) il 26 giugno 2026: il marchio è un near-black con sottotono blu (`#0A0E14`–`#13161B`) + oro dall'antico `#9A6E3B` al brillante `#B3874E` + champagne `#E5C27D`. I token sopra derivano da questi valori (navy leggermente liftato per atmosfera, oro CTA `#C99A4E` per contrasto). Mai navy royal vicino a #3B82F6.

### Tipografia — Archivo + IBM Plex Sans
- **Font titoli/wordmark**: **Archivo** — pesi 700 / 800 / 900. Tracking stretto (-1/-2) per wordmark e H1; asse width espanso (~110-125) per i titoli di sezione full-bleed.
- **Font corpo**: **IBM Plex Sans** — pesi 400 (corpo) / 500 (label, sottotitoli) / 600 (micro-enfasi, voci dati).
- **Mono**: nessuno. ⚠️ Importare **solo IBM Plex Sans**, **MAI IBM Plex Mono** (monospace in banlist); non usare Plex Sans in stile tabular-mono.
- **Motivazione**: Archivo è una grotesque geometrica monumentale (nata per cartellonistica), registro istituzionale-contemporaneo per i titoli; IBM Plex Sans è il secondo registro neutro-ingegneristico che comunica rigore e affidabilità senza calore promozionale — ideale per rassicurare un buyer diffidente e reggere il long-form bilingue IT/EN. Entrambi su Google Fonts con subset latin-ext (accenti IT ok).
- **Fonti DB**: `typography.csv` pairing 'Developer Mono' (body IBM Plex Sans); `google-fonts.csv` 'Archivo' (assi wdth+wght). Fallback alternativo emerso e valido: Schibsted Grotesk + Hanken Grotesk (NON usare in parallelo: un solo sistema tipografico).

### Energia CTA — "Lingotto oro pieno su navy"
- **Direzione scelta**: bottone solido in oro champagne, testo navy quasi-nero per contrasto. È l'unico elemento oro-solido della viewport → azione inequivocabile senza gridare. Energia **equilibrata** centrata (né whisper né hard-sell).
- **Pattern visivo**: rettangolo solido `--gold`, testo `--navy-deep`, angoli leggermente smussati (radius 4-6px, no pill, no card rotonda). Label fattuali: "Richiedi un contatto" / "Contatta il team" (IT) · "Request supply" (EN). Padding orizzontale generoso (~28px), verticale moderato (~14px). Presente sempre in sticky nav (versione secondaria più piccola) + primario in hero e contatti.
- **Stati**: hover → oro scurito ~8% (verso #A8843F) + translateY(-1px), transition **150ms ease-out** (mai ease-in-out 0.3s globale); active → `scale(0.98)`; focus-visible → ring oro su navy / ring navy su chiaro, sempre visibile da tastiera; disabled → opacity .5 + cursor-not-allowed durante submit, con stato loading→success esplicito.
- **Motivazione**: traduce il pattern DB "Trust & Authority + Conversion" (Accent for CTA only + Low-friction form) = esattamente il purpose D. L'oro = colore del logo, quindi il CTA rafforza la legittimità del brand.
- ⚠️ Allineare l'oro CTA al `--gold` champagne della palette (non al bronzo #A16207). Verificare contrasto testo-su-CTA **AA 4.5:1**.

### Macro-layout per sezione — "Il Terminale Notturno"
Archetipo **B cinematico 30%** (hero + ancore scure) / **C scroll-driven editoriale 70%** (corpo chiaro asimmetrico). Alternanza chiaro/scuro: base off-white con **4 ancore navy full-bleed** (hub · come operiamo · contatti · footer). Scheletro affine a Petrova, ripulito dagli elementi in banlist.

- **1. Hero** *(B cinematico)*: full-bleed scuro ~92vh, foto notturna terminale/cisterna con overlay gradiente navy per leggibilità (no pure black). Nav fissa trasparente→navy su scroll: wordmark FORTUN a sx, ancore al centro, toggle IT/EN + CTA oro a dx. Contenuto in **basso-sinistra** (mai centrato): titolo di posizionamento su 2 righe + riga fattuale (Roma · Rotterdam, Houston, Fujairah). Parallax leggero, wordmark in fade-in.
- **2. Posizionamento** *(C)*: off-white, due colonne sbilanciate 5/7 (etichetta testuale NON numerata + paragrafo editoriale fattuale). Sotto, fascia di numeri-ancora a tutta larghezza, tipografia grande oro separata da hairline verticali — **niente card, niente griglia**. Conteggio progressivo su scroll.
- **3. Hub operativi** *(ancora scura n.1)*: navy full-bleed, tre colonne verticali (Rotterdam/Houston/Fujairah) separate da hairline oro; una sola linea di costa stilizzata oro come filo conduttore. **No globo-puntini, no rete "global network".** Rivelazione in sequenza (stagger), sticky leggero.
- **4. Prodotti** *(C)*: off-white, lista editoriale verticale a righe (Diesel EN590 · Jet Fuel A1 · LPG · Fuel Oil · Crude Oil), una riga alla volta su scroll, bordo-sinistro oro sulla riga attiva, spec in hover. **No griglia 2×2, no icone, no goccia/barili.**
- **5. Trading & Supply** *(C)*: off-white, zig-zag editoriale asimmetrico (testo alternato sx/dx) per i 5 servizi, con blocco-dato navy sul lato opposto. Niente card uniformi, niente check-list.
- **6. Come operiamo** *(ancora scura n.2)*: navy full-bleed, 4 pilastri sequenziali con parola-chiave grande oro + paragrafo; linea oro verticale continua che "cresce" col progresso scroll. **No eyebrow numerati 01/04, no icone-cliché.**
- **7. Contatti** *(ancora scura n.3, conversione)*: navy profondo, due colonne. Sx: statement + dati reali (Via Aldo Sandulli 91 Roma · P.IVA/REA · tel: cliccabile · info@fortunsrl.com). Dx: form **max 4 campi** (Nome · Azienda · Email · Messaggio), input bordo oro su navy, CTA oro "Invia richiesta" → `/grazie` (`/en/thank-you`). Microcopy rassicurazione fattuale.
- **8. Footer** *(ancora scura n.4)*: wordmark FORTUN monumentale edge-to-edge off-white su navy, dati aziendali completi (ragione sociale SRL, sede, P.IVA, REA, capitale sociale), toggle IT/EN, link legali. Hairline oro. **Nessun logo-partner finto, nessuna fascia "as seen in".**
- **Fonti DB**: `styles.csv` 'Modern Dark (Cinema Mobile)' (hero atmosferico, no pure #000), 'Parallax Storytelling', 'Bold Typography poster' (footer); `landing.csv` 'Trust & Authority + Conversion', 'Scroll-Triggered Storytelling', 'Funnel 3-Step'.

### Note per la build
- **BLOCCANTE**: ottenere il file logo e fare color-pick di `--navy` e `--gold` prima di scrivere il CSS. Finché manca, usare gli hex sopra come placeholder dichiarati. Mettere il logo in `public/` (PNG trasparente + SVG se disponibile).
- **Un solo token oro** (`--gold`) riusato in CTA, wordmark, hairline, dato-chiave — non spaccare l'accent system tra sezioni.
- **Tipografia**: solo IBM Plex Sans (mai Mono); un solo sistema tipografico (no Schibsted/Hanken in parallelo).
- **Animazioni**: transizioni 150-180ms ease-out; stagger mirati sulle rivelazioni chiave; **mai** fade-in-on-scroll su ogni elemento, mai ease-in-out 0.3s default.
- **A11y** (buyer desktop/keyboard): contrasto testo-su-CTA AA 4.5:1; focus-visible ring sempre visibile su navy e su chiaro; oro come testo small su scuro solo se ≥4.5:1.
- **Regole Nexus/contenuto**: bilingue IT/EN con toggle + hreflang IT↔EN (`x-default` su `/en`); telefono `tel:` cliccabile su mobile; **schema.org LocalBusiness** con `areaServed` (distinguere la sede Roma dai mercati serviti Rotterdam/Houston/Fujairah); cookie banner GDPR; copy fattuale (no "eccellenza/passione/qualità/soluzioni innovative"; no "excellence/passion/seamless/cutting-edge/world-class"); foto reali del cliente per hero/hub (AI generativa solo per texture/pattern di sfondo — la foto notturna del terminale da asset reale o licenza, mai stock raffineria-al-tramonto).
- **Form**: submit con toast/alert di default; pagina `/grazie` (`/en/thank-you`) reale come da SITEMAP; action server reale solo se richiesto.

---

## ⭐ Aggiornamento v3 — Direzione CORPORATE-LUXURY (26 giugno 2026)
> Sostituisce in parte le scelte precedenti. Origine: **mockup GPT approvati dal titolare** ("mi piace molto, seguilo") + **teardown di 7 siti** oil&gas (Mercuria, TotalEnergies Trading, Repsol, SLCT, BB Energy, Danske Commodities, Javelin). La v2 ("Terminale Notturno") risultava troppo "landing SaaS".

### Cosa cambia rispetto alle scelte sopra
- **Tipografia → SUPERSEDED**: non più Archivo + IBM Plex Sans. Ora **Fraunces** (serif display, asse optical-size, parola-chiave hero in oro corsivo) + **Hanken Grotesk** (body/UI, numeri tabular). Il serif editoriale è il segnale corporate-luxury (pattern Mercuria/Repsol).
- **Banlist allentata su input cliente**: la **mappa-mondo con rotte/hub luminosi** (prima vietata) è ora **APPROVATA** (è nel mockup amato); le **icone a linea oro** sono ora ammesse (sistema icone lucide). Resta vietato: lime/acid green, blue #3B82F6, gradient viola, hero centrato con bottone solitario, griglia 3-col card rotonde, pill ovunque, fade-in su tutto, numeri inventati, immaginario di estrazione (rig/trivelle).
- **Palette**: invariata (navy near-black `#101826`/`#0a0e14` + oro `#c99a4e` + cream `#f5f2ea`), coerente col logo e coi mockup.

### Stack tecnico (confermato dai teardown)
- Next 16 + Tailwind v4 + **Motion** + **Lenis** (smooth scroll = il vero stacco dal "SaaS"). Mappa = SVG/asset + Motion. **Niente GSAP/WebGL** (goccia = PNG pre-renderizzato → LCP salvo).
- Animazioni firma: reveal stagger, **count-up KPI on-scroll**, **linea oro "disegnata"** (process), hover-zoom card, parallax soft. Easing expo `cubic-bezier(.16,1,.3,1)`. Rispetto `prefers-reduced-motion`.

### Layout corporate
- Container 1280, colonna testo ~700, **spaziatura generosa** `section-y` (clamp 5–10rem), hairline border invece di ombre, raggi piccoli. Eyebrow uppercase tracking ampio.

### Sfondi fotografici (`public/bg/*.webp`, ottimizzati da mockup GPT)
hero · about · network · process · solutions · compliance · contact — uno per sezione (vedi WIREFRAME v3).

### ⚠️ Vincolo etico KPI (critico)
Fondata **2022**: i numeri di scala dei mockup (50+ mercati, 10M+ barili, 250+ operazioni, 200+ controparti, 15+ anni) sono **inventati → NON usati**. KPI reali in uso: **2022 · 3 hub · 5 prodotti · 3 continenti**. Numeri maggiori solo se forniti e veri dal cliente.

### Da confermare col cliente
Gamma prodotti reale (mockup ne mostra 7: Benzina/Bitume/Biofuel non nei 5 del brief) · eventuali KPI reali · telefono pubblico · dominio definitivo · foto reali aggiuntive.
