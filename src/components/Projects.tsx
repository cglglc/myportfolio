import Link from "next/link";
import { prisma } from "../lib/prisma";

type ProjectsProps = {
  locale: string;
};

export default async function Projects({ locale }: ProjectsProps) {
  const projects = await prisma.project.findMany();
  const projectOrder = [
    "Transportation Management System",
    "Programming Learning Analytics Platform",
    "Dynamic CV Website",
    "Weekly Meal Planner Web App",
    "E-Commerce Website - Onlem File",
    "Textile Company Website",
    "Deep Learning Image Classification",
    "NLP-Based Information Retrieval System",
    "C++ Battleship Game",
    "University Life Companion",
    "Portfolio Website",
  ];
  const sortedProjects = [...projects].sort((a, b) => {
    const orderA = projectOrder.indexOf(a.titleEn);
    const orderB = projectOrder.indexOf(b.titleEn);
    return (orderA === -1 ? projectOrder.length : orderA) -
      (orderB === -1 ? projectOrder.length : orderB);
  });

  return (
    <section id="projects" className="section-shell">
      <div className="section-inner">
        <p className="section-kicker">
          {locale === "en" ? "Projects" : "Projeler"}
        </p>

        <h2 className="mt-4 [font-family:var(--font-display)] text-[clamp(1.9rem,3.8vw,3rem)] font-semibold leading-[1.05] text-[#f4e9ff]">
          {locale === "en" ? "Selected works" : "Seçili çalışmalarım"}
        </h2>
        <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sortedProjects.length === 0 ? (
            <div className="rounded-3xl border border-[#e8c9ef]/15 bg-[#e8c9ef]/[0.06] p-8 text-[#d9cdea]">
              {locale === "en" ? "No projects have been added yet." : "Henüz proje eklenmedi."}
            </div>
          ) : (
            sortedProjects.map((project, index) => (
              <Link
                key={project.id}
                href={`/${locale}/projects/${project.id}`}
                className="group relative flex min-h-64 flex-col overflow-hidden rounded-[2rem] border border-[#e8c9ef]/18 bg-[#111a3d]/85 p-5 text-[#f4e9ff] shadow-2xl shadow-[#020718]/25 transition hover:-translate-y-1 hover:border-[#e8c9ef]/45"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e8c9ef]/70 to-transparent opacity-60" />
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#e8c9ef]/10 blur-2xl transition group-hover:bg-[#e8c9ef]/20" />

                <div className="relative flex items-start justify-between gap-4">
                  <h3 className="[font-family:var(--font-display)] text-[clamp(1.45rem,2.2vw,1.9rem)] font-semibold leading-tight text-[#f4e9ff]">
                    {locale === "en" ? project.titleEn : project.titleTr}
                  </h3>
                  <span className="shrink-0 rounded-full border border-[#e8c9ef]/15 bg-[#e8c9ef]/10 px-2.5 py-1 text-xs text-[#cbb7e8]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative mt-5 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((item) => (
                    <span
                      key={item}
                      className="tag-pill text-[11px]"
                    >
                      {item}
                    </span>
                  ))}
                  {project.tech.length > 4 ? (
                    <span className="tag-pill text-[11px]">
                      +{project.tech.length - 4}
                    </span>
                  ) : null}
                </div>

                <div className="relative mt-auto flex items-center gap-2 pt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#e8c9ef]">
                  <span>✦</span>
                  {locale === "en" ? "View project" : "Projeyi incele"}
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
