import bocconi from "@/assets/uni-bocconi.jpg";
import bologna from "@/assets/uni-bologna.jpg";
import cattolica from "@/assets/uni-cattolica.jpg";
import polimi from "@/assets/uni-polimi.jpg";
import luiss from "@/assets/uni-luiss.jpg";
import padova from "@/assets/uni-padova.jpg";
import marangoni from "@/assets/uni-marangoni.jpg";
import ied from "@/assets/uni-ied.jpg";

const unis = [
  { name: "Università Bocconi", city: "Milan", tags: ["Business", "Economics"], image: bocconi },
  { name: "Università di Bologna", city: "Bologna", tags: ["World's Oldest", "Multidisciplinary"], image: bologna },
  { name: "Università Cattolica", city: "Milan", tags: ["Humanities", "Law"], image: cattolica },
  { name: "Politecnico di Milano", city: "Milan", tags: ["Engineering", "Design"], image: polimi },
  { name: "LUISS Guido Carli", city: "Rome", tags: ["Politics", "Economics"], image: luiss },
  { name: "Università di Padova", city: "Padova", tags: ["Sciences", "Medicine"], image: padova },
  { name: "Istituto Marangoni", city: "Milan", tags: ["Fashion", "Luxury"], image: marangoni },
  { name: "IED Istituto Europeo di Design", city: "Milan / Rome", tags: ["Design", "Visual Arts"], image: ied },
];

export function Universities() {
  return (
    <section id="universities" className="py-24 lg:py-36 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="text-xs tracking-[0.3em] uppercase text-terracotta">Le Università</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-ocean leading-tight">
              Italy's <em className="text-terracotta not-italic">Finest</em> Institutions
            </h2>
          </div>
          <p className="text-ocean/70 max-w-sm">
            Centuries of academic prestige, modern programs taught in English,
            and futures forged in Italy's most storied cities.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto pb-6 scrollbar-hide">
        <div className="flex gap-6 px-6 lg:px-10 mx-auto max-w-[1400px] snap-x snap-mandatory">
          {unis.map((u) => (
            <article
              key={u.name}
              className="reveal snap-start flex-shrink-0 w-[300px] sm:w-[340px] bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={u.image}
                  alt={`${u.name} in ${u.city}`}
                  loading="lazy"
                  width={640}
                  height={512}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean/60 via-ocean/10 to-transparent" />
                <div className="absolute bottom-3 left-5 text-[10px] uppercase tracking-[0.25em] text-ivory">
                  {u.city}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-ocean leading-tight">{u.name}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {u.tags.map((t) => (
                    <span key={t} className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-muted text-ocean/70">
                      {t}
                    </span>
                  ))}
                </div>
                <a href="#apply" className="mt-6 inline-flex items-center gap-1.5 text-sm text-gold font-medium hover:gap-3 transition-all">
                  Learn More <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
