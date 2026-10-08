import Link from "next/link";
import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <Container>
        <div className="hero-copy">
          <p className="hero-label">{profile.heroLabel}</p>
          <h1 id="hero-title">
            {profile.heroTitle.split("\n").map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="hero-description">{profile.heroDescription}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#projects">
              프로젝트 보기 <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
