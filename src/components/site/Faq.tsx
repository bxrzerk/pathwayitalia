import { useState } from "react";

const groups: { label: string; icon: string; items: { q: string; a: string }[] }[] = [
  {
    label: "Applications & Admissions",
    icon: "📋",
    items: [
      { q: "What are the entry requirements for Italian universities?", a: "Most require a recognised secondary diploma, proof of English (IELTS/TOEFL/Duolingo), and sometimes an entrance exam or portfolio. We map exact requirements per university." },
      { q: "Do I need to take an entrance exam?", a: "Some programs (Bocconi, Politecnico, medical degrees) require entrance tests. Others are CV/portfolio-based. We prepare you for every step." },
      { q: "When do applications open and close?", a: "Most private universities open in September; public universities follow the Universitaly portal cycle (typically Jan–July). Start at least 8 months ahead." },
      { q: "Can I apply to multiple universities at once?", a: "Yes — and we recommend it. We help you build a balanced shortlist." },
      { q: "What documents do I need to apply?", a: "Diploma, transcripts, English certificate, passport, motivation letter, and sometimes Dichiarazione di Valore. We give you a personalised checklist." },
      { q: "Is there an application fee?", a: "Most universities charge €50–€150 per application." },
      { q: "What is the Universitaly portal and how do I use it?", a: "It's the official Italian government portal for pre-enrolment. We walk you through it." },
      { q: "How competitive is admission to Bocconi or LUISS?", a: "Highly competitive — strong academics, English proficiency, and a sharp motivation letter matter most." },
    ],
  },
  {
    label: "Programs & Academics",
    icon: "🎓",
    items: [
      { q: "Are there bachelor's programs fully taught in English in Italy?", a: "Yes — hundreds, across every major field." },
      { q: "How long is a bachelor's degree in Italy?", a: "Three years (180 ECTS credits)." },
      { q: "What is the Italian credit system (CFU)?", a: "CFU = ECTS. 1 CFU ≈ 25 study hours. A bachelor's is 180 CFU." },
      { q: "Can I transfer credits from a previous university?", a: "Often yes — each university evaluates transfers case-by-case." },
      { q: "What is the difference between a public and private Italian university?", a: "Public: lower fees, larger classes, broader offerings. Private: higher fees, smaller classes, stronger international focus." },
      { q: "Is an Italian degree recognised internationally?", a: "Yes — Italian degrees are recognised across the EU and globally." },
    ],
  },
  {
    label: "Visa & Legal Requirements",
    icon: "🛂",
    items: [
      { q: "What type of visa do I need to study in Italy?", a: "A national Type D student visa." },
      { q: "How early should I apply for a student visa?", a: "As soon as you receive admission — at least 60 days before departure." },
      { q: "What documents are required for a Type D student visa?", a: "Admission letter, accommodation proof, financial means, health insurance, passport." },
      { q: "What is a Dichiarazione di Valore and do I need one?", a: "An Italian consular declaration of value for your diploma. Required by many public universities." },
      { q: "Do I need to legalise or apostille my documents?", a: "Yes — depending on your country, via apostille or consular legalisation." },
      { q: "What happens to my visa if I fail my first year?", a: "Your residence permit renewal requires minimum credits. We help you stay on track." },
      { q: "Can I work in Italy on a student visa?", a: "Yes — up to 20 hours/week." },
      { q: "What is the permesso di soggiorno and how do I get it?", a: "Your residence permit. Apply within 8 days of arrival at the local post office." },
    ],
  },
  {
    label: "Costs & Scholarships",
    icon: "💰",
    items: [
      { q: "How much does tuition cost at Italian universities?", a: "Public: €900–€4,000/year. Private: €12,000–€25,000/year." },
      { q: "Are there scholarships available for international students?", a: "Yes — DSU, university merit awards, and external funds." },
      { q: "What is the DSU scholarship?", a: "A regional needs-based scholarship covering tuition, housing, and meals." },
      { q: "What is ERISU / EDISU and how do I apply?", a: "Regional study-rights bodies. Apply alongside your admission, before deadlines." },
      { q: "How much money do I need to show for a student visa application?", a: "Approximately €6,500 per academic year." },
      { q: "What is the average monthly cost of living in Italy as a student?", a: "€800–€1,400/month depending on the city." },
      { q: "Are there merit-based scholarships at private universities?", a: "Yes — Bocconi, LUISS, and Cattolica offer substantial merit awards." },
    ],
  },
  {
    label: "Life in Italy",
    icon: "🏠",
    items: [
      { q: "How do I find student accommodation in Italy?", a: "Through university housing, DSU dorms, or private rentals. We help you find safe options." },
      { q: "What is it like being an international student in Italy?", a: "Vibrant, social, and well-supported in major cities." },
      { q: "Do I need to speak Italian to live in Italy?", a: "Not to start — but basics help. We recommend taking a beginner course." },
      { q: "What is the Codice Fiscale and how do I get one?", a: "An Italian tax code, required for almost everything. Apply at the Agenzia delle Entrate." },
      { q: "How do I register with the local municipality?", a: "Register your residenza at the local comune within a few months of arrival." },
      { q: "What is the TEAM health card and do international students qualify?", a: "EU students yes; non-EU students enrol in the SSN national health system." },
      { q: "Is Italy safe for international students?", a: "Yes — Italy is among the safest countries in Europe." },
      { q: "What cities are best for international students?", a: "Milan, Bologna, Rome, Turin, Padua, and Florence." },
    ],
  },
  {
    label: "Working with PathwayItalia",
    icon: "🤝",
    items: [
      { q: "What exactly does PathwayItalia help with?", a: "Everything — university choice, applications, visa, scholarships, housing, arrival." },
      { q: "When should I reach out to PathwayItalia?", a: "Ideally 8–12 months before your intended start date." },
      { q: "Can PathwayItalia guarantee my admission?", a: "No one can — but we maximise your chances with strategy and preparation." },
      { q: "Do you help with both public and private universities?", a: "Yes — both." },
      { q: "How much do PathwayItalia's services cost?", a: "We tailor packages to your needs. Book a free consultation to discuss." },
      { q: "How do I get started?", a: "Send your application via the form below — we'll be in touch." },
    ],
  },
];

export function Faq() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="faq" className="py-24 lg:py-36 bg-gradient-to-b from-muted/40 to-ivory">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="reveal text-center max-w-2xl mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-terracotta">FAQ</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-ocean leading-tight">
            Everything You <em className="text-gold not-italic">Need to Know</em>
          </h2>
          <p className="mt-6 text-lg text-ocean/70 italic">
            Every question students ask before moving to Italy — answered honestly.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {groups.map((g) => (
            <div key={g.label} className="reveal">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{g.icon}</span>
                <h3 className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">
                  {g.label}
                </h3>
              </div>
              <div className="space-y-3">
                {g.items.map((it) => {
                  const id = `${g.label}-${it.q}`;
                  const isOpen = open === id;
                  return (
                    <div
                      key={id}
                      className={`rounded-xl border transition-all ${
                        isOpen
                          ? "bg-card border-gold border-l-4"
                          : "bg-card/60 border-border hover:border-gold/40"
                      }`}
                    >
                      <button
                        onClick={() => setOpen(isOpen ? null : id)}
                        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
                      >
                        <span className="font-medium text-ocean">{it.q}</span>
                        <span className={`text-gold text-xl transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 text-ocean/75 leading-relaxed">{it.a}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
