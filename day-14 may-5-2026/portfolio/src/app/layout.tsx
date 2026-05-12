import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asif | Backend Developer · Laravel & REST API",
  description: "Senior Backend Developer specialising in Laravel, REST API architecture, MySQL, Redis and scalable system design.",
  keywords: ["Backend Developer", "Laravel", "REST API", "MySQL", "Redis", "PHP", "Portfolio"],
  authors: [{ name: "Asif" }],
  openGraph: {
    title: "Asif | Backend Developer",
    description: "Building secure, high-performance APIs and scalable backend systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;1,14..32,400&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased noise">{children}</body>
    </html>
  );
}
