import Link from "next/link";
import { Container } from "@/components/ui/container";
import type { Project } from "@/types/project";

const labels = [
  ["기간", "period"],
  ["역할", "role"],
  ["사용자", "users"],
  ["기술", "technologies"],
  ["상태", "projectStatus"],
] as const;

export function ProjectOverview({ project }: { project: Project }) {
  return (
    <section className="project-hero" aria-labelledby="project-title">
      <Container>
        <Link className="back-link" href="/#projects">← 전체 프로젝트</Link>
        <div className="project-hero-grid">
          <div>
            <p className="eyebrow">{project.eyebrow}</p>
            <h1 id="project-title">{project.title}</h1>
            <p className="project-lede">{project.shortDescription}</p>
          </div>
          <nav className="case-toc" aria-label="페이지 목차">
            <span>On this page</span>
            <a href="#context">Context & My Role</a>
            <a href="#cases">Problem Solving Cases</a>
            <a href="#result">Result & Demo</a>
            <a href="#learnings">What I Learned</a>
          </nav>
        </div>
        <div className={`project-hero-visual project-visual-${project.featuredOrder}`}>
          <span className="visual-label">Project visual</span>
          <div className="visual-frame" aria-label="대표 프로젝트 화면 준비 중" role="img">
            <div className="visual-sidebar" aria-hidden="true"><i /><i /><i /><i /></div>
            <div className="visual-main" aria-hidden="true">
              <i className="visual-title" /><i className="visual-copy" />
              <div><i /><i /><i /></div>
            </div>
          </div>
          <span className="visual-status">실제 대표 화면 준비 중</span>
        </div>
        <dl className="project-meta">
          {labels.map(([label, key]) => {
            const rawValue = project[key];
            const value = Array.isArray(rawValue)
              ? rawValue.length > 0 ? rawValue.join(", ") : "내용 준비 중"
              : rawValue ?? "내용 준비 중";
            return (
              <div key={key}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            );
          })}
        </dl>
      </Container>
    </section>
  );
}
