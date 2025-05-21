import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hagbyte",
  description: "Hagbyte Studios é uma empresa especializada em desenvolvimento de software, automação de processos, criação de sites responsivos e soluções digitais personalizadas. Transformamos ideias em produtos inovadores, com foco em experiência do usuário (UX), tecnologia de ponta e resultados que impulsionam negócios. Oferecemos serviços como automação empresarial, desenvolvimento de aplicativos, design criativo, identidade visual, consultoria tecnológica e estratégias para presença online. Ajudamos sua empresa a ganhar eficiência, reduzir custos e se destacar no mercado por meio da transformação digital e da inovação contínua. Entre em contato com a Hagbyte Studios e descubra como nossas soluções podem fortalecer sua marca, atrair mais clientes e ampliar sua atuação no mundo digital.",
  icons: "/img/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/png" href="/img/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


