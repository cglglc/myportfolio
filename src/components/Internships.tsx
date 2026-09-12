type InternshipsProps = {
  locale: string;
};

const internships = [
  {
    company: "DSS Bioenformatik Robotik Yazılım A.Ş.",
    roleTr: "Web Geliştirme Stajyeri",
    roleEn: "Web Development Intern",
    location: "Ankara",
    dateTr: "Ağu 2025 - Eyl 2025",
    dateEn: "Aug 2025 - Sep 2025",
    detailTr: "ASP.NET MVC ve SQL entegrasyonu kullanarak tekstil şirketi örneği üzerinden kurumsal web sitesi geliştirdi.",
    detailEn: "Created a corporate website using ASP.NET MVC and SQL integration, using a textile company as an example.",
  },
  {
    company: "Bilsan Yazılım Sistemleri (Dolphin Software)",
    roleTr: "Yazılım Stajyeri",
    roleEn: "Software Intern",
    location: "Denizli",
    dateTr: "Oca 2025 - Şub 2025",
    dateEn: "Jan 2025 - Feb 2025",
    detailTr: "Admin panelli dinamik CV sitesi ve dört yemek türüne göre haftalık menü oluşturan web uygulaması geliştirdi.",
    detailEn: "Developed an admin-based dynamic resume website and a weekly meal planner web application.",
  },
  {
    company: "Dentaş Kağıt Sanayi",
    roleTr: "Web Geliştirme Stajyeri",
    roleEn: "Web Development Intern",
    location: "Denizli",
    dateTr: "Tem 2024 - Ağu 2024",
    dateEn: "Jul 2024 - Aug 2024",
    detailTr: "C# ve ASP.NET ile web geliştirme deneyimi kazandı ve SQL veritabanı entegre küçük ölçekli web uygulaması geliştirdi.",
    detailEn: "Gained practical experience with C# and ASP.NET and built a small-scale SQL-integrated web application.",
  },
];

export default function Internships({ locale }: InternshipsProps) {
  return (
    <section className="section-shell">
      <div className="section-inner">
        <p className="section-kicker">
          {locale === "en" ? "Experience" : "Deneyim"}
        </p>

        <div className="relative mt-10 space-y-6 pl-8 before:absolute before:left-2 before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-[#e8c9ef]/25 md:pl-12 md:before:left-3">
          {internships.map((item) => (
            <article key={item.company} className="relative glass-card overflow-hidden">
              <div className="corner-glow" />
              <div className="absolute -left-[2.15rem] top-7 flex h-5 w-5 items-center justify-center rounded-full border border-[#e8c9ef]/60 bg-[#07112b] md:-left-[3.15rem]">
                <span className="h-2 w-2 rounded-full bg-[#e8c9ef]" />
              </div>

              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold leading-snug text-[#f4e9ff] md:text-xl">
                    {item.company}
                  </h3>
                  <p className="mt-1 text-sm text-[#e8c9ef]">
                    {locale === "en" ? item.roleEn : item.roleTr}
                  </p>
                </div>

                <div className="max-w-full rounded-full border border-[#e8c9ef]/15 bg-[#e8c9ef]/10 px-4 py-2 text-sm leading-5 text-[#ffffff] md:text-right">
                  {item.location} · {locale === "en" ? item.dateEn : item.dateTr}
                </div>
              </div>

              <p className="mt-5 leading-7 text-[#d9cdea]">
                {locale === "en" ? item.detailEn : item.detailTr}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
