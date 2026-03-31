"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import t, { type Lang } from "./i18n";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

function useLang() {
  return useContext(LangContext);
}

function l(obj: { en: string; de: string }, lang: Lang) {
  return obj[lang];
}

function Nav() {
  const { lang, setLang } = useLang();
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/92 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-extrabold">
          automate<span className="text-blue-600">.ch</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            {l(t.nav.problem, lang)}
          </a>
          <a href="#features" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            {l(t.nav.features, lang)}
          </a>
          <a href="#how" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            {l(t.nav.how, lang)}
          </a>
          <a href="#pricing" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            {l(t.nav.pricing, lang)}
          </a>
          <div className="flex bg-gray-100 rounded-md p-0.5 border border-gray-200">
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 text-xs font-semibold rounded transition-all ${
                lang === "en"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("de")}
              className={`px-2.5 py-1 text-xs font-semibold rounded transition-all ${
                lang === "de"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500"
              }`}
            >
              DE
            </button>
          </div>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            {l(t.nav.contact, lang)}
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const { lang } = useLang();
  return (
    <section className="pt-36 pb-20 px-6 text-center max-w-3xl mx-auto">
      <div className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
        {l(t.hero.badge, lang)}
      </div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-5">
        {l(t.hero.titlePre, lang)}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {l(t.hero.titleHighlight, lang)}
        </span>
        {l(t.hero.titlePost, lang)}
      </h1>
      <p className="text-lg text-gray-500 max-w-xl mx-auto mb-9 leading-relaxed">
        {l(t.hero.subtitle, lang)}
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:-translate-y-0.5 transition-all"
        >
          {l(t.hero.cta, lang)}
        </a>
        <a
          href="#how"
          className="inline-flex items-center gap-2 bg-white text-gray-900 px-7 py-3.5 rounded-xl font-semibold border border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all"
        >
          {l(t.hero.ctaSecondary, lang)}
        </a>
      </div>
    </section>
  );
}

function Problem() {
  const { lang } = useLang();
  return (
    <section id="problem" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-3">
            {l(t.problem.tag, lang)}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            {l(t.problem.title, lang)}
          </h2>
          <p className="text-gray-500 text-lg">
            {l(t.problem.subtitle, lang)}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {t.problem.items.map((p) => (
            <div
              key={l(p.title, lang)}
              className="fade-in bg-white border border-gray-200 rounded-xl p-8 shadow-sm"
            >
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{l(p.title, lang)}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{l(p.desc, lang)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const { lang } = useLang();
  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-3">
            {l(t.features.tag, lang)}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            {l(t.features.title, lang)}
          </h2>
          <p className="text-gray-500 text-lg">
            {l(t.features.subtitle, lang)}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {t.features.items.map((f) => (
            <div
              key={l(f.title, lang)}
              className="fade-in bg-gray-50 border border-gray-200 rounded-2xl p-10 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div
                className={`w-14 h-14 ${f.color} rounded-2xl flex items-center justify-center text-2xl mb-5`}
              >
                {f.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{l(f.title, lang)}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{l(f.desc, lang)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const { lang } = useLang();
  return (
    <section id="how" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-3">
            {l(t.how.tag, lang)}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            {l(t.how.title, lang)}
          </h2>
          <p className="text-gray-500 text-lg">
            {l(t.how.subtitle, lang)}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {t.how.steps.map((s, i) => (
            <div key={i} className="fade-in text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-extrabold text-xl mx-auto mb-4">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold mb-2">{l(s.title, lang)}</h3>
              <p className="text-gray-500 text-sm">{l(s.desc, lang)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  const { lang } = useLang();
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-3">
            {l(t.useCases.tag, lang)}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {l(t.useCases.title, lang)}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.useCases.items.map((u) => (
            <div
              key={l(u.title, lang)}
              className="fade-in bg-gray-50 border border-gray-200 rounded-xl p-7 flex gap-4"
            >
              <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center text-xl shrink-0">
                {u.icon}
              </div>
              <div>
                <h3 className="font-bold mb-1">{l(u.title, lang)}</h3>
                <p className="text-gray-500 text-sm">{l(u.desc, lang)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const { lang } = useLang();
  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-3">
            {l(t.pricing.tag, lang)}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            {l(t.pricing.title, lang)}
          </h2>
          <p className="text-gray-500 text-lg">
            {l(t.pricing.subtitle, lang)}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {t.pricing.tiers.map((tier) => {
            const price = typeof tier.price === "string" ? tier.price : l(tier.price, lang);
            const isCustom = price === "Custom" || price === "Individuell";
            return (
              <div
                key={tier.name}
                className={`fade-in relative bg-white rounded-2xl p-10 text-center ${
                  tier.featured
                    ? "border-2 border-blue-600 shadow-xl"
                    : "border border-gray-200"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    {l(t.pricing.popular, lang)}
                  </span>
                )}
                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <p className="text-gray-500 text-sm mb-5">{l(tier.desc, lang)}</p>
                <div className="text-4xl font-extrabold tracking-tight">
                  {price}
                  {!isCustom && (
                    <span className="text-base font-medium text-gray-500">
                      /{lang === "en" ? "mo" : "Mo"}
                    </span>
                  )}
                </div>
                <p className="text-gray-500 text-sm mb-6">{l(tier.period, lang)}</p>
                <ul className="text-left space-y-3 mb-8">
                  {tier.features[lang].map((f) => (
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
                    tier.featured
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700"
                      : "bg-white text-gray-900 border border-gray-200 hover:border-blue-600 hover:text-blue-600"
                  }`}
                >
                  {l(tier.cta, lang)}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const { lang } = useLang();
  return (
    <section className="px-6 pb-20">
      <div
        id="contact"
        className="max-w-6xl mx-auto bg-gradient-to-br from-blue-900 via-blue-600 to-purple-600 rounded-2xl px-10 py-16 text-center text-white"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
          {l(t.cta.title, lang)}
        </h2>
        <p className="text-white/80 text-lg max-w-lg mx-auto mb-7">
          {l(t.cta.subtitle, lang)}
        </p>
        <a
          href="mailto:info@automate.ch?subject=Interesse%20an%20KI-Assistent"
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-7 py-3.5 rounded-xl font-semibold hover:bg-blue-50 hover:-translate-y-0.5 transition-all"
        >
          {l(t.cta.button, lang)}
        </a>
      </div>
    </section>
  );
}

function Footer() {
  const { lang } = useLang();
  return (
    <footer className="border-t border-gray-200 py-10 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap gap-4">
        <p className="text-sm text-gray-500">{l(t.footer.copy, lang)}</p>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            {l(t.footer.imprint, lang)}
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            {l(t.footer.privacy, lang)}
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            {l(t.footer.terms, lang)}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
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
    <LangContext.Provider value={{ lang, setLang }}>
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
    </LangContext.Provider>
  );
}
