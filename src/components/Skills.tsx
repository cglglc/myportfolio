const technicalSkills = [
  { tr: "C#", en: "C#" },
  { tr: "SQL", en: "SQL" },
  { tr: "JavaScript", en: "JavaScript" },
  { tr: "TypeScript", en: "TypeScript" },
  { tr: "Python", en: "Python" },
  { tr: "C++", en: "C++" },
  { tr: "HTML", en: "HTML" },
  { tr: "CSS", en: "CSS" },
  { tr: "MATLAB", en: "MATLAB" },
  { tr: "UML Diyagramları", en: "UML Diagrams" },
  { tr: "ERD Tasarımı", en: "ERD Design" },
  { tr: "Gereksinim Analizi", en: "Requirements Engineering" },
  { tr: "Yazılım Tahminleme", en: "Software Estimation" },
  { tr: "Temel Veri Analizi", en: "Basic Data Analysis" },
  { tr: "Temel Makine Öğrenmesi", en: "Basic Machine Learning" },
];

const technologies = [
  { tr: "ASP.NET", en: "ASP.NET" },
  { tr: "ASP.NET MVC", en: "ASP.NET MVC" },
  { tr: "Entity Framework", en: "Entity Framework" },
  { tr: "LINQ", en: "LINQ" },
  { tr: "React Native", en: "React Native" },
  { tr: "Firebase", en: "Firebase" },
  { tr: "Microsoft SQL Server", en: "Microsoft SQL Server" },
  { tr: "Visual Studio", en: "Visual Studio" },
  { tr: "Git", en: "Git" },
  { tr: "GitHub", en: "GitHub" },
  { tr: "Jupyter Notebook", en: "Jupyter Notebook" },
  { tr: "Figma", en: "Figma" },
  { tr: "Jira", en: "Jira" },
  { tr: "Microsoft Office", en: "Microsoft Office" },
];

function SkillGroup({
  title,
  items,
  locale,
  accent,
  index,
}: {
  title: string;
  items: { tr: string; en: string }[];
  locale: string;
  accent: string;
  index: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-[#e8c9ef]/18 bg-[#111a3d]/85 p-6 text-[#f4e9ff] shadow-2xl shadow-[#020718]/25 transition hover:-translate-y-1 hover:border-[#e8c9ef]/45">
      <div className={`absolute right-0 top-0 h-32 w-32 rounded-full ${accent} blur-3xl transition group-hover:opacity-90`} />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-[#e8c9ef]/70 via-transparent to-transparent" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#cbb7e8]">
            {index}
          </p>
          <h3 className="mt-3 [font-family:var(--font-display)] text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-none text-[#f4e9ff]">
            {title}
          </h3>
        </div>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#e8c9ef]/25 bg-[#e8c9ef]/10 text-xl text-[#e8c9ef]">
          ✦
        </div>
      </div>

      <div className="relative mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {items.map((item) => (
          <span
            key={item.en}
            className="rounded-2xl border border-[#e8c9ef]/12 bg-[#e8c9ef]/10 px-3 py-2 text-center text-xs text-[#f4e9ff] shadow-lg shadow-black/10 transition hover:border-[#e8c9ef]/35 hover:bg-[#e8c9ef]/20 md:text-sm"
          >
            {locale === "en" ? item.en : item.tr}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills({ locale }: { locale: string }) {
  return (
    <section className="section-shell">
      <div className="section-inner">
        <p className="section-kicker">
          {locale === "en" ? "Skills" : "Yetenekler"}
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <SkillGroup
            title={locale === "en" ? "Technical Skills" : "Teknik Beceriler"}
            items={technicalSkills}
            locale={locale}
            accent="bg-[#e8c9ef]/25"
            index="01"
          />
          <SkillGroup
            title={locale === "en" ? "Technologies & Tools" : "Teknolojiler & Araçlar"}
            items={technologies}
            locale={locale}
            accent="bg-[#9c8bd5]/25"
            index="02"
          />
        </div>
      </div>
    </section>
  );
}
