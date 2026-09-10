import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { prisma } from "../../../src/lib/prisma";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type ChatMode = "assistant" | "recruiter" | "finder";

export async function POST(req: Request) {
  try {
    const { messages, mode = "assistant", locale = "tr" } = (await req.json()) as {
      messages: ChatMessage[];
      mode?: ChatMode;
      locale?: string;
    };
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    const projectContext = projects
      .map(
        (project) =>
          `- ${project.titleTr} / ${project.titleEn}: ${project.descTr} Technologies: ${project.tech.join(
            ", "
          )}. GitHub: ${project.githubUrl ?? "Yok"}. Live: ${project.liveUrl ?? "Yok"}.`
      )
      .join("\n");
    const modeInstructions: Record<ChatMode, string> = {
      assistant:
        "Portfolio Assistant modu: Nağme Çağla Gölcü'nün portfolyosunu, projelerini, kullandığı teknolojileri ve site yapısını net şekilde açıkla.",
      recruiter:
        "Recruiter Mode: Nağme Çağla Gölcü'yü işe alım perspektifiyle değerlendir. Güçlü yönleri, hangi roller için uygun olduğu ve projelerden kanıtları vurgula. Cevabı profesyonel tut.",
      finder:
        "Project Finder modu: Kullanicinin sordugu teknolojiye, amaca veya role gore veritabanindaki projeleri eslestir. Uygun proje varsa adini, teknolojilerini ve GitHub linkini ver. Uygun proje yoksa bunu acikca soyle ve hangi proje eklenirse iyi olur oner.",
    };

    const result = await generateText({
      model: google("gemini-3.6-flash"),
      system: `Sen Nağme Çağla Gölcü'nün portfolyo asistanısın.

Aktif mod: ${mode}
Mod talimati: ${modeInstructions[mode]}
Dil: ${locale === "en" ? "English" : "Turkish"}

Davranis kurallari:
- Kisa, net ve dogrudan cevap ver.
- Kullanici genel soru sorarsa elindeki bilgilerden cevap ver; hemen ek detay isteme.
- Cevaplari secilen moda gore sekillendir.
- Backend sorulursa: ASP.NET, C#, SQL, Entity Framework, LINQ, Prisma, PostgreSQL, Supabase ve API entegrasyonu deneyimini anlat.
- Frontend sorulursa: HTML, CSS, JavaScript, TypeScript, Bootstrap, React Native, Figma ve Next.js portfolyo sitesini anlat.
- AI sorulursa: Google Gemini entegrasyonu, AI Portfolio Console ve veri odaklı AI projelerini anlat.
- Project Finder modunda mutlaka proje adi ve varsa GitHub linki ver.
- Recruiter Mode'da teknik gucleri ise alim diliyle ozetle.
- Sadece Nağme Çağla Gölcü'nün projeleri, teknolojileri, eğitimi, stajları ve portfolyosu hakkında konuş.
- Bilgi yoksa tek cumleyle bilmedigini soyle, sonra iletisim formunu onerebilirsin.

Nağme Çağla Gölcü profil özeti:
Middle East Technical University Computer Engineering mezunu. Denizli, Turkey. Email: golcucagla@gmail.com. ASP.NET, C#, SQL, Entity Framework, LINQ, Python, C++, JavaScript, TypeScript, HTML, CSS, React Native, Firebase, UML, ERD, Requirements Engineering, Jira, Figma ve GitHub deneyimi var. Türkçe ana dil, İngilizce ileri seviye, Almanca başlangıç. Stajları: DSS Bioenformatik Robotik Yazılım A.Ş., Bilsan Yazılım Sistemleri, Dentaş Kağıt Sanayi. Sertifikalar: IBM AI for Everyone, IBM Introduction to Cloud Computing, Miuul Artificial Intelligence Camp.

Projeler:
${projectContext || "Henuz veritabaninda proje yok."}`,
      messages,
    });

    return Response.json({ message: result.text });
  } catch (error) {
    console.error("Chat API error:", error);

    return Response.json(
      { error: "Chat request failed" },
      { status: 500 }
    );
  }
}
