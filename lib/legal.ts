import type { Locale } from "@/lib/i18n";

export interface LegalSection {
  h: string;
  p?: string[];
  ul?: string[];
}
export interface LegalDoc {
  title: string;
  updated: string;
  intro: string;
  disclaimer: string;
  sections: LegalSection[];
}

/**
 * BOZZA legale predisposta dall'agenzia (Nexus) — NON ancora validata.
 * Da far rivedere a un consulente legale / DPO prima della pubblicazione.
 */
const docs: Record<"privacy" | "cookie", Record<Locale, LegalDoc>> = {
  privacy: {
    it: {
      title: "Privacy Policy",
      updated: "Ultimo aggiornamento: 26 giugno 2026",
      intro:
        "Informativa sul trattamento dei dati personali ai sensi del Regolamento (UE) 2016/679 (GDPR) e della normativa italiana applicabile.",
      disclaimer:
        "Bozza predisposta in fase di sviluppo del sito. Da far validare da un consulente legale / DPO prima della messa online.",
      sections: [
        {
          h: "Titolare del trattamento",
          p: [
            "Fortun S.r.l., con sede legale in Via Aldo Sandulli 91, 00156 Roma (RM), Italia. P.IVA e C.F. 16828791000 — REA RM-1678563.",
            "Email: info@fortunsrl.com — PEC: 16828791000@impresa.italia.it.",
          ],
        },
        {
          h: "Dati trattati",
          p: ["Trattiamo i dati che ci fornisci volontariamente e quelli raccolti automaticamente durante la navigazione:"],
          ul: [
            "Dati del modulo di contatto: nome e cognome, azienda, email aziendale e contenuto del messaggio.",
            "Dati tecnici di navigazione: indirizzo IP, tipo di browser, pagine visitate e log del server, raccolti dall'infrastruttura per sicurezza e funzionamento.",
          ],
        },
        {
          h: "Finalità e base giuridica",
          ul: [
            "Rispondere alle richieste commerciali e gestire i rapporti pre-contrattuali — base giuridica: misure precontrattuali su richiesta dell'interessato (art. 6.1.b) e consenso (art. 6.1.a).",
            "Garantire sicurezza e corretto funzionamento del sito — base giuridica: legittimo interesse (art. 6.1.f).",
          ],
        },
        {
          h: "Natura del conferimento",
          p: [
            "Il conferimento dei dati del modulo è facoltativo, ma necessario per poter ricevere una risposta alla richiesta. Il mancato conferimento comporta l'impossibilità di dare seguito al contatto.",
          ],
        },
        {
          h: "Destinatari e responsabili",
          p: [
            "I dati possono essere trattati da fornitori di servizi tecnici nominati responsabili del trattamento, tra cui il fornitore di hosting (Vercel Inc.) e gli strumenti di posta. Non diffondiamo i dati e non li cediamo a terzi per finalità di marketing.",
          ],
        },
        {
          h: "Trasferimenti extra-UE",
          p: [
            "Alcuni fornitori potrebbero trattare i dati al di fuori dello Spazio Economico Europeo. In tal caso il trasferimento avviene sulla base di garanzie adeguate (es. Clausole Contrattuali Standard della Commissione Europea).",
          ],
        },
        {
          h: "Conservazione",
          p: [
            "I dati del modulo sono conservati per il tempo necessario a gestire la richiesta e, ove applicabile, per il periodo previsto da obblighi di legge. I log tecnici sono conservati per periodi limitati a fini di sicurezza.",
          ],
        },
        {
          h: "Diritti dell'interessato",
          p: ["Puoi esercitare in qualsiasi momento i diritti previsti dagli artt. 15-22 del GDPR:"],
          ul: [
            "accesso, rettifica, cancellazione e limitazione del trattamento;",
            "opposizione al trattamento e portabilità dei dati;",
            "revoca del consenso prestato, senza pregiudicare la liceità del trattamento precedente;",
            "reclamo all'Autorità Garante per la protezione dei dati personali.",
          ],
        },
        {
          h: "Processi automatizzati",
          p: ["Non effettuiamo profilazione né processi decisionali automatizzati ai sensi dell'art. 22 del GDPR."],
        },
        {
          h: "Modifiche",
          p: ["La presente informativa può essere aggiornata. La versione vigente è sempre pubblicata su questa pagina."],
        },
      ],
    },
    en: {
      title: "Privacy Policy",
      updated: "Last updated: 26 June 2026",
      intro:
        "Notice on the processing of personal data pursuant to Regulation (EU) 2016/679 (GDPR) and applicable Italian law.",
      disclaimer:
        "Draft prepared during website development. To be reviewed by a legal advisor / DPO before going live.",
      sections: [
        {
          h: "Data controller",
          p: [
            "Fortun S.r.l., registered office at Via Aldo Sandulli 91, 00156 Rome (RM), Italy. VAT and tax code 16828791000 — REA RM-1678563.",
            "Email: info@fortunsrl.com — PEC: 16828791000@impresa.italia.it.",
          ],
        },
        {
          h: "Data we process",
          p: ["We process the data you provide voluntarily and data collected automatically while browsing:"],
          ul: [
            "Contact form data: full name, company, business email and the content of your message.",
            "Technical browsing data: IP address, browser type, pages visited and server logs, collected by the infrastructure for security and operation.",
          ],
        },
        {
          h: "Purposes and legal basis",
          ul: [
            "Responding to business enquiries and managing pre-contractual relations — legal basis: pre-contractual measures at the data subject's request (Art. 6.1.b) and consent (Art. 6.1.a).",
            "Ensuring the security and correct operation of the website — legal basis: legitimate interest (Art. 6.1.f).",
          ],
        },
        {
          h: "Nature of provision",
          p: [
            "Providing the form data is optional but necessary to receive a reply. Without it, we cannot follow up on the enquiry.",
          ],
        },
        {
          h: "Recipients and processors",
          p: [
            "Data may be processed by technical service providers appointed as data processors, including the hosting provider (Vercel Inc.) and email tools. We do not disclose data or sell it to third parties for marketing.",
          ],
        },
        {
          h: "Transfers outside the EU",
          p: [
            "Some providers may process data outside the European Economic Area. In that case the transfer relies on adequate safeguards (e.g. the European Commission's Standard Contractual Clauses).",
          ],
        },
        {
          h: "Retention",
          p: [
            "Form data is retained for as long as needed to handle the enquiry and, where applicable, for the period required by law. Technical logs are kept for limited periods for security purposes.",
          ],
        },
        {
          h: "Your rights",
          p: ["You may exercise the rights under Art. 15-22 GDPR at any time:"],
          ul: [
            "access, rectification, erasure and restriction of processing;",
            "objection to processing and data portability;",
            "withdrawal of consent, without affecting the lawfulness of prior processing;",
            "lodging a complaint with the Italian Data Protection Authority.",
          ],
        },
        {
          h: "Automated processing",
          p: ["We do not carry out profiling or automated decision-making within the meaning of Art. 22 GDPR."],
        },
        {
          h: "Changes",
          p: ["This notice may be updated. The current version is always published on this page."],
        },
      ],
    },
  },
  cookie: {
    it: {
      title: "Cookie Policy",
      updated: "Ultimo aggiornamento: 26 giugno 2026",
      intro: "Informativa sull'uso dei cookie e delle tecnologie di archiviazione su questo sito.",
      disclaimer:
        "Bozza predisposta in fase di sviluppo del sito. Da far validare da un consulente legale / DPO prima della messa online.",
      sections: [
        {
          h: "Cosa sono i cookie",
          p: [
            "I cookie sono piccoli file di testo che i siti salvano sul dispositivo dell'utente. Insieme a tecnologie simili (es. archiviazione locale del browser) consentono il funzionamento del sito e, con il consenso, la misurazione del traffico.",
          ],
        },
        {
          h: "Cookie e tecnologie utilizzati",
          ul: [
            "Tecnici/necessari: memorizzano la scelta sul consenso cookie e la preferenza di lingua (archiviazione locale). Non richiedono consenso.",
            "Di misurazione anonima (eventuali): attivati solo previo consenso tramite il banner, per statistiche aggregate sull'uso del sito.",
          ],
        },
        {
          h: "Font e risorse",
          p: [
            "I font del sito sono ospitati direttamente sul nostro dominio (self-hosting): la loro visualizzazione non comporta chiamate a server di terze parti né cookie aggiuntivi.",
          ],
        },
        {
          h: "Gestione del consenso",
          p: [
            "Alla prima visita un banner consente di accettare o rifiutare i cookie non necessari. Puoi modificare la scelta in qualsiasi momento cancellando i dati di navigazione del browser per questo sito.",
          ],
        },
        {
          h: "Hosting e terze parti",
          p: [
            "Il sito è ospitato su infrastruttura Vercel, che può registrare log tecnici per sicurezza e funzionamento. Per i dettagli sul trattamento dei dati personali si rimanda alla Privacy Policy.",
          ],
        },
      ],
    },
    en: {
      title: "Cookie Policy",
      updated: "Last updated: 26 June 2026",
      intro: "Information on the use of cookies and storage technologies on this site.",
      disclaimer:
        "Draft prepared during website development. To be reviewed by a legal advisor / DPO before going live.",
      sections: [
        {
          h: "What cookies are",
          p: [
            "Cookies are small text files that websites store on the user's device. Together with similar technologies (e.g. browser local storage) they enable the site to work and, with consent, allow traffic measurement.",
          ],
        },
        {
          h: "Cookies and technologies used",
          ul: [
            "Technical / necessary: store the cookie-consent choice and the language preference (local storage). No consent required.",
            "Anonymous measurement (if any): enabled only after consent via the banner, for aggregate usage statistics.",
          ],
        },
        {
          h: "Fonts and resources",
          p: [
            "The site fonts are hosted directly on our own domain (self-hosting): displaying them does not involve calls to third-party servers or additional cookies.",
          ],
        },
        {
          h: "Managing consent",
          p: [
            "On the first visit a banner lets you accept or reject non-necessary cookies. You can change your choice at any time by clearing the browser data for this site.",
          ],
        },
        {
          h: "Hosting and third parties",
          p: [
            "The site is hosted on Vercel infrastructure, which may record technical logs for security and operation. For details on personal data processing, see the Privacy Policy.",
          ],
        },
      ],
    },
  },
};

export function getLegal(page: "privacy" | "cookie", locale: Locale): LegalDoc {
  return docs[page][locale];
}
