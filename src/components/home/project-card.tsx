import Image from "next/image";
import Link from "next/link";
import type { HomeProject } from "@/data/home-projects";

export function ProjectCard({ project }: { project: HomeProject }) {
  return (
    <article className="project-card">
      <Link href={`/projects/${project.slug}`} className="project-card-link">
        <div className="project-cover" style={{ aspectRatio: `${project.image.width} / ${project.image.height}` }}>
          <Image
            className="project-cover-image"
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(max-width: 900px) 100vw, 1240px"
          />
        </div>
        <div className="project-card-body">
          <div className="project-card-title-row">
            <h3>{project.title}</h3>
            <span className="arrow-link" aria-hidden="true">↗</span>
          </div>
          <p className="project-description">{project.description}</p>
          <dl className="project-card-meta">
            <div><dt>역할</dt><dd>{project.role}</dd></div>
            <div><dt>기술</dt><dd>{project.technologies.join(" · ")}</dd></div>
          </dl>
        </div>
      </Link>
    </article>
  );
}
