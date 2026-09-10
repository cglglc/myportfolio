type EducationProps = {
  locale: string;
};

export default function Education({ locale }: EducationProps) {
  return (
    <section className="section-shell">
      <div className="section-inner">
        <p className="section-kicker">
          {locale === "en" ? "Education" : "Eğitim"}
        </p>

        <div className="glass-card mt-8 overflow-hidden md:p-10">
          <div className="corner-glow" />
          <p className="text-sm uppercase tracking-[0.2em] text-[#cbb7e8]">
            {locale === "en" ? "University" : "Üniversite"}
          </p>
          <h2 className="section-title mt-3">
            {locale === "en" ? "Middle East Technical University" : "Orta Doğu Teknik Üniversitesi"}
          </h2>
          <p className="mt-4 text-xl font-semibold text-[#f4e9ff] md:text-2xl">
            {locale === "en" ? "B.Sc. Computer Engineering" : "Bilgisayar Mühendisliği Lisans"}
          </p>
          <div className="mt-6 text-[#d9cdea]">
            <p>{locale === "en" ? "Northern Cyprus" : "Kuzey Kıbrıs"}</p>
            <p>{locale === "en" ? "Oct 2020 - June 2026" : "Eki 2020 - Haz 2026"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
