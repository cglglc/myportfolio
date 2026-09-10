import Navbar from "../../src/components/Navbar";
import About from "../../src/components/About";
import Skills from "../../src/components/Skills";
import Education from "../../src/components/Education";
import Internships from "../../src/components/Internships";
import Certificates from "../../src/components/Certificates";
import Projects from "../../src/components/Projects";
import AIChat from "../../src/components/AIChat";
import Contact from "../../src/components/Contact";
import Footer from "../../src/components/Footer";
import { getTranslations } from "next-intl/server";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("hero");

  return (
    <main className="min-h-screen overflow-hidden bg-[#07112b] text-[#f4e9ff]">
      <Navbar />
      <section className="animate-page-in relative flex min-h-screen items-center px-5 pb-16 pt-28 md:px-6 md:pt-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_26%,rgba(232,201,239,0.34),transparent_26%),radial-gradient(circle_at_74%_40%,rgba(151,133,204,0.25),transparent_30%),radial-gradient(circle_at_18%_76%,rgba(244,218,245,0.16),transparent_28%),linear-gradient(180deg,#07112b_0%,#111a3d_52%,#07112b_100%)]" />
        <div className="absolute inset-x-0 top-14 -z-10 mx-auto h-[34rem] max-w-5xl rounded-full bg-[#e8c9ef]/10 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.18fr_1fr_0.48fr]">
          <aside className="hidden h-[32rem] flex-col justify-between border-l border-[#e8c9ef]/20 pl-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#cbb7e8] lg:flex">
            <span>{locale === "en" ? "Portfolio" : "Portfolyo"}</span>
          </aside>

          <div className="relative overflow-hidden rounded-[2.8rem] border border-[#e8c9ef]/18 bg-[#111a3d]/70 p-6 shadow-2xl shadow-[#020718]/30 backdrop-blur md:p-10">
            <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#e8c9ef]/18 blur-3xl" />
            <div className="absolute -bottom-20 right-12 h-56 w-56 rounded-full bg-[#e8c9ef]/8 blur-2xl" />

            <p className="relative mb-6 inline-flex rounded-full border border-[#e8c9ef]/25 bg-[#e8c9ef]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#f0d4ff]">
              Requirements Analysis • Agile • SDLC • ASP.NET Core • C# • SQL
            </p>

            <h1 className="relative max-w-4xl [font-family:var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1] tracking-[0.015em] text-[#e9cfff]">
              <span className="block">{locale === "en" ? "Hi," : "Merhaba,"}</span>
              <span className="block">{locale === "en" ? "I'm Çağla" : "ben Çağla"}</span>
            </h1>

            <p className="relative mt-8 max-w-2xl text-base leading-8 text-[#d9cdea] md:text-lg">
              {t("subtitle")}
            </p>

            <div className="relative mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="rounded-full bg-[#d8a8bd] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#07112b] transition hover:-translate-y-0.5 hover:bg-[#cbb7ff]"
              >
                {t("cta")}
              </a>

              <a
                href="#contact"
                className="rounded-full border border-[#d8a8bd]/45 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#f4e9ff] transition hover:-translate-y-0.5 hover:border-[#cbb7ff] hover:bg-[#cbb7ff]/12 hover:text-[#cbb7ff]"
              >
                {locale === "en" ? "Contact Me" : "İletişime Geç"}
              </a>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {[
              ["19+", locale === "en" ? "Skills" : "Yetenek"],
              ["TR/EN", locale === "en" ? "Language" : "Dil"],
              ["3", locale === "en" ? "Internships" : "Staj"],
              ["2026", locale === "en" ? "Graduate" : "Mezuniyet"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-[1.5rem] border border-[#e8c9ef]/18 bg-[#e8c9ef]/10 p-5 backdrop-blur">
                <p className="[font-family:var(--font-display)] text-4xl font-semibold leading-none text-[#e8c9ef]">{value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#cbb7e8]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="reveal-on-scroll"><About locale={locale} /></div>
      <div className="reveal-on-scroll"><Skills locale={locale} /></div>
      <div className="reveal-on-scroll"><Education locale={locale} /></div>
      <div className="reveal-on-scroll"><Internships locale={locale} /></div>
      <div className="reveal-on-scroll"><Certificates locale={locale} /></div>
      <div className="reveal-on-scroll"><Projects locale={locale} /></div>
      <div className="reveal-on-scroll"><AIChat locale={locale} /></div>
      <div className="reveal-on-scroll"><Contact locale={locale} /></div>
      <Footer locale={locale} />
    </main>
  );
}
