import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://seungwon9-portfolio.vercel.app"),
  title: {
    default: "신승원 | Software Developer",
    template: "%s | 신승원",
  },
  description: "앱·웹, 인지훈련 게임, AI 단어장, 업무 자동화와 제조업 ERP 개발 경험을 소개합니다.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" data-scroll-behavior="smooth">
      <body id="top">
        <a className="skip-link" href="#main-content">본문 바로가기</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
