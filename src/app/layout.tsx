import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: 'swap',
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  variable: "--font-dm-serif",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Jan Kowalski — Elektryk Łowicz | Instalacje elektryczne",
  description: "Elektryk z 10-letnim doświadczeniem w Łowiczu. Instalacje, pomiary, awarie. Zadzwoń: +48 123 456 789",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Jan Kowalski Elektryk",
              "telephone": "+48123456789",
              "areaServed": ["Łowicz", "Skierniewice", "powiat łowicki"],
              "priceRange": "$$"
            })
          }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${dmSerifDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
