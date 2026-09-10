import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const nextLocale = locale === "tr" ? "en" : "tr";

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#e8c9ef]/15 bg-[#07112b]/75 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={`/${locale}`} className="[font-family:var(--font-display)] text-xl font-semibold tracking-[0.08em] text-[#f4e9ff]">
          N. Çağla Gölcü
        </Link>

        <div className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#cbb7e8] md:flex">
          <a href="#about" className="transition hover:text-[#f4e9ff]">
            {t("about")}
          </a>
          <a href="#projects" className="transition hover:text-[#f4e9ff]">
            {t("projects")}
          </a>
          <a href="#contact" className="transition hover:text-[#f4e9ff]">
            {t("contact")}
          </a>
        </div>

        <Link
          href={`/${nextLocale}`}
          className="rounded-full border border-[#e8c9ef]/25 px-4 py-2 text-sm font-medium text-[#f4e9ff] transition hover:border-[#e8c9ef] hover:text-[#e8c9ef]"
        >
          {nextLocale.toUpperCase()}
        </Link>
      </nav>
    </header>
  );
}
