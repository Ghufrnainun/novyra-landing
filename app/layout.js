import { Inter_Tight, DM_Mono } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata = {
  title: "Novyra — AI-Powered Curriculum Platform",
  description:
    "Generate complete lesson plans, assessments, and teaching materials aligned to your curriculum — in seconds, not hours.",
  openGraph: {
    title: "Novyra — AI-Powered Curriculum Platform",
    description:
      "Generate complete lesson plans, assessments, and teaching materials aligned to your curriculum — in seconds, not hours.",
    url: "https://novyra.my.id",
    siteName: "Novyra",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Novyra — AI-Powered Curriculum Platform",
    description:
      "Generate complete lesson plans, assessments, and teaching materials aligned to your curriculum — in seconds, not hours.",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${dmMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#f7f8f8] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
