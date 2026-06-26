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
> Questa sezione viene COMPILATA da Claude Code dopo `/nexus-design`.
> Lasciare vuota in questa fase. Compilata dopo l'Intermezzo Design.
