import { prisma } from "@/src/lib/prisma";

type CertificatesProps = {
  locale: string;
};

export default async function Certificates({ locale }: CertificatesProps) {
  const certificates = await prisma.certificate.findMany({
    orderBy: { createdAt: "asc" },
  });

  return (
    <section className="section-shell">
      <div className="section-inner">
        <p className="section-kicker">
          {locale === "en" ? "Certificates" : "Sertifikalar"}
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {certificates.map((certificate) => {
            const content = (
              <>
                <div className="corner-glow" />
                <div className="absolute right-5 top-5 text-2xl text-[#e8c9ef]/50">✦</div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#cbb7e8]">
                  {certificate.issuer}
                </p>
                <h3 className="mt-5 [font-family:var(--font-display)] text-3xl font-semibold leading-tight text-[#f4e9ff]">
                  {certificate.title}
                </h3>
                <p className="mt-6 inline-flex rounded-full bg-[#e8c9ef]/10 px-3 py-1 text-xs text-[#f0d4ff]">
                  {locale === "en" ? certificate.dateEn : certificate.dateTr}
                </p>
                {certificate.url ? (
                  <p className="mt-5 text-sm font-semibold text-[#d8a8bd]">
                    {locale === "en" ? "View certificate ->" : "Sertifikayı görüntüle ->"}
                  </p>
                ) : null}
              </>
            );

            return certificate.url ? (
              <a
                key={certificate.id}
                href={certificate.url}
                target="_blank"
                rel="noreferrer"
                className="glass-card relative overflow-hidden transition hover:-translate-y-1 hover:border-[#cbb7ff]/60 hover:bg-[#cbb7ff]/10"
              >
                {content}
              </a>
            ) : (
              <div key={certificate.id} className="glass-card relative overflow-hidden">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
