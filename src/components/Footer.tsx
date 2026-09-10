type FooterProps = {
  locale: string;
};

export default function Footer({ locale }: FooterProps) {
  return (
    <footer className="border-t border-[#e8c9ef]/15 bg-[#07112b] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-[#cbb7e8] md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Nağme Çağla Gölcü.{" "}
          {locale === "en" ? "All rights reserved." : "Tüm hakları saklıdır."}
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/cglglc"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#f4e9ff]"
          >
            GitHub
          </a>

          <a
            href="mailto:golcucagla@gmail.com"
            className="transition hover:text-[#f4e9ff]"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
