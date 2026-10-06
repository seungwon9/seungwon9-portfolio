import Link from "next/link";
import { MediaBlock } from "@/components/media/media-block";
import { Container } from "@/components/ui/container";
import type { Project } from "@/types/project";

const labels = [
  ["기간", "period"],
  ["역할", "role"],
  ["협업", "team"],
  ["기술", "technologies"],
  ["분야", "domain"],
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
            <a href="#contribution">My Contribution</a>
            <a href="#cases">Problem Solving</a>
            <a href="#result">Result & Demo</a>
            <a href="#tech-learnings">Tech & Learnings</a>
          </nav>
        </div>
        <div className="project-overview-media">
          <MediaBlock media={project.overviewMedia} />
        </div>
        <dl className="project-meta">
          {labels.map(([label, key]) => {
            const rawValue = project[key];
            if (key === "domain" && !rawValue) return null;
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
