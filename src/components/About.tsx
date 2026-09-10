export default function About({ locale }: { locale: string }) {
  const highlights = [
    {
      labelTr: "Eğitim",
      labelEn: "Education",
      valueTr: "ODTÜ Bilgisayar Mühendisliği",
      valueEn: "METU Computer Engineering",
    },
    {
      labelTr: "Geliştirme",
      labelEn: "Development",
      valueTr: "ASP.NET, C#, SQL",
      valueEn: "ASP.NET, C#, SQL",
    },
    {
      labelTr: "Tasarım",
      labelEn: "Design",
      valueTr: "UML, ERD, Gereksinim Analizi",
      valueEn: "UML, ERD, Requirements Analysis",
    },
  ];

  return (
    <section id="about" className="section-shell">
      <div className="section-inner">
        <p className="section-kicker">
          {locale === "en" ? "About" : "Hakkımda"}
        </p>

        <div className="mt-4 grid gap-8 lg:grid-cols-[0.38fr_1fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#e8c9ef]/18 bg-[#111a3d]/85 p-6 shadow-2xl shadow-[#020718]/25">
            <div className="corner-glow" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#cbb7e8]">
              {locale === "en" ? "Profile Notes" : "Profil Notları"}
            </p>

            <div className="mt-8 space-y-6">
              {highlights.map((item) => (
                <div key={item.labelEn} className="border-l border-[#e8c9ef]/35 pl-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#cbb7e8]">
                    {locale === "en" ? item.labelEn : item.labelTr}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#f4e9ff]">
                    {locale === "en" ? item.valueEn : item.valueTr}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-full border border-[#e8c9ef]/18 bg-[#e8c9ef]/10 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#f0d4ff]">
              {locale === "en" ? "Open to software roles" : "Yazılım rollerine açık"}
            </div>
          </div>

          <div>
            <h2 className="section-title mt-0 max-w-3xl">
              {locale === "en"
                ? "I connect software development with clear requirements and thoughtful system design."
                : "Yazılım geliştirmeyi, net gereksinimler ve doğru sistem tasarımıyla birleştiriyorum."}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#d9cdea] md:text-lg">
              {locale === "en"
                ? "I am a Computer Engineering graduate from Middle East Technical University. I focus on understanding user needs, defining system scope, and designing sustainable software solutions. I have experience with SRS and SDD documentation, UML, Use Case and Class Diagrams, system design, test planning, and Agile workflows. Alongside this software engineering foundation, I have worked with ASP.NET, C#, SQL, React Native, TypeScript, and Firebase across different projects. I aim to combine analytical thinking with technical knowledge to define the right problem and shape practical, implementable solutions."
                : "Middle East Technical University Bilgisayar Mühendisliği mezunuyum. Kullanıcı ihtiyaçlarını anlamaya, sistem kapsamını belirlemeye ve sürdürülebilir yazılım çözümleri tasarlamaya odaklanıyorum. SRS ve SDD dokümantasyonu, UML, Use Case ve Class Diagram, sistem tasarımı, test planlaması ve Agile çalışma süreçlerinde deneyim sahibiyim. Bu yazılım mühendisliği altyapısının yanında farklı projelerde ASP.NET, C#, SQL, React Native, TypeScript ve Firebase ile çalıştım. Analitik düşünme yeteneğimi teknik bilgimle birleştirerek doğru problemi tanımlayan ve uygulanabilir çözümler ortaya koyan sistemler tasarlamayı hedefliyorum."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
