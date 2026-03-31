"use client";

import { useEffect, useRef } from "react";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/92 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-extrabold">
          automate<span className="text-blue-600">.ch</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            Problem
          </a>
          <a href="#features" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            Funktionen
          </a>
          <a href="#how" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            So funktioniert&apos;s
          </a>
          <a href="#pricing" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            Preise
          </a>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            Kontakt
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-36 pb-20 px-6 text-center max-w-3xl mx-auto">
      <div className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
        Jetzt in der Pilotphase in Winterthur
      </div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-5">
        Dein{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          KI-Assistent
        </span>{" "}
        der mitdenkt, damit du arbeiten kannst.
      </h1>
      <p className="text-lg text-gray-500 max-w-xl mx-auto mb-9 leading-relaxed">
        Termine, Offerten, Kundenfragen &ndash; dein KI-Assistent erledigt den
        Buerokram, waehrend du auf der Baustelle bist. Per WhatsApp, Telefon oder Web.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:-translate-y-0.5 transition-all"
        >
          Kostenlos testen
        </a>
        <a
          href="#how"
          className="inline-flex items-center gap-2 bg-white text-gray-900 px-7 py-3.5 rounded-xl font-semibold border border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all"
        >
          So funktioniert&apos;s &rarr;
        </a>
      </div>
    </section>
  );
}

const problems = [
  {
    icon: "\u{1F4DE}",
    title: "Verpasste Anrufe",
    desc: "Du bist auf der Baustelle und kannst nicht ans Telefon. Der Kunde ruft den Naechsten an.",
  },
  {
    icon: "\u{1F4CB}",
    title: "Offerten-Stau",
    desc: "Abends noch Offerten schreiben statt Zeit mit der Familie? Das muss nicht sein.",
  },
  {
    icon: "\u{1F559}",
    title: "Admin statt Arbeit",
    desc: "5+ Stunden pro Woche fuer Termine, Mails und Papierkram \u2013 Zeit, die dir fehlt.",
  },
];

function Problem() {
  return (
    <section id="problem" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-3">
            Das Problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Du verlierst Auftraege, weil du zu beschaeftigt bist
          </h2>
          <p className="text-gray-500 text-lg">
            Handwerker und Frontline-Teams arbeiten mit den Haenden &ndash; nicht am
            Bildschirm. Aber die Kunden erwarten sofortige Antworten.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className="fade-in bg-white border border-gray-200 rounded-xl p-8 shadow-sm"
            >
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: "\u{1F4AC}",
    color: "bg-blue-100",
    title: "WhatsApp & Web-Chat",
    desc: "Kunden schreiben per WhatsApp oder auf deiner Website \u2013 der Assistent antwortet sofort, bucht Termine und beantwortet Fragen.",
  },
  {
    icon: "\u{1F4DE}",
    color: "bg-amber-100",
    title: "Telefon-Assistent",
    desc: "Verpasste Anrufe gehoeren der Vergangenheit an. Der KI nimmt Anrufe entgegen, nimmt Auftraege auf und leitet Dringendes weiter.",
  },
  {
    icon: "\u{1F4C4}",
    color: "bg-green-100",
    title: "Automatische Offerten",
    desc: "Kunde beschreibt den Job \u2013 der Assistent erstellt eine Offerte aus deinen Vorlagen. Du pruefst nur noch kurz und sendest.",
  },
  {
    icon: "\u{1F4C5}",
    color: "bg-purple-100",
    title: "Smarte Terminplanung",
    desc: "Der Assistent kennt deinen Kalender, plant Termine ein und schickt automatisch Erinnerungen an deine Kunden.",
  },
];

function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-3">
            Funktionen
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Dein digitaler Mitarbeiter &ndash; immer erreichbar
          </h2>
          <p className="text-gray-500 text-lg">
            Ein KI-Assistent, der deine Sprache spricht und dein Geschaeft versteht.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="fade-in bg-gray-50 border border-gray-200 rounded-2xl p-10 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div
                className={`w-14 h-14 ${f.color} rounded-2xl flex items-center justify-center text-2xl mb-5`}
              >
                {f.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    num: 1,
    title: "Erstgespraech",
    desc: "Wir schauen uns dein Geschaeft an und finden heraus, wo du am meisten Zeit verlierst.",
  },
  {
    num: 2,
    title: "Einrichtung",
    desc: "Wir konfigurieren deinen KI-Assistenten mit deinen Texten, Preisen und deinem Kalender.",
  },
  {
    num: 3,
    title: "Laeuft!",
    desc: "Dein Assistent uebernimmt. Du konzentrierst dich auf deine Arbeit \u2013 wir kuemmern uns um den Rest.",
  },
];

function HowItWorks() {
  return (
    <section id="how" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-3">
            So funktioniert&apos;s
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            In 3 Schritten startklar
          </h2>
          <p className="text-gray-500 text-lg">
            Kein IT-Wissen noetig. Wir richten alles fuer dich ein.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="fade-in text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-extrabold text-xl mx-auto mb-4">
                {s.num}
              </div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const useCases = [
  { icon: "\u{1F527}", title: "Sanitaer & Heizung", desc: "Notfall-Anfragen priorisieren, Termine fuer Wartung planen, Offerten erstellen." },
  { icon: "\u26A1", title: "Elektriker", desc: "Installations-Anfragen aufnehmen, Verfuegbarkeit pruefen, Kostenvoranschlaege senden." },
  { icon: "\u{1F354}", title: "Restaurants & Gastro", desc: "Reservierungen annehmen, Speisekarte-Fragen beantworten, Bestellungen aufnehmen." },
  { icon: "\u{1F528}", title: "Maler & Gipser", desc: "Besichtigungstermine vereinbaren, Projektdetails aufnehmen, Offerten vorbereiten." },
  { icon: "\u{1F3E0}", title: "Hauswartung", desc: "Mieter-Anfragen automatisch beantworten, Handwerker koordinieren, Schadensmeldungen aufnehmen." },
  { icon: "\u{1F69A}", title: "Umzuege & Transport", desc: "Umzugs-Offerten berechnen, Termine koordinieren, Bestaetigung senden." },
];

function UseCases() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-3">
            Branchen
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Fuer alle, die mit den Haenden arbeiten
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((u) => (
            <div
              key={u.title}
              className="fade-in bg-gray-50 border border-gray-200 rounded-xl p-7 flex gap-4"
            >
              <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center text-xl shrink-0">
                {u.icon}
              </div>
              <div>
                <h3 className="font-bold mb-1">{u.title}</h3>
                <p className="text-gray-500 text-sm">{u.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const tiers = [
  {
    name: "Starter",
    desc: "Fuer Einzelunternehmer",
    price: "CHF 149",
    period: "+ einmalig CHF 500 Setup",
    features: [
      "WhatsApp-Assistent",
      "Terminbuchung",
      "Automatische Antworten",
      "1 Kanal (WhatsApp oder Web)",
      "E-Mail-Support",
    ],
    featured: false,
  },
  {
    name: "Professional",
    desc: "Fuer wachsende Betriebe",
    price: "CHF 299",
    period: "+ einmalig CHF 1'000 Setup",
    features: [
      "Alles aus Starter",
      "Telefon-Assistent",
      "Automatische Offerten",
      "Alle Kanaele (WhatsApp, Web, Telefon)",
      "Kalender-Integration",
      "Prioritaets-Support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    desc: "Fuer Teams & Filialen",
    price: "Individuell",
    period: "Massgeschneidert",
    features: [
      "Alles aus Professional",
      "Mehrere Standorte",
      "CRM-Integration",
      "Bexio/Abacus-Anbindung",
      "Dedizierter Ansprechpartner",
      "SLA-Garantie",
    ],
    featured: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-3">
            Preise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Einfach, transparent, fair
          </h2>
          <p className="text-gray-500 text-lg">
            Keine versteckten Kosten. Kuendbar jederzeit.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`fade-in relative bg-white rounded-2xl p-10 text-center ${
                t.featured
                  ? "border-2 border-blue-600 shadow-xl"
                  : "border border-gray-200"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Beliebt
                </span>
              )}
              <h3 className="text-xl font-bold mb-1">{t.name}</h3>
              <p className="text-gray-500 text-sm mb-5">{t.desc}</p>
              <div className="text-4xl font-extrabold tracking-tight">
                {t.price}
                {t.price !== "Individuell" && (
                  <span className="text-base font-medium text-gray-500">/Mo</span>
                )}
              </div>
              <p className="text-gray-500 text-sm mb-6">{t.period}</p>
              <ul className="text-left space-y-3 mb-8">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-gray-500"
                  >
                    <span className="text-blue-600 font-bold shrink-0">&check;</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block w-full py-3 rounded-xl font-semibold transition-all ${
                  t.featured
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700"
                    : "bg-white text-gray-900 border border-gray-200 hover:border-blue-600 hover:text-blue-600"
                }`}
              >
                {t.price === "Individuell" ? "Kontakt" : "Starten"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-6 pb-20">
      <div
        id="contact"
        className="max-w-6xl mx-auto bg-gradient-to-br from-blue-900 via-blue-600 to-purple-600 rounded-2xl px-10 py-16 text-center text-white"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
          Bereit, deinen KI-Assistenten zu treffen?
        </h2>
        <p className="text-white/80 text-lg max-w-lg mx-auto mb-7">
          15 Minuten Erstgespraech &ndash; kostenlos und unverbindlich. Wir zeigen
          dir, was moeglich ist.
        </p>
        <a
          href="mailto:info@automate.ch?subject=Interesse%20an%20KI-Assistent"
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-7 py-3.5 rounded-xl font-semibold hover:bg-blue-50 hover:-translate-y-0.5 transition-all"
        >
          Erstgespraech vereinbaren &rarr;
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap gap-4">
        <p className="text-sm text-gray-500">
          &copy; 2026 automate.ch &ndash; Winterthur, Schweiz
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Impressum
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Datenschutz
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            AGB
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <style jsx global>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <Nav />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <UseCases />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}
