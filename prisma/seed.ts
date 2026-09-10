import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const projectCount = await prisma.project.count();

  if (projectCount === 0) {
    await prisma.project.createMany({
    data: [
      {
        titleTr: "Transportation Management System",
        titleEn: "Transportation Management System",
        descTr: "Arrivio, lojistik merkezlerinde kamyon rezervasyonlarını, istasyon kuyruklarını ve operasyonel süreçleri yöneten mobil ve web tabanlı bir Transportation Management System'dir. Sistem, taşıyıcıların uygun zaman aralığı ve istasyon seçerek rezervasyon oluşturmasına, operatörlerin araç kuyruklarını ve servis durumlarını gerçek zamanlı takip etmesine, yöneticilerin ise kullanıcı, tesis, istasyon ve raporlama süreçlerini yönetmesine olanak tanır. İstasyonlardaki bekleme sürelerini tahmin etmek ve taşıyıcılara en uygun istasyonu önermek için M/M/1 kuyruk teorisi modelini sisteme entegre ettik. Dört kişilik ekiple yürüttüğümüz proje, yazılım geliştirme yaşam döngüsünün tüm aşamalarını kapsadı: gereksinim analizi ve sistem tasarımı (SRS, SDD), konfigürasyon yönetimi ve test planlaması, ardından fonksiyonel, entegrasyon, sistem ve kullanıcı kabul testleri. Süreci Agile metodolojisiyle, Jira üzerinden sprintler halinde yönettik; kaynak kod versiyon kontrolünü GitHub ile sağladık. Projede Operator Panel'in frontend ve backend geliştirmesinden sorumlu oldum; operatörlerin araç kuyruklarını izlemesini, araç durumlarını güncellemesini ve servis akışlarını yönetmesini sağlayan tüm işlevleri geliştirdim. Bunun yanında bir ekip arkadaşımla birlikte M/M/1 modeline dayalı bekleme süresi hesaplama ve istasyon önerisi algoritmalarını tasarladım. Veritabanı mimarisi, test süreçleri ve dokümantasyon çalışmalarına ekip olarak katkı sağladım.",
        descEn: "Arrivio is a mobile and web-based Transportation Management System that manages truck reservations, station queues, and operational processes in logistics centers. The system allows carriers to create reservations by selecting an available time slot and station, operators to monitor vehicle queues and service statuses in real time, and managers to manage users, facilities, stations, and reporting processes. We integrated an M/M/1 queueing theory model to estimate station waiting times and recommend the most suitable station to carriers. Developed by a four-person team, the project covered the full software development lifecycle: requirements analysis and system design (SRS, SDD), configuration management and test planning, followed by functional, integration, system, and user acceptance testing. We managed the process in Agile sprints through Jira and used GitHub for source code version control. I was responsible for the frontend and backend development of the Operator Panel, implementing the functionality that enables operators to monitor vehicle queues, update vehicle statuses, and manage service flows. Together with a teammate, I also designed the M/M/1-based waiting time calculation and station recommendation algorithms. As a team, we contributed to the database architecture, testing processes, and documentation.",
        tech: ["React Native", "Expo", "TypeScript", "Firebase Authentication", "Cloud Firestore", "Firebase Cloud Functions", "Google Maps API", "Jira", "GitHub"],
        githubUrl: null,
        liveUrl: null,
        youtubeUrl: null,
        presentationUrl: null,
        pdfUrl: null,
      },
      {
        titleTr: "Dynamic CV Website",
        titleEn: "Dynamic CV Website",
        descTr: "Admin paneli ve SQL veritabanı entegrasyonu olan dinamik CV sitesi geliştirildi; Entity Framework ve LINQ ile veri işlemleri yönetildi.",
        descEn: "A dynamic resume website with an admin panel and SQL database integration, using Entity Framework and LINQ for data operations.",
        tech: ["ASP.NET", "C#", "SQL", "Entity Framework", "LINQ"],
        githubUrl: null,
        liveUrl: null,
      },
      {
        titleTr: "Weekly Meal Planner Web App",
        titleEn: "Weekly Meal Planner Web App",
        descTr: "Dört yemek türüne göre haftalık rastgele yemek planı oluşturan ASP.NET ve C# tabanlı web uygulaması geliştirildi.",
        descEn: "An ASP.NET C# web application that creates weekly random meal plans based on four food categories.",
        tech: ["ASP.NET", "C#", "Rule-based Logic"],
        githubUrl: null,
        liveUrl: null,
      },
      {
        titleTr: "E-Commerce Website - Önlem File",
        titleEn: "E-Commerce Website - Onlem File",
        descTr: "Koruyucu file ürünlerini tanıtmak için ürün kategorileri, iletişim alanı ve responsive arayüz içeren bilgilendirici web sitesi tasarlandı.",
        descEn: "An informational website for protective net products with product categories, a contact section, and a responsive interface.",
        tech: ["ASP.NET", "C#", "SQL", "Bootstrap"],
        githubUrl: null,
        liveUrl: null,
      },
      {
        titleTr: "Textile Company Website",
        titleEn: "Textile Company Website",
        descTr: "Proje amacıyla örnek bir tekstil şirketi için ASP.NET, C#, SQL ve Bootstrap kullanılarak kurumsal tanıtım sitesi geliştirildi.",
        descEn: "A corporate informational website for a sample textile company, built with ASP.NET, C#, SQL, and Bootstrap.",
        tech: ["ASP.NET", "C#", "SQL", "Bootstrap"],
        githubUrl: null,
        liveUrl: null,
      },
      {
        titleTr: "Deep Learning Image Classification",
        titleEn: "Deep Learning Image Classification",
        descTr: "Kaggle medikal görüntü veri seti üzerinde kanserli ve kanserli olmayan görüntüleri sınıflandıran derin öğrenme modeli geliştirildi.",
        descEn: "A deep learning model built with Python and Jupyter Notebook to classify medical images as cancerous or non-cancerous.",
        tech: ["Python", "Jupyter Notebook", "Deep Learning", "Kaggle"],
        githubUrl: null,
        liveUrl: null,
      },
      {
        titleTr: "NLP-Based Information Retrieval System",
        titleEn: "NLP-Based Information Retrieval System",
        descTr: "TF-IDF, Word2Vec, PCA ve cosine similarity kullanarak haber arama sistemi geliştirildi ve metinsel gürültüye karşı dayanıklılığı değerlendirildi.",
        descEn: "A news retrieval system using TF-IDF, Word2Vec, PCA, and cosine similarity, evaluated under textual noise.",
        tech: ["Python", "NLP", "TF-IDF", "Word2Vec", "PCA"],
        githubUrl: null,
        liveUrl: null,
      },
      {
        titleTr: "C++ Battleship Game",
        titleEn: "C++ Battleship Game",
        descTr: "Nesne yönelimli programlama kavramlarıyla tur tabanlı mantık, rastgele olaylar, gemi davranışları ve grid tabanlı oyun akışı içeren konsol oyunu geliştirildi.",
        descEn: "A console-based Battleship game using OOP concepts, turn-based logic, random events, ship behaviors, and grid-based gameplay.",
        tech: ["C++", "OOP", "Console App"],
        githubUrl: null,
        liveUrl: null,
      },
      {
        titleTr: "University Life Companion",
        titleEn: "University Life Companion",
        descTr: "Ders programı ve kampüs servisleri gibi öğrenci yaşamını destekleyen özelliklere sahip mobil uygulama prototipi Figma ile tasarlandı.",
        descEn: "A Figma prototype of a student-focused mobile app supporting course scheduling and campus services.",
        tech: ["Figma", "UX Design", "Mobile Prototype"],
        githubUrl: null,
        liveUrl: null,
      },
      {
        titleTr: "Programlama Öğrenme Analitiği Platformu",
        titleEn: "Programming Learning Analytics Platform",
        descTr: "Bu çalışma, giriş seviyesindeki programlama dersleri için tasarlanması planlanan interaktif bir öğrenme analitiği web uygulamasının gereksinim analizi ve sistem tasarımı projesidir. Yazılımın uygulama geliştirme aşamasını gerçekleştirmedik; bunun yerine öğrencilerin çevrim içi kod editöründeki performansını, deneme sayılarını, derleme ve çalışma zamanı hatalarını analiz edecek sistemin kapsamını ve davranışlarını tanımladık. Öğretmenlerin kurs ve egzersiz yönetimi, öğrenci performans raporları ve konu önerileri; öğrencilerin ise kişiselleştirilmiş öneriler, programlama chatbot'u ve kod benzerlik analizi özellikleri için gereksinimleri belirledik. Kullanıcı kayıt ve Google doğrulaması, eğitmen abonelik ödemesi, raporlama, öneri sistemi ve plagiarism detection gibi işlevleri modelleyerek Use Case ve Class Diagram çalışmaları hazırladık. Projenin çıktıları, IEEE standartlarına uygun Software Requirements Specification (SRS) ve Software Design Description (SDD) dokümantasyonlarıdır.",
        descEn: "This project focused on requirements analysis and system design for a planned interactive learning analytics web application for introductory programming courses. We did not implement the software; instead, we defined the scope and behavior of a system that would analyze students' performance in an online code editor, including their attempts, compilation errors, and runtime errors. We specified requirements for instructor course and exercise management, student performance reports, topic recommendations, personalized study guidance, a programming chatbot, and code similarity analysis. We modeled features such as user registration with Google verification, instructor subscription payments, reporting, recommendations, and plagiarism detection through Use Case and Class Diagram studies. The main deliverables were IEEE-aligned Software Requirements Specification (SRS) and Software Design Description (SDD) documents.",
        tech: ["Requirements Analysis", "SRS", "SDD", "UML", "Use Case Diagram", "Class Diagram", "System Design", "Jira"],
        githubUrl: null,
        liveUrl: null,
      },
      {
        titleTr: "Portfolyo Sitesi",
        titleEn: "Portfolio Website",
        descTr: "Next.js, Tailwind, Prisma, Supabase ve Gemini destekli AI bölümüyle geliştirilen kişisel portfolyo sitesi.",
        descEn: "A personal portfolio website built with Next.js, Tailwind, Prisma, Supabase, and a Gemini-powered AI section.",
        tech: ["Next.js", "TypeScript", "Tailwind", "Prisma", "Supabase", "Gemini"],
        githubUrl: "https://github.com/cglglc/myportfolio",
        liveUrl: null,
      },
    ],
    });
  }

  const certificateCount = await prisma.certificate.count();

  if (certificateCount === 0) {
    await prisma.certificate.createMany({
    data: [
      {
        title: "AI for Everyone: Master the Basics",
        issuer: "IBM",
        dateTr: "Haz 2023",
        dateEn: "Jun 2023",
        url: null,
      },
      {
        title: "Introduction to Cloud Computing",
        issuer: "IBM",
        dateTr: "Haz 2023",
        dateEn: "Jun 2023",
        url: null,
      },
      {
        title: "Artificial Intelligence Camp",
        issuer: "Miuul",
        dateTr: "Ağu 2025",
        dateEn: "Aug 2025",
        url: null,
      },
    ],
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
