import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://seungwon9-portfolio.vercel.app"),
  title: {
    default: "Seungwon | Developer Portfolio",
    template: "%s | Seungwon Portfolio",
  },
  description: "문제를 이해하고 판단하며 작동하는 시스템으로 만든 과정을 소개하는 개발자 포트폴리오입니다.",
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
