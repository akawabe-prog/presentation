import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") ?? incoming.get("host") ?? "localhost:3000";
  const protocol = incoming.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  return {
    metadataBase: new URL(origin),
    title: "OVER Racing Brand Study | 社内共有資料",
    description: "OVER Racingのブランド、製品、競合、カスタムジャパン資産活用、全社連携を整理した社内共有資料。",
    icons: { icon: "/over/logo.png", shortcut: "/over/logo.png" },
    openGraph: {
      title: "OVER Racing — Internal Brand Study",
      description: "鈴鹿発のコンストラクターを、ブランド・市場・全社活用から読み解く。",
      type: "website",
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "OVER Racing Internal Brand Study" }],
    },
    twitter: { card: "summary_large_image", images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
