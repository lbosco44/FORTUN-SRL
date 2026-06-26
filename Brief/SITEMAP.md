# SITEMAP.md — Fortun SRL

> Landing page single-page bilingue. Tutta la narrazione vive in una pagina ancorata.
> Nessun blog (il cliente non pubblica contenuti). Nessuna pagina `/aree/[comune]`:
> Fortun non è un'attività locale, la copertura "tutto il mondo" si gestisce nello schema.org, non in pagine dedicate.

## Pagine

### `/` — Home (IT)
- **Tipologia:** landing single-page
- **Scopo strategico:** trasformare la diffidenza del buyer professionale in un contatto commerciale qualificato. Costruisce credibilità un blocco alla volta (scroll-driven) e chiude col form.
- **Priorità SEO:** alta
- **Note:** versione italiana primaria. Tutte le sezioni del wireframe sono ancore interne (`#hub`, `#prodotti`, `#contatti`, ecc.).

### `/en` — Home (EN)
- **Tipologia:** landing single-page (specchio della IT)
- **Scopo strategico:** identico alla IT, per il pubblico internazionale. L'inglese è la lingua del trading petrolifero — è la versione che la maggior parte dei buyer leggerà.
- **Priorità SEO:** alta
- **Note:** collegata alla IT via `hreflang` IT↔EN. Toggle lingua presente in nav e footer.

### `/grazie` — Conferma invio (IT)
- **Tipologia:** pagina di conferma post-form
- **Scopo strategico:** confermare al buyer che la richiesta è arrivata e rassicurare sui tempi di risposta.
- **Priorità SEO:** **noindex**
- **Note:** raggiunta solo dopo submit del form contatti.

### `/en/thank-you` — Conferma invio (EN)
- **Tipologia:** pagina di conferma post-form
- **Scopo strategico:** come `/grazie`, versione inglese.
- **Priorità SEO:** **noindex**

### `/privacy` — Privacy Policy
- **Tipologia:** pagina legale (GDPR)
- **Scopo strategico:** conformità normativa obbligatoria. Coerente col posizionamento compliance-oriented del brand.
- **Priorità SEO:** bassa
- **Note:** versione EN a `/en/privacy`.

### `/cookie` — Cookie Policy
- **Tipologia:** pagina legale (GDPR)
- **Scopo strategico:** conformità normativa obbligatoria.
- **Priorità SEO:** bassa
- **Note:** versione EN a `/en/cookie-policy`.

## Struttura toggle lingua / hreflang

```
/                ↔  /en                  (home)
/grazie          ↔  /en/thank-you        (conferma)
/privacy         ↔  /en/privacy          (privacy)
/cookie          ↔  /en/cookie-policy    (cookie)
```

- IT su `/`, EN su `/en` — entrambe indicizzate.
- `hreflang="it"` e `hreflang="en"` reciproci su ogni coppia + `x-default` su `/en` (pubblico prevalentemente internazionale).
- Il toggle lingua è elemento permanente di nav e footer.
