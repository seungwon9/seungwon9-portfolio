import Link from "next/link";
import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <Container>
        <div className="hero-copy">
          <p className="eyebrow">{profile.heroLabel}</p>
          <h1 id="hero-title">
            {profile.heroTitle.split("\n").map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="hero-description">{profile.heroDescription}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#projects">
              프로젝트 보기
              <span aria-hidden="true">↘</span>
            </Link>
            <Link className="button button-secondary" href="#contact">
              연락 정보
            </Link>
          </div>
        </div>
        <div className="hero-index" aria-label="포트폴리오 구성">
          <p>Selected work</p>
          <ol>
            <li><span>01</span>업무 시스템</li>
            <li><span>02</span>인터랙티브 콘텐츠</li>
            <li><span>03</span>AI 기반 서비스</li>
          </ol>
        </div>
      </Container>
    </section>
  );
}
