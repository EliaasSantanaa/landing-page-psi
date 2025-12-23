import type React from "react";
import type { Metadata } from "next";
import { Inter, Crimson_Text } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
});

export const metadata: Metadata = {
  title:
    "Elayne Graziele - Psicóloga | Terapia Cognitivo-Comportamental Online",
  description:
    "Psicóloga especializada em Terapia Cognitivo-Comportamental (TCC). Atendimento 100% online, oferecendo um espaço ético, seguro e acolhedor para o desenvolvimento emocional.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "32x32",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${crimsonText.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
