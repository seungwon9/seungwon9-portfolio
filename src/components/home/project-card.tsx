import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link href={`/projects/${project.slug}`} className="project-card-link">
        <div
          className={`project-cover project-cover-${project.featuredOrder}`}
          style={project.cardMedia?.src
            ? {
                aspectRatio: `${project.cardMedia.width ?? 16} / ${project.cardMedia.height ?? 9}`,
                minHeight: 0,
              }
            : undefined}
        >
          {project.cardMedia?.src ? (
            <Image
              className="project-cover-image"
              src={project.cardMedia.src}
              alt={project.cardMedia.alt}
              fill
              sizes={project.featuredOrder === 1 ? "(max-width: 900px) 100vw, 1200px" : "(max-width: 900px) 100vw, 600px"}
            />
          ) : (
            <>
              <div className="cover-browser" aria-hidden="true">
                <span /><span /><span />
              </div>
              <div className="cover-content" aria-hidden="true">
                <span className="cover-index">0{project.featuredOrder}</span>
                <div className="cover-lines"><i /><i /><i /></div>
                <div className="cover-panel"><i /><i /></div>
              </div>
              <span className="cover-caption">대표 화면 준비 중</span>
            </>
          )}
        </div>
        <div className="project-card-body">
          <div className="project-card-title-row">
            <div>
              <p className="eyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
            </div>
            <span className="arrow-link" aria-hidden="true">↗</span>
          </div>
          <p className="project-description">{project.homeDescription ?? project.shortDescription}</p>
          <ul className="tag-list" aria-label="핵심 키워드">
            {project.keywords.map((keyword) => <li key={keyword}>{keyword}</li>)}
          </ul>
        </div>
      </Link>
    </article>
  );
}
