import type { Locale } from "@/lib/i18n";
import { anchors } from "@/lib/i18n";

type AnchorKey = keyof typeof anchors;

export interface Content {
  meta: { title: string; description: string };
  skip: string;
  nav: { items: { label: string; anchor: AnchorKey }[]; quote: string };
  hero: {
    eyebrow: string;
    headLead: string;
    headAccent: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    features: string[];
  };
  about: {
    eyebrow: string;
    headLead: string;
    headAccent: string;
    body: string;
    features: { title: string; desc: string }[];
    stats: { num: number; suffix: string; label: string; desc: string }[];
    badges: { value: string; label: string }[];
  };
  network: {
    eyebrow: string;
    headLead: string;
    headAccent: string;
    body: string;
    points: string[];
    cta: string;
    legend: string[];
    mapHubs: string;
    mapSedi: string;
  };
  process: {
    eyebrow: string;
    headLead: string;
    headAccent: string;
    intro: string;
    steps: { title: string; desc: string }[];
    note: { title: string; body: string };
  };
  solutions: {
    eyebrow: string;
    headLead: string;
    headAccent: string;
    intro: string;
    productsTitle: string;
    products: { name: string; spec: string; desc: string }[];
    servicesTitle: string;
    services: { title: string; desc: string }[];
  };
  compliance: {
    eyebrow: string;
    headLead: string;
    headAccent: string;
    body: string;
    cards: { title: string; desc: string }[];
    note: string;
  };
  contact: {
    eyebrow: string;
    headLead: string;
    headAccent: string;
    microcopy: string;
    fields: {
      name: string;
      company: string;
      email: string;
      product: string;
      volume: string;
      incoterm: string;
      destination: string;
      message: string;
    };
    placeholders: { name: string; company: string; email: string; message: string };
    selectDefault: string;
    optional: string;
    consent: { pre: string; link: string; post: string };
    submit: string;
    sending: string;
    reassure: { title: string; desc: string }[];
    detailsTitle: string;
    labels: { office: string; email: string; phone: string; pec: string };
    phoneTodo: string;
  };
  footer: { tagline: string; navTitle: string; contactTitle: string; companyTitle: string; rights: string };
  legal: { privacy: string; cookie: string };
  langToggle: { aria: string; short: string };
  cookieBanner: { text: string; accept: string; reject: string; privacyLink: string };
  thankYou: { title: string; message: string; responseLine: string; back: string };
}

const it: Content = {
  meta: {
    title: "Fortun SRL — Trading di prodotti petroliferi raffinati",
    description:
      "Trading fisico internazionale di prodotti petroliferi raffinati. Hub a Rotterdam, Houston e Fujairah. Società italiana, sede a Roma.",
  },
  skip: "Vai al contenuto",
  nav: {
    items: [
      { label: "Chi siamo", anchor: "about" },
      { label: "Mercati", anchor: "network" },
      { label: "Come operiamo", anchor: "process" },
      { label: "Soluzioni", anchor: "solutions" },
      { label: "Compliance", anchor: "compliance" },
      { label: "Contatti", anchor: "contact" },
    ],
    quote: "Richiedi una quotazione",
  },
  hero: {
    eyebrow: "Trading house · Oil & Gas · Roma",
    headLead: "Trading e supply di prodotti petroliferi raffinati",
    headAccent: "per mercati in continua evoluzione.",
    sub: "Società italiana di trading fisico: acquistiamo, vendiamo e coordiniamo forniture di prodotti raffinati tra produttori, raffinerie e operatori industriali, con una rete di partner su tre continenti.",
    ctaPrimary: "Richiedi una quotazione",
    ctaSecondary: "Scopri come operiamo",
    features: ["Partner affidabile", "Presenza globale", "Logistica integrata", "Operatività concreta"],
  },
  about: {
    eyebrow: "Chi siamo",
    headLead: "Una società di trading italiana, con una rete di fornitori e controparti",
    headAccent: "mondiale.",
    body: "Fortun SRL è una società italiana con sede a Roma. Operiamo nel trading di prodotti petroliferi raffinati: non estraiamo e non raffiniamo, muoviamo prodotto già a specifica dai mercati dove viene immesso a quelli dove serve. Il nostro lavoro è sapere dove c'è disponibilità, dove c'è domanda, e gestire con rigore tutto ciò che sta in mezzo.",
    features: [
      { title: "Affidabilità e trasparenza", desc: "Termini chiari prima di impegnarci, e ciò che concordiamo su specifica, volumi e tempi viene rispettato." },
      { title: "Accesso globale", desc: "Una rete di fornitori e controparti che ci dà accesso ai principali snodi del prodotto raffinato." },
      { title: "Soluzioni su misura", desc: "Ogni fornitura è strutturata sulle esigenze reali della controparte, per prodotto, quantità e destinazione." },
    ],
    stats: [
      { num: 2022, suffix: "", label: "Operativi dal", desc: "Società italiana di trading fisico di prodotti petroliferi raffinati, con sede a Roma." },
      { num: 5, suffix: "", label: "Hub operativi", desc: "Rotterdam, Houston, Fujairah, Durazzo e Mersin — dove si svolge l'attività di compravendita." },
      { num: 4, suffix: "", label: "Sedi", desc: "Roma, Siracusa, Dubai e Tirana — dove siamo presenti." },
      { num: 5, suffix: "", label: "Prodotti raffinati", desc: "Diesel EN590, Jet Fuel A1, GPL, Fuel Oil e Crude Oil." },
    ],
    badges: [
      { value: "3", label: "Continenti presidiati" },
      { value: "Roma", label: "Sede operativa" },
      { value: "IT · EN", label: "Lingue operative" },
      { value: "Globale", label: "Copertura mercati" },
    ],
  },
  network: {
    eyebrow: "Rete globale · Presenza strategica",
    headLead: "Mercati e",
    headAccent: "Network.",
    body: "Colleghiamo i mercati con una rete commerciale solida e attiva. La presenza sui principali hub energetici garantisce accesso privilegiato e operatività su più fusi orari.",
    points: [
      "Approvvigionamento da raffinerie e produttori qualificati.",
      "Logistica integrata e controllo dell'intera catena del valore.",
      "Relazioni di lungo termine e rotte commerciali consolidate.",
    ],
    cta: "Scopri come operiamo",
    legend: ["Hub logistici", "Terminal & Port", "Rotte commerciali"],
    mapHubs: "Hub operativi",
    mapSedi: "Sedi",
  },
  process: {
    eyebrow: "Come operiamo",
    headLead: "Un processo integrato.",
    headAccent: "Valore in ogni passaggio.",
    intro:
      "Controlliamo l'intera catena di valore del trading di prodotti petroliferi: ogni nodo è seguito con un approccio affidabile e orientato al lungo termine.",
    steps: [
      { title: "Approvvigionamento", desc: "Selezioniamo prodotto presso raffinerie e fornitori, valutando origine, specifica e affidabilità della controparte." },
      { title: "Stoccaggio", desc: "Coordiniamo capacità di stoccaggio e termini negli hub, per sicurezza e disponibilità del prodotto." },
      { title: "Trasporto", desc: "Organizziamo il trasporto via mare, terra e condotta tra origine e destinazione, allineando volumi e tempi." },
      { title: "Controllo qualità", desc: "Verifichiamo le specifiche del prodotto lungo la catena, con controparti e ispezioni indipendenti." },
      { title: "Consegna", desc: "Gestiamo la consegna al punto concordato, con documentazione completa e secondo gli Incoterm pattuiti." },
    ],
    note: {
      title: "Affidabilità in ogni nodo.",
      body: "La rete relazionale e la presenza sugli hub garantiscono continuità, trasparenza e valore in ogni passaggio della fornitura.",
    },
  },
  solutions: {
    eyebrow: "Prodotti & Servizi",
    headLead: "Soluzioni energetiche.",
    headAccent: "Valore reale.",
    intro:
      "Trattiamo una gamma di prodotti petroliferi raffinati riconosciuti dal mercato internazionale, definiti per specifica, quantità e punto di consegna.",
    productsTitle: "Prodotti",
    products: [
      { name: "Diesel", spec: "EN590", desc: "Gasolio per autotrazione conforme allo standard europeo EN590." },
      { name: "Jet Fuel", spec: "A1", desc: "Cherosene per aviazione destinato al trasporto aereo commerciale." },
      { name: "GPL", spec: "LPG", desc: "Gas di petrolio liquefatto per riscaldamento, autotrazione e usi industriali." },
      { name: "Olio combustibile", spec: "Fuel Oil", desc: "Olio combustibile per uso industriale e marittimo, incluso il bunkeraggio." },
      { name: "Greggio", spec: "Crude Oil", desc: "Greggio destinato alle raffinerie come materia prima di processo." },
    ],
    servicesTitle: "Servizi",
    services: [
      { title: "Stoccaggio & logistica", desc: "Coordinamento di capacità di stoccaggio e logistica integrata negli hub operativi." },
      { title: "Shipping & trasporto", desc: "Organizzazione del trasporto via mare e terra tra origine e destinazione." },
      { title: "Coordinamento forniture", desc: "Gestione di tempi, volumi e passaggi della fornitura lungo l'intera catena." },
      { title: "Supply solutions", desc: "Strutturazione su misura delle operazioni commerciali, contrattualistica e Incoterm." },
    ],
  },
  compliance: {
    eyebrow: "Perché Fortun",
    headLead: "Compliance &",
    headAccent: "Affidabilità.",
    body: "Operiamo secondo gli standard internazionali di compliance e trasparenza, con processi rigorosi e controlli costanti. L'affidabilità delle controparti è la nostra priorità.",
    cards: [
      { title: "Controparti qualificate", desc: "Verifica e selezione delle controparti, con procedure KYC e due diligence." },
      { title: "Documentazione e compliance", desc: "Operazioni documentate secondo la normativa internazionale lungo l'intera catena." },
      { title: "Controllo qualità prodotto", desc: "Specifiche verificate e controllate con ispezioni indipendenti dove necessario." },
      { title: "Market intelligence & risk", desc: "Monitoraggio dei mercati e gestione del rischio prezzo a tutela delle operazioni." },
    ],
    note: "Integrità, competenza e responsabilità: i valori che guidano ogni nostra decisione.",
  },
  contact: {
    eyebrow: "Parliamo di forniture",
    headLead: "Richiedi una quotazione",
    headAccent: "o raccontaci le tue esigenze.",
    microcopy:
      "Il nostro team è pronto a fornirti soluzioni su misura, con rapidità, trasparenza e competenza. Indicaci prodotto, quantità e mercato di riferimento.",
    fields: {
      name: "Nome e cognome",
      company: "Azienda",
      email: "Email aziendale",
      product: "Prodotto",
      volume: "Volumi indicativi",
      incoterm: "Incoterm",
      destination: "Porto / punto di consegna",
      message: "Note aggiuntive",
    },
    placeholders: {
      name: "Mario Rossi",
      company: "Ragione sociale",
      email: "nome@azienda.com",
      message: "Specifica, tempistiche e dettagli della richiesta.",
    },
    selectDefault: "Seleziona…",
    optional: "facoltativo",
    consent: {
      pre: "Inviando il modulo acconsenti al trattamento dei dati per essere ricontattato, secondo la ",
      link: "Privacy Policy",
      post: ".",
    },
    submit: "Invia richiesta",
    sending: "Invio…",
    reassure: [
      { title: "Risposta rapida", desc: "Entro 1–2 giorni lavorativi." },
      { title: "Presenza globale", desc: "Hub su tre continenti." },
      { title: "Affidabilità verificata", desc: "Controparti e processi conformi." },
    ],
    detailsTitle: "Dati operativi",
    labels: { office: "Sede", email: "Email", phone: "Telefono", pec: "PEC" },
    phoneTodo: "Disponibile a breve",
  },
  footer: {
    tagline: "Trading internazionale di prodotti petroliferi raffinati. Da Roma ai principali hub del mondo.",
    navTitle: "Sezioni",
    contactTitle: "Contatti",
    companyTitle: "Dati aziendali",
    rights: "Tutti i diritti riservati.",
  },
  legal: { privacy: "Privacy Policy", cookie: "Cookie Policy" },
  langToggle: { aria: "Cambia lingua", short: "EN" },
  cookieBanner: {
    text: "Usiamo solo cookie tecnici necessari al funzionamento del sito. Con il tuo consenso possiamo usare cookie di misurazione anonima del traffico.",
    accept: "Accetta",
    reject: "Solo necessari",
    privacyLink: "Cookie Policy",
  },
  thankYou: {
    title: "Richiesta ricevuta.",
    message: "Grazie. La tua richiesta è arrivata al team operativo di Fortun.",
    responseLine:
      "Ti ricontattiamo entro 1–2 giorni lavorativi all'indirizzo che ci hai indicato. Se la richiesta è urgente, scrivici a info@fortunsrl.com.",
    back: "Torna alla home",
  },
};

const en: Content = {
  meta: {
    title: "Fortun SRL — Refined petroleum products trading",
    description:
      "International physical trading of refined petroleum products. Hubs in Rotterdam, Houston and Fujairah. Italian company, based in Rome.",
  },
  skip: "Skip to content",
  nav: {
    items: [
      { label: "About", anchor: "about" },
      { label: "Markets", anchor: "network" },
      { label: "How we operate", anchor: "process" },
      { label: "Solutions", anchor: "solutions" },
      { label: "Compliance", anchor: "compliance" },
      { label: "Contact", anchor: "contact" },
    ],
    quote: "Request a quote",
  },
  hero: {
    eyebrow: "Trading house · Oil & Gas · Rome",
    headLead: "Trading and supply of refined petroleum products",
    headAccent: "for markets in constant evolution.",
    sub: "An Italian physical trading company: we buy, sell and coordinate supply of refined products between producers, refineries and industrial operators, with a network of partners across three continents.",
    ctaPrimary: "Request a quote",
    ctaSecondary: "See how we operate",
    features: ["Reliable partner", "Global presence", "Integrated logistics", "Concrete operations"],
  },
  about: {
    eyebrow: "About us",
    headLead: "An Italian trading company, with a network of suppliers and counterparties",
    headAccent: "worldwide.",
    body: "Fortun SRL is an Italian company based in Rome. We trade refined petroleum products: we do not extract and do not refine — we move product that is already on-spec, from the markets where it enters circulation to the markets where it is needed. Our work is knowing where supply sits, where demand sits, and handling everything in between with rigour.",
    features: [
      { title: "Reliability and transparency", desc: "Clear terms before we commit, and what we agree on specification, volumes and timing is honoured." },
      { title: "Global access", desc: "A network of suppliers and counterparties that gives us access to the main refined-product hubs." },
      { title: "Tailored solutions", desc: "Every supply is structured around the counterparty's real needs — by product, quantity and destination." },
    ],
    stats: [
      { num: 2022, suffix: "", label: "Operating since", desc: "Italian physical trading company for refined petroleum products, based in Rome." },
      { num: 5, suffix: "", label: "Operating hubs", desc: "Rotterdam, Houston, Fujairah, Durrës and Mersin — where the trading activity takes place." },
      { num: 4, suffix: "", label: "Offices", desc: "Rome, Siracusa, Dubai and Tirana — where we are present." },
      { num: 5, suffix: "", label: "Refined products", desc: "Diesel EN590, Jet Fuel A1, LPG, Fuel Oil and Crude Oil." },
    ],
    badges: [
      { value: "3", label: "Continents covered" },
      { value: "Rome", label: "Head office" },
      { value: "IT · EN", label: "Operating languages" },
      { value: "Global", label: "Market coverage" },
    ],
  },
  network: {
    eyebrow: "Global network · Strategic presence",
    headLead: "Markets and",
    headAccent: "Network.",
    body: "We connect markets with a solid, active commercial network. A presence on the main energy hubs ensures privileged access and operations across multiple time zones.",
    points: [
      "Sourcing from qualified refineries and producers.",
      "Integrated logistics and control of the full value chain.",
      "Long-term relationships and established trade routes.",
    ],
    cta: "See how we operate",
    legend: ["Logistics hubs", "Terminal & Port", "Trade routes"],
    mapHubs: "Operating hubs",
    mapSedi: "Offices",
  },
  process: {
    eyebrow: "How we operate",
    headLead: "An integrated process.",
    headAccent: "Value at every step.",
    intro:
      "We control the full value chain of petroleum products trading: every node is handled with a reliable, long-term-oriented approach.",
    steps: [
      { title: "Sourcing", desc: "We select product at refineries and suppliers, assessing origin, specification and counterparty reliability." },
      { title: "Storage", desc: "We coordinate storage capacity and terms at the hubs, for product security and availability." },
      { title: "Transport", desc: "We arrange transport by sea, land and pipeline between origin and destination, aligning volumes and timing." },
      { title: "Quality control", desc: "We verify product specifications along the chain, with counterparties and independent inspections." },
      { title: "Delivery", desc: "We manage delivery at the agreed point, with full documentation and per the agreed Incoterms." },
    ],
    note: {
      title: "Reliability at every node.",
      body: "Our relationship network and hub presence ensure continuity, transparency and value at every step of the supply.",
    },
  },
  solutions: {
    eyebrow: "Products & Services",
    headLead: "Energy solutions.",
    headAccent: "Real value.",
    intro:
      "We trade a range of refined petroleum products recognized on the international market, defined by specification, quantity and delivery point.",
    productsTitle: "Products",
    products: [
      { name: "Diesel", spec: "EN590", desc: "Automotive gasoil compliant with the European EN590 standard." },
      { name: "Jet Fuel", spec: "A1", desc: "Aviation kerosene for commercial air transport." },
      { name: "LPG", spec: "LPG", desc: "Liquefied petroleum gas for heating, automotive and industrial use." },
      { name: "Fuel Oil", spec: "Fuel Oil", desc: "Fuel oil for industrial and marine use, including bunkering." },
      { name: "Crude Oil", spec: "Crude Oil", desc: "Crude bound for refineries as process feedstock." },
    ],
    servicesTitle: "Services",
    services: [
      { title: "Storage & logistics", desc: "Coordination of storage capacity and integrated logistics at the operating hubs." },
      { title: "Shipping & transport", desc: "Arranging transport by sea and land between origin and destination." },
      { title: "Supply coordination", desc: "Managing timing, volumes and the stages of supply along the full chain." },
      { title: "Supply solutions", desc: "Tailored structuring of commercial operations, contracts and Incoterms." },
    ],
  },
  compliance: {
    eyebrow: "Why Fortun",
    headLead: "Compliance &",
    headAccent: "Reliability.",
    body: "We operate to international compliance and transparency standards, with rigorous processes and constant controls. Counterparty reliability is our priority.",
    cards: [
      { title: "Qualified counterparties", desc: "Vetting and selection of counterparties, with KYC and due diligence procedures." },
      { title: "Documentation & compliance", desc: "Operations documented per international regulation along the full chain." },
      { title: "Product quality control", desc: "Specifications verified and checked with independent inspections where needed." },
      { title: "Market intelligence & risk", desc: "Market monitoring and price-risk management to protect operations." },
    ],
    note: "Integrity, competence and responsibility: the values that guide every decision we make.",
  },
  contact: {
    eyebrow: "Let's talk supply",
    headLead: "Request a quote",
    headAccent: "or tell us your requirements.",
    microcopy:
      "Our team is ready to provide tailored solutions, with speed, transparency and competence. Tell us the product, quantity and target market.",
    fields: {
      name: "Full name",
      company: "Company",
      email: "Business email",
      product: "Product",
      volume: "Indicative volume",
      incoterm: "Incoterm",
      destination: "Port / delivery point",
      message: "Additional notes",
    },
    placeholders: {
      name: "John Smith",
      company: "Registered company name",
      email: "name@company.com",
      message: "Specification, timing and details of the request.",
    },
    selectDefault: "Select…",
    optional: "optional",
    consent: {
      pre: "By submitting this form you consent to your data being processed so we can contact you, in accordance with the ",
      link: "Privacy Policy",
      post: ".",
    },
    submit: "Send request",
    sending: "Sending…",
    reassure: [
      { title: "Fast reply", desc: "Within 1–2 business days." },
      { title: "Global presence", desc: "Hubs across three continents." },
      { title: "Verified reliability", desc: "Compliant counterparties and processes." },
    ],
    detailsTitle: "Operational details",
    labels: { office: "Office", email: "Email", phone: "Phone", pec: "PEC" },
    phoneTodo: "Available soon",
  },
  footer: {
    tagline: "International trading of refined petroleum products. From Rome to the world's main hubs.",
    navTitle: "Sections",
    contactTitle: "Contact",
    companyTitle: "Company details",
    rights: "All rights reserved.",
  },
  legal: { privacy: "Privacy Policy", cookie: "Cookie Policy" },
  langToggle: { aria: "Change language", short: "IT" },
  cookieBanner: {
    text: "We only use technical cookies required for the site to work. With your consent we may use anonymous traffic-measurement cookies.",
    accept: "Accept",
    reject: "Necessary only",
    privacyLink: "Cookie Policy",
  },
  thankYou: {
    title: "Request received.",
    message: "Thank you. Your request has reached Fortun's operations team.",
    responseLine:
      "We'll get back to you within 1–2 business days at the address you gave us. If urgent, write to us at info@fortunsrl.com.",
    back: "Back to home",
  },
};

const content: Record<Locale, Content> = { it, en };

export function getContent(locale: Locale): Content {
  return content[locale];
}
