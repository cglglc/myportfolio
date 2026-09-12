import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../../src/components/Navbar";
import Footer from "../../../../src/components/Footer";
import { prisma } from "../../../../src/lib/prisma";

type ProjectDetailPageProps = {
  params: Promise<{
    locale: string;
    id: string;
  }>;
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { locale, id } = await params;
  const project = await prisma.project.findUnique({ where: { id } });

  if (!project) {
    notFound();
  }

  const resources = [
    project.youtubeUrl
      ? {
          href: project.youtubeUrl,
          label: locale === "en" ? "Watch video" : "Videoyu izle",
          primary: true,
        }
      : null,
    project.presentationUrl
      ? {
          href: project.presentationUrl,
          label: locale === "en" ? "Download presentation" : "Sunumu indir",
          primary: true,
          download: true,
        }
      : null,
    project.pdfUrl
      ? {
          href: project.pdfUrl,
          label: locale === "en" ? "Download project" : "Projeyi indir",
          primary: true,
          download: true,
        }
      : null,
    project.githubUrl
      ? { href: project.githubUrl, label: "GitHub", primary: false }
      : null,
    project.liveUrl
      ? {
          href: project.liveUrl,
          label: locale === "en" ? "Explore the live project" : "Canlı projeyi keşfet",
          primary: false,
        }
      : null,
  ].filter((resource): resource is NonNullable<typeof resource> => Boolean(resource));

  const isLearningAnalyticsProject =
    project.titleEn === "Programming Learning Analytics Platform";

  return (
    <main className="min-h-screen bg-[#07112b] text-[#f4e9ff]">
      <Navbar />

      <section className="section-shell relative overflow-hidden pb-24 pt-32">
        <div className="absolute left-1/2 top-24 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#e8c9ef]/10 blur-3xl" />
        <div className="section-inner relative z-10">
          <Link
            href={`/${locale}#projects`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#d8a8bd] transition hover:text-[#cbb7ff]"
          >
            <span aria-hidden="true">←</span>
            {locale === "en" ? "Back to projects" : "Projelere geri dön"}
          </Link>

          <div className="mt-14 max-w-4xl">
            <p className="section-kicker">
              {locale === "en" ? "Project Detail" : "Proje Detayı"}
            </p>
            <h1 className="mt-5 max-w-4xl break-words [font-family:var(--font-display)] text-[clamp(3rem,8vw,6.8rem)] font-semibold leading-[0.9] tracking-tight">
              {locale === "en" ? project.titleEn : project.titleTr}
            </h1>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-start">
            <div>
              <p className="max-w-3xl text-lg leading-8 text-[#d9cdea]">
                {locale === "en" ? project.descEn : project.descTr}
              </p>

              {resources.length > 0 ? (
                <div className="mt-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#cbb7e8]">
                    {locale === "en" ? "Explore the project" : "Projeyi keşfet"}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {resources.map((resource) => (
                      <a
                        key={resource.label}
                        href={resource.href}
                        target="_blank"
                        rel="noreferrer"
                        download={resource.download}
                        className="rounded-full bg-[#d8a8bd] px-5 py-3 text-sm font-semibold text-[#07112b] transition hover:-translate-y-0.5 hover:bg-[#cbb7ff]"
                      >
                        {resource.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <aside className="glass-card overflow-hidden md:p-8">
              <div className="corner-glow" />
              <div className="relative">
                <div className="flex items-center justify-between border-b border-[#e8c9ef]/15 pb-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#cbb7e8]">
                    {locale === "en" ? "Project Stack" : "Proje Teknolojileri"}
                  </p>
                  <span className="text-2xl text-[#d8a8bd]">✦</span>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="tag-pill text-sm">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 border-t border-[#e8c9ef]/15 pt-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#cbb7e8]">
                    {locale === "en" ? "Project Focus" : "Proje Odağı"}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#d9cdea]">
                    {isLearningAnalyticsProject
                      ? locale === "en"
                        ? "Requirements analysis, system design, UML modeling, and SRS/SDD documentation."
                        : "Gereksinim analizi, sistem tasarımı, UML modelleme ve SRS/SDD dokümantasyonu."
                      : locale === "en"
                        ? "A practical project developed through research, design, implementation, and testing."
                        : "Araştırma, tasarım, geliştirme ve test aşamalarıyla hazırlanan uygulamalı proje çalışması."}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
