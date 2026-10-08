import Link from "next/link";
import { MediaBlock } from "@/components/media/media-block";
import { HighlightedText } from "@/components/project/highlighted-text";
import { Container } from "@/components/ui/container";
import type { Project } from "@/types/project";

export function ProjectOverview({ project }: { project: Project }) {
  const overviewMedia = [project.overviewMedia, ...(project.overviewGallery ?? [])];

  return (
    <section className="project-hero" id="introduction" aria-labelledby="project-title">
      <Container>
        <Link className="back-link" href="/#projects">← 전체 프로젝트</Link>
        <div className="project-hero-grid">
          <div>
            <h1 id="project-title">{project.title}</h1>
            <p className="project-lede">{project.shortDescription}</p>
            <div className="project-role-line">
              <span>역할</span>
              <strong>{project.role ?? "내용 준비 중"}</strong>
            </div>
            <div className="project-primary-meta">
              <p><span>기간</span><strong>{project.period ?? "내용 준비 중"}</strong></p>
              <p><span>기술</span><strong>{project.technologies.join(" · ")}</strong></p>
            </div>
          </div>
          <nav className="case-toc" aria-label="페이지 목차">
            <span>이 페이지</span>
            <a href="#introduction">프로젝트 소개</a>
            <a href="#development">주요 기능 개발</a>
            {project.problemSolvingExperiences?.length ? <a href="#problem-solving">문제 해결 경험</a> : null}
            {project.learnings.length ? <a href="#retrospective">회고</a> : null}
          </nav>
        </div>
        <div className={`project-overview-media project-overview-media-${overviewMedia.length}`}>
          {overviewMedia.map((media) => <MediaBlock media={media} eager key={media.id} />)}
        </div>
        <div className="project-introduction-copy">
          <span className="content-label">프로젝트 소개</span>
          <div>
            {project.overview.map((paragraph) => (
              <HighlightedText content={paragraph} key={paragraph.text} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
