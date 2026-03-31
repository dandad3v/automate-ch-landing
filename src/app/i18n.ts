export type Lang = "en" | "de";

const t = {
  nav: {
    problem: { en: "Problem", de: "Problem" },
    features: { en: "Features", de: "Funktionen" },
    how: { en: "How it works", de: "So funktioniert's" },
    pricing: { en: "Pricing", de: "Preise" },
    contact: { en: "Contact", de: "Kontakt" },
  },
  hero: {
    badge: {
      en: "Now piloting in Winterthur, Switzerland",
      de: "Jetzt in der Pilotphase in Winterthur",
    },
    titlePre: { en: "Your ", de: "Dein " },
    titleHighlight: { en: "AI Assistant", de: "KI-Assistent" },
    titlePost: {
      en: " that thinks ahead, so you can focus on work.",
      de: " der mitdenkt, damit du arbeiten kannst.",
    },
    subtitle: {
      en: "Appointments, quotes, customer questions \u2013 your AI assistant handles the admin while you\u2019re on the job. Via WhatsApp, phone, or web.",
      de: "Termine, Offerten, Kundenfragen \u2013 dein KI-Assistent erledigt den Buerokram, waehrend du auf der Baustelle bist. Per WhatsApp, Telefon oder Web.",
    },
    cta: { en: "Try for free", de: "Kostenlos testen" },
    ctaSecondary: { en: "How it works \u2192", de: "So funktioniert's \u2192" },
  },
  problem: {
    tag: { en: "The Problem", de: "Das Problem" },
    title: {
      en: "You\u2019re losing jobs because you\u2019re too busy to answer",
      de: "Du verlierst Auftraege, weil du zu beschaeftigt bist",
    },
    subtitle: {
      en: "Tradespeople and frontline teams work with their hands \u2013 not at a screen. But customers expect instant replies.",
      de: "Handwerker und Frontline-Teams arbeiten mit den Haenden \u2013 nicht am Bildschirm. Aber die Kunden erwarten sofortige Antworten.",
    },
    items: [
      {
        icon: "\u{1F4DE}",
        title: { en: "Missed calls", de: "Verpasste Anrufe" },
        desc: {
          en: "You\u2019re on the job and can\u2019t pick up. The customer calls the next guy.",
          de: "Du bist auf der Baustelle und kannst nicht ans Telefon. Der Kunde ruft den Naechsten an.",
        },
      },
      {
        icon: "\u{1F4CB}",
        title: { en: "Quote backlog", de: "Offerten-Stau" },
        desc: {
          en: "Writing quotes in the evening instead of spending time with family? It doesn\u2019t have to be this way.",
          de: "Abends noch Offerten schreiben statt Zeit mit der Familie? Das muss nicht sein.",
        },
      },
      {
        icon: "\u{1F559}",
        title: { en: "Admin instead of work", de: "Admin statt Arbeit" },
        desc: {
          en: "5+ hours a week on scheduling, emails, and paperwork \u2013 time you\u2019re missing.",
          de: "5+ Stunden pro Woche fuer Termine, Mails und Papierkram \u2013 Zeit, die dir fehlt.",
        },
      },
    ],
  },
  features: {
    tag: { en: "Features", de: "Funktionen" },
    title: {
      en: "Your digital employee \u2013 always available",
      de: "Dein digitaler Mitarbeiter \u2013 immer erreichbar",
    },
    subtitle: {
      en: "An AI assistant that speaks your language and understands your business.",
      de: "Ein KI-Assistent, der deine Sprache spricht und dein Geschaeft versteht.",
    },
    items: [
      {
        icon: "\u{1F4AC}",
        color: "bg-blue-100",
        title: { en: "WhatsApp & Web Chat", de: "WhatsApp & Web-Chat" },
        desc: {
          en: "Customers message via WhatsApp or your website \u2013 the assistant replies instantly, books appointments, and answers questions.",
          de: "Kunden schreiben per WhatsApp oder auf deiner Website \u2013 der Assistent antwortet sofort, bucht Termine und beantwortet Fragen.",
        },
      },
      {
        icon: "\u{1F4DE}",
        color: "bg-amber-100",
        title: { en: "Phone Assistant", de: "Telefon-Assistent" },
        desc: {
          en: "Missed calls are a thing of the past. The AI answers calls, takes job requests, and forwards urgent ones to you.",
          de: "Verpasste Anrufe gehoeren der Vergangenheit an. Der KI nimmt Anrufe entgegen, nimmt Auftraege auf und leitet Dringendes weiter.",
        },
      },
      {
        icon: "\u{1F4C4}",
        color: "bg-green-100",
        title: { en: "Automatic Quotes", de: "Automatische Offerten" },
        desc: {
          en: "Customer describes the job \u2013 the assistant drafts a quote from your templates. You just review and send.",
          de: "Kunde beschreibt den Job \u2013 der Assistent erstellt eine Offerte aus deinen Vorlagen. Du pruefst nur noch kurz und sendest.",
        },
      },
      {
        icon: "\u{1F4C5}",
        color: "bg-purple-100",
        title: { en: "Smart Scheduling", de: "Smarte Terminplanung" },
        desc: {
          en: "The assistant knows your calendar, schedules appointments, and sends automatic reminders to your customers.",
          de: "Der Assistent kennt deinen Kalender, plant Termine ein und schickt automatisch Erinnerungen an deine Kunden.",
        },
      },
    ],
  },
  how: {
    tag: { en: "How it works", de: "So funktioniert's" },
    title: { en: "Ready in 3 steps", de: "In 3 Schritten startklar" },
    subtitle: {
      en: "No IT knowledge needed. We set everything up for you.",
      de: "Kein IT-Wissen noetig. Wir richten alles fuer dich ein.",
    },
    steps: [
      {
        title: { en: "Discovery call", de: "Erstgespraech" },
        desc: {
          en: "We look at your business and find out where you\u2019re losing the most time.",
          de: "Wir schauen uns dein Geschaeft an und finden heraus, wo du am meisten Zeit verlierst.",
        },
      },
      {
        title: { en: "Setup", de: "Einrichtung" },
        desc: {
          en: "We configure your AI assistant with your texts, prices, and calendar.",
          de: "Wir konfigurieren deinen KI-Assistenten mit deinen Texten, Preisen und deinem Kalender.",
        },
      },
      {
        title: { en: "Done!", de: "Laeuft!" },
        desc: {
          en: "Your assistant takes over. You focus on your work \u2013 we handle the rest.",
          de: "Dein Assistent uebernimmt. Du konzentrierst dich auf deine Arbeit \u2013 wir kuemmern uns um den Rest.",
        },
      },
    ],
  },
  useCases: {
    tag: { en: "Industries", de: "Branchen" },
    title: {
      en: "For everyone who works with their hands",
      de: "Fuer alle, die mit den Haenden arbeiten",
    },
    items: [
      {
        icon: "\u{1F527}",
        title: { en: "Plumbing & Heating", de: "Sanitaer & Heizung" },
        desc: {
          en: "Prioritize emergency requests, schedule maintenance, generate quotes.",
          de: "Notfall-Anfragen priorisieren, Termine fuer Wartung planen, Offerten erstellen.",
        },
      },
      {
        icon: "\u26A1",
        title: { en: "Electricians", de: "Elektriker" },
        desc: {
          en: "Take installation requests, check availability, send cost estimates.",
          de: "Installations-Anfragen aufnehmen, Verfuegbarkeit pruefen, Kostenvoranschlaege senden.",
        },
      },
      {
        icon: "\u{1F354}",
        title: { en: "Restaurants & Hospitality", de: "Restaurants & Gastro" },
        desc: {
          en: "Accept reservations, answer menu questions, take orders.",
          de: "Reservierungen annehmen, Speisekarte-Fragen beantworten, Bestellungen aufnehmen.",
        },
      },
      {
        icon: "\u{1F528}",
        title: { en: "Painters & Plasterers", de: "Maler & Gipser" },
        desc: {
          en: "Schedule site visits, capture project details, prepare quotes.",
          de: "Besichtigungstermine vereinbaren, Projektdetails aufnehmen, Offerten vorbereiten.",
        },
      },
      {
        icon: "\u{1F3E0}",
        title: { en: "Property Management", de: "Hauswartung" },
        desc: {
          en: "Auto-respond to tenant requests, coordinate contractors, log damage reports.",
          de: "Mieter-Anfragen automatisch beantworten, Handwerker koordinieren, Schadensmeldungen aufnehmen.",
        },
      },
      {
        icon: "\u{1F69A}",
        title: { en: "Moving & Transport", de: "Umzuege & Transport" },
        desc: {
          en: "Calculate moving quotes, coordinate schedules, send confirmations.",
          de: "Umzugs-Offerten berechnen, Termine koordinieren, Bestaetigung senden.",
        },
      },
    ],
  },
  pricing: {
    tag: { en: "Pricing", de: "Preise" },
    title: {
      en: "Simple, transparent, fair",
      de: "Einfach, transparent, fair",
    },
    subtitle: {
      en: "No hidden costs. Cancel anytime.",
      de: "Keine versteckten Kosten. Kuendbar jederzeit.",
    },
    popular: { en: "Popular", de: "Beliebt" },
    tiers: [
      {
        name: "Starter",
        desc: { en: "For solo operators", de: "Fuer Einzelunternehmer" },
        price: "CHF 149",
        period: { en: "+ one-time CHF 500 setup", de: "+ einmalig CHF 500 Setup" },
        features: {
          en: [
            "WhatsApp assistant",
            "Appointment booking",
            "Automatic replies",
            "1 channel (WhatsApp or Web)",
            "Email support",
          ],
          de: [
            "WhatsApp-Assistent",
            "Terminbuchung",
            "Automatische Antworten",
            "1 Kanal (WhatsApp oder Web)",
            "E-Mail-Support",
          ],
        },
        featured: false,
        cta: { en: "Get started", de: "Starten" },
      },
      {
        name: "Professional",
        desc: { en: "For growing businesses", de: "Fuer wachsende Betriebe" },
        price: "CHF 299",
        period: {
          en: "+ one-time CHF 1,000 setup",
          de: "+ einmalig CHF 1'000 Setup",
        },
        features: {
          en: [
            "Everything in Starter",
            "Phone assistant",
            "Automatic quotes",
            "All channels (WhatsApp, Web, Phone)",
            "Calendar integration",
            "Priority support",
          ],
          de: [
            "Alles aus Starter",
            "Telefon-Assistent",
            "Automatische Offerten",
            "Alle Kanaele (WhatsApp, Web, Telefon)",
            "Kalender-Integration",
            "Prioritaets-Support",
          ],
        },
        featured: true,
        cta: { en: "Get started", de: "Starten" },
      },
      {
        name: "Enterprise",
        desc: { en: "For teams & locations", de: "Fuer Teams & Filialen" },
        price: { en: "Custom", de: "Individuell" },
        period: { en: "Tailored to you", de: "Massgeschneidert" },
        features: {
          en: [
            "Everything in Professional",
            "Multiple locations",
            "CRM integration",
            "Bexio/Abacus integration",
            "Dedicated account manager",
            "SLA guarantee",
          ],
          de: [
            "Alles aus Professional",
            "Mehrere Standorte",
            "CRM-Integration",
            "Bexio/Abacus-Anbindung",
            "Dedizierter Ansprechpartner",
            "SLA-Garantie",
          ],
        },
        featured: false,
        cta: { en: "Contact us", de: "Kontakt" },
      },
    ],
  },
  cta: {
    title: {
      en: "Ready to meet your AI assistant?",
      de: "Bereit, deinen KI-Assistenten zu treffen?",
    },
    subtitle: {
      en: "15-minute discovery call \u2013 free and no obligation. We\u2019ll show you what\u2019s possible.",
      de: "15 Minuten Erstgespraech \u2013 kostenlos und unverbindlich. Wir zeigen dir, was moeglich ist.",
    },
    button: {
      en: "Book a discovery call \u2192",
      de: "Erstgespraech vereinbaren \u2192",
    },
  },
  footer: {
    copy: {
      en: "\u00A9 2026 automate.ch \u2013 Winterthur, Switzerland",
      de: "\u00A9 2026 automate.ch \u2013 Winterthur, Schweiz",
    },
    imprint: { en: "Imprint", de: "Impressum" },
    privacy: { en: "Privacy", de: "Datenschutz" },
    terms: { en: "Terms", de: "AGB" },
  },
} as const;

export default t;
