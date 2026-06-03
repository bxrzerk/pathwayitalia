import { useState } from "react";

type Program = {
  university: string;
  title: string;
  city: string;
  duration: string;
  category: string;
};

const programs: Program[] = [
  { university: "Università Bocconi", title: "BSc International Economics and Management", city: "Milan", duration: "3 years", category: "Business & Economics" },
  { university: "Università Bocconi", title: "BSc Economics and Data Science", city: "Milan", duration: "3 years", category: "Business & Economics" },
  { university: "LUISS Guido Carli", title: "BSc Business and Management", city: "Rome", duration: "3 years", category: "Business & Economics" },
  { university: "University of Turin", title: "BSc Economics and Business Administration", city: "Turin", duration: "3 years", category: "Business & Economics" },
  { university: "Università Cattolica del Sacro Cuore", title: "BA Business Administration", city: "Milan", duration: "3 years", category: "Business & Economics" },

  { university: "Università di Bologna", title: "BSc Engineering Management", city: "Bologna", duration: "3 years", category: "Engineering & Tech" },
  { university: "Politecnico di Milano", title: "BSc Computer Engineering", city: "Milan", duration: "3 years", category: "Engineering & Tech" },
  { university: "Politecnico di Milano", title: "BSc Mathematical Engineering", city: "Milan", duration: "3 years", category: "Engineering & Tech" },
  { university: "University of Trento", title: "BSc Information Engineering", city: "Trento", duration: "3 years", category: "Engineering & Tech" },
  { university: "Politecnico di Torino", title: "BSc Electronic Engineering", city: "Turin", duration: "3 years", category: "Engineering & Tech" },

  { university: "Politecnico di Milano", title: "BSc Architectural Design", city: "Milan", duration: "3 years", category: "Design & Architecture" },
  { university: "IED Istituto Europeo di Design", title: "BA Graphic Design", city: "Milan / Rome", duration: "3 years", category: "Design & Architecture" },
  { university: "NABA Nuova Accademia di Belle Arti", title: "BA Design", city: "Milan", duration: "3 years", category: "Design & Architecture" },

  { university: "LUISS Guido Carli", title: "BA Political Science and International Relations", city: "Rome", duration: "3 years", category: "Law & Politics" },
  { university: "Università Cattolica del Sacro Cuore", title: "BA International Relations", city: "Milan", duration: "3 years", category: "Law & Politics" },
  { university: "Link Campus University", title: "BA International and Diplomatic Studies", city: "Rome", duration: "3 years", category: "Law & Politics" },

  { university: "Università di Padova", title: "BSc Biotechnology", city: "Padua", duration: "3 years", category: "Life Sciences" },
  { university: "Università di Bologna", title: "BSc Biological Sciences", city: "Bologna", duration: "3 years", category: "Life Sciences" },

  { university: "Istituto Marangoni", title: "BA Fashion Design", city: "Milan", duration: "3 years", category: "Fashion & Arts" },
  { university: "Politecnico di Milano", title: "BSc Fashion Design and Engineering", city: "Milan", duration: "3 years", category: "Fashion & Arts" },
];

const categories = [
  "All",
  "Business & Economics",
  "Engineering & Tech",
  "Design & Architecture",
  "Law & Politics",
  "Life Sciences",
  "Fashion & Arts",
];

export function Programs() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? programs : programs.filter((p) => p.category === active);

  return (
    <section id="programs" className="py-24 lg:py-36 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal max-w-2xl">
          <span className="text-xs tracking-[0.3em] uppercase text-terracotta">Programs</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-ocean leading-tight">
            Study in Italy. <em className="text-gold not-italic">In English.</em>
          </h2>
          <p className="mt-6 text-lg text-ocean/70">
            Italy's top universities offer hundreds of fully accredited bachelor's
            programs entirely in English — in business, engineering, design, law,
            medicine, and more.
          </p>
        </div>

        <div className="reveal mt-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full border transition-all ${
                active === c
                  ? "bg-gold text-ocean border-gold"
                  : "border-ocean/20 text-ocean/70 hover:border-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article
              key={`${p.university}-${p.title}`}
              className="reveal bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="text-[11px] uppercase tracking-[0.25em] text-gold">{p.university}</div>
              <h3 className="mt-3 font-display text-xl text-ocean leading-snug">{p.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-muted text-ocean/70">
                  {p.city}
                </span>
                <span className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-muted text-ocean/70">
                  {p.duration}
                </span>
                <span className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-sage/20 text-sage">
                  EN
                </span>
              </div>
              <a href="#apply" className="mt-6 inline-flex items-center gap-1.5 text-sm text-gold font-medium hover:gap-3 transition-all">
                Learn More <span>→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="reveal mt-16 text-center">
          <p className="text-ocean/70 italic">Don't see your program? We know more.</p>
          <a
            href="#apply"
            className="mt-4 inline-flex rounded-full bg-ocean text-gold px-7 py-3 text-sm font-medium hover:bg-ocean/90 transition-all"
          >
            Contact Us →
          </a>
        </div>
      </div>
    </section>
  );
}
