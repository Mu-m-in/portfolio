import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--nf-display", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--nf-body", display: "swap" });

const title = `${profile.name} | Full Stack AI Engineer`;
const description =
  "Full-stack AI engineer building applications, backend systems and AI-powered software. Featured projects: EquityFlow and Explorica.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  openGraph: { title, description, type: "website", url: profile.siteUrl, siteName: profile.name },
  twitter: { card: "summary", title, description },
};
export const viewport: Viewport = { themeColor: "#0a0b0f" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
