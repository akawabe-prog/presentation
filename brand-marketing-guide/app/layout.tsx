import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ブランド分析・マーケティング実践ガイド",
  description: "SP Connect、BabyFace、OVER Racing、Beta Toolsの事例から学ぶ、ブランド調査から90日実行までの標準プロセス。",
  openGraph: {
    title: "ブランド分析・マーケティング実践ガイド",
    description: "調べる。翻訳する。動かす。4事例から学ぶ、ブランド調査から90日実行までの標準プロセス。",
    type: "website",
    images: [{ url: "https://akawabe-prog.github.io/presentation/brand-marketing-guide/og.png", width: 1200, height: 630, alt: "ブランド分析・マーケティング実践ガイド" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ブランド分析・マーケティング実践ガイド",
    description: "調べる。翻訳する。動かす。ブランド担当者の実践教材。",
    images: ["https://akawabe-prog.github.io/presentation/brand-marketing-guide/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
