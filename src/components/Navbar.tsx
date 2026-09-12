import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const nextLocale = locale === "tr" ? "en" : "tr";

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#e8c9ef]/15 bg-[#07112b]/75 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-6 py-4">
        <Link href={`/${locale}#hero`} className="[font-family:var(--font-display)] text-sm font-semibold tracking-[0.03em] text-[#f4e9ff] sm:text-xl sm:tracking-[0.06em]">
          Nağme Çağla Gölcü
        </Link>

        <div className="order-3 flex basis-full items-center justify-center gap-5 border-t border-[#e8c9ef]/10 pt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#cbb7e8] md:order-none md:basis-auto md:gap-8 md:border-t-0 md:pt-0 md:text-xs md:tracking-[0.2em]">
          <a href={`/${locale}#about`} className="transition hover:text-[#f4e9ff]">
            {t("about")}
          </a>
          <a href={`/${locale}#projects`} className="transition hover:text-[#f4e9ff]">
            {t("projects")}
          </a>
          <a href={`/${locale}#contact`} className="transition hover:text-[#f4e9ff]">
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
