import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BETA Tools｜ブランド戦略・全社連携プラン",
  description: "BETA Toolsのブランド分析、国内競合、社内資産活用、部門連携をまとめた社内資料。",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
