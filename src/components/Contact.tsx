"use client";

import { FormEvent, useState } from "react";

type ContactProps = {
  locale: string;
};

export default function Contact({ locale }: ContactProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      content: String(formData.get("content") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Contact request failed");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unknown error");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-shell">
      <div className="section-inner">
        <p className="section-kicker">
          {locale === "en" ? "Contact" : "İletişim"}
        </p>

        <div className="glass-card mt-6 md:p-10">
          <div className="corner-glow" />

          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#cbb7e8]">
                {locale === "en" ? "Direct Links" : "Direkt Ulaşım"}
              </p>
              <p className="mt-5 max-w-md text-base leading-7 text-[#d9cdea]">
              {locale === "en"
                ? "For roles, projects, or collaboration ideas, you can reach me directly or send a short message through the form."
                : "İş fırsatları, projeler veya iş birliği fikirleri için bana direkt ulaşabilir ya da form üzerinden kısa bir mesaj bırakabilirsin."}
              </p>

              <div className="mt-8 space-y-3">
              <a
                href="mailto:golcucagla@gmail.com"
                className="group flex items-center gap-4 rounded-3xl border border-[#e8c9ef]/18 bg-[#e8c9ef]/10 p-4 transition hover:-translate-y-1 hover:border-[#cbb7ff]/45 hover:bg-[#cbb7ff]/12"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e8c9ef]/12 text-lg font-semibold text-[#e8c9ef] transition group-hover:bg-[#e8c9ef] group-hover:text-[#07112b]">
                  @
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-[#cbb7e8]">
                    Email
                  </span>
                  <span className="mt-1 block text-sm text-[#f4e9ff] group-hover:text-[#e8c9ef]">
                    golcucagla@gmail.com
                  </span>
                </span>
                <span className="ml-auto text-[#cbb7e8] opacity-60 transition group-hover:translate-x-1 group-hover:opacity-100">
                  {"->"}
                </span>
              </a>

              <a
                href="https://github.com/cglglc"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-3xl border border-[#e8c9ef]/18 bg-[#e8c9ef]/10 p-4 transition hover:-translate-y-1 hover:border-[#cbb7ff]/45 hover:bg-[#cbb7ff]/12"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e8c9ef]/12 text-[#e8c9ef] transition group-hover:bg-[#e8c9ef] group-hover:text-[#07112b]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                  >
                    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.96c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.82 0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-[#cbb7e8]">
                    GitHub
                  </span>
                  <span className="mt-1 block text-sm text-[#f4e9ff] group-hover:text-[#e8c9ef]">
                    github.com/cglglc
                  </span>
                </span>
                <span className="ml-auto text-[#cbb7e8] opacity-60 transition group-hover:translate-x-1 group-hover:opacity-100">
                  {"->"}
                </span>
              </a>
              </div>
            </div>

          <form
            onSubmit={handleSubmit}
            onInput={() => {
              setStatus("idle");
              setErrorMessage("");
            }}
            className="grid gap-4"
          >
            <div className="mb-2 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#cbb7e8]">
                  {locale === "en" ? "Message" : "Mesaj"}
                </p>
                <p className="mt-2 text-sm text-[#d9cdea]">
                  {locale === "en" ? "Leave a short note below." : "Kısa bir not bırakabilirsin."}
                </p>
              </div>
              <span className="hidden rounded-full border border-[#e8c9ef]/18 bg-[#e8c9ef]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#f0d4ff] sm:block">
                {locale === "en" ? "Open" : "Açık"}
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                required
                placeholder={locale === "en" ? "Your name" : "Adın"}
                className="rounded-full border border-[#e8c9ef]/14 bg-[#e8c9ef]/10 px-5 py-4 text-[#f4e9ff] outline-none transition placeholder:text-[#a894bf] focus:border-[#cbb7ff]/60 focus:bg-[#e8c9ef]/14"
              />

              <input
                name="email"
                type="email"
                required
                placeholder={locale === "en" ? "Email address" : "E-posta adresin"}
                className="rounded-full border border-[#e8c9ef]/14 bg-[#e8c9ef]/10 px-5 py-4 text-[#f4e9ff] outline-none transition placeholder:text-[#a894bf] focus:border-[#cbb7ff]/60 focus:bg-[#e8c9ef]/14"
              />
            </div>

            <textarea
              name="content"
              required
              rows={7}
              placeholder={locale === "en" ? "Your message" : "Mesajın"}
              className="resize-none rounded-[1.6rem] border border-[#e8c9ef]/14 bg-[#e8c9ef]/10 px-5 py-4 text-[#f4e9ff] outline-none transition placeholder:text-[#a894bf] focus:border-[#cbb7ff]/60 focus:bg-[#e8c9ef]/14"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-full bg-[#d8a8bd] px-6 py-3 font-semibold text-[#07112b] transition hover:bg-[#cbb7ff] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading"
                ? locale === "en"
                  ? "Sending..."
                  : "Gönderiliyor..."
                : locale === "en"
                  ? "Send message"
                  : "Mesaj gönder"}
            </button>

            {status === "success" ? (
              <p className="text-sm font-medium text-[#f3daf5]">
                {locale === "en"
                  ? "Your message was sent."
                  : "Mesajın gönderildi."}
              </p>
            ) : null}

            {status === "error" ? (
              <p className="text-sm text-red-300">
                {locale === "en"
                  ? "Message could not be sent."
                  : "Mesaj gönderilemedi."}
                {errorMessage ? ` ${errorMessage}` : ""}
              </p>
            ) : null}
          </form>
          </div>
        </div>
      </div>
    </section>
  );
}
