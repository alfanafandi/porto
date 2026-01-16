import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "LUXE.DEV | Architecting Digital Excellence",
  description:
    "Specializing in high-end web experiences for luxury brands and visionary creators worldwide.",
  keywords: ["web development", "luxury", "portfolio", "creative", "digital"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${notoSerif.variable} ${manrope.variable} antialiased bg-background-dark font-sans`}
      >
        {/* Matte Texture Overlay */}
        <div className="fixed inset-0 pointer-events-none matte-noise z-50"></div>
        {children}
      </body>
    </html>
  );
}
