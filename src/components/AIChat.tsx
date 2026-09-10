"use client";

import { FormEvent, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type ChatMode = "assistant" | "recruiter" | "finder";

type AIChatProps = {
  locale: string;
};

export default function AIChat({ locale }: AIChatProps) {
  const [mode, setMode] = useState<ChatMode>("assistant");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        locale === "en"
          ? "Choose a mode or ask directly about Çağla's projects, skills, and fit."
          : "Bir mod seç veya Çağla'nın projeleri, yetenekleri ve uygunluğu hakkında direkt soru sor.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const modes: { id: ChatMode; title: string; description: string; prompt: string }[] = [
    {
      id: "assistant",
      title: locale === "en" ? "Portfolio Assistant" : "Portfolyo Asistanı",
      description:
        locale === "en"
          ? "Answers questions about projects and stack."
          : "Projeler ve teknoloji stack'i hakkında cevap verir.",
      prompt:
        locale === "en"
          ? "Summarize Çağla's portfolio and technologies."
          : "Çağla'nın portfolyosunu ve kullandığı teknolojileri özetle.",
    },
    {
      id: "recruiter",
      title: locale === "en" ? "Recruiter Mode" : "İşe Alım Modu",
      description:
        locale === "en"
          ? "Explains Çağla's fit for roles."
          : "Çağla'nın roller için uygunluğunu açıklar.",
      prompt:
        locale === "en"
          ? "Write a recruiter-focused summary of Çağla's strengths."
          : "Çağla'nın güçlü yönlerini recruiter odaklı özetle.",
    },
    {
      id: "finder",
      title: locale === "en" ? "Project Finder" : "Proje Bulucu",
      description:
        locale === "en"
          ? "Finds projects by technology or purpose."
          : "Teknolojiye veya amaca göre proje önerir.",
      prompt:
        locale === "en"
          ? "Find projects that use backend technologies and explain why."
          : "Backend teknolojileri kullanan projeleri bul ve nedenini açıkla.",
    },
  ];

  async function sendMessage(content: string, selectedMode = mode) {
    if (!content || isLoading) {
      return;
    }

    setMode(selectedMode);

    const nextMessages: Message[] = [...messages, { role: "user", content }];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: nextMessages, mode: selectedMode, locale }),
      });

      if (!response.ok) {
        throw new Error("Chat request failed");
      }

      const data = (await response.json()) as { message: string };

      setMessages((currentMessages) => [
        ...currentMessages,
        { role: "assistant", content: data.message },
      ]);
    } catch {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content:
            locale === "en"
              ? "I could not answer right now. Please try again."
              : "Şu an cevap veremedim. Lütfen tekrar dene.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const content = input.trim();

    if (!content || isLoading) {
      return;
    }

    await sendMessage(content);
  }

  return (
    <section className="section-shell">
      <div className="section-inner glass-card md:p-10">
        <div className="corner-glow" />
        <p className="section-kicker">
          {locale === "en" ? "AI Portfolio Console" : "AI Portfolyo Konsolu"}
        </p>

        <h2 className="section-title">
          {locale === "en"
            ? "Explore Çağla through AI"
            : "Çağla'yı AI ile keşfet"}
        </h2>
        <div className="mt-8 grid gap-3 lg:grid-cols-3">
          {modes.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => sendMessage(item.prompt, item.id)}
              disabled={isLoading}
              className={`rounded-3xl border p-4 text-left transition disabled:cursor-not-allowed disabled:opacity-60 md:p-5 ${
                mode === item.id
                  ? "border-[#d8a8bd] bg-[#d8a8bd]/15"
                  : "border-[#d8a8bd]/20 bg-[#07112b]/80 hover:border-[#cbb7ff]/45 hover:bg-[#cbb7ff]/10"
              }`}
            >
              <span className="block text-sm font-semibold text-[#f4e9ff] md:text-base">{item.title}</span>
              <span className="mt-2 block text-sm leading-6 text-[#cbb7e8]">
                {item.description}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-8 h-80 space-y-4 overflow-y-auto rounded-3xl border border-[#111a3d]/10 bg-[#07112b] p-4">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={message.role === "user" ? "text-right" : "text-left"}
            >
              <p
                className={`inline-block max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                  message.role === "user"
                    ? "bg-[#d8a8bd] text-[#07112b]"
                    : "bg-white/10 text-[#f4e9ff]"
                }`}
              >
                {message.content}
              </p>
            </div>
          ))}

          {isLoading ? (
            <p className="text-sm text-[#e8d1e8]">
              {locale === "en" ? "Thinking..." : "Düşünüyor..."}
            </p>
          ) : null}
        </div>

        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder={locale === "en" ? "Ask a question..." : "Bir soru sor..."}
            className="min-w-0 flex-1 rounded-full border border-[#111a3d]/10 bg-[#07112b] px-5 py-3 text-[#f4e9ff] outline-none transition placeholder:text-[#8f7fac] focus:border-[#e8d1e8]"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="rounded-full bg-[#d8a8bd] px-6 py-3 font-semibold text-[#07112b] transition hover:bg-[#cbb7ff] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {locale === "en" ? "Send" : "Gönder"}
          </button>
        </form>
      </div>
    </section>
  );
}
