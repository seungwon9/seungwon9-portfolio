import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Project } from "@/types/project";

function ContentList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

export function ContextRole({ project }: { project: Project }) {
  return (
    <section className="section project-section" id="context" aria-labelledby="context-title">
      <Container>
        <SectionHeading eyebrow="01 / Context" title="Context & My Role" description={project.overview} />
        <div className="context-grid">
          <article>
            <span className="content-label">프로젝트 맥락</span>
            <ContentList items={project.context} />
          </article>
          <article>
            <span className="content-label">직접 담당한 범위</span>
            <ContentList items={project.responsibilities} />
          </article>
          <article>
            <span className="content-label">팀 / 협업 범위</span>
            <ContentList items={project.collaborationScope} />
          </article>
        </div>
      </Container>
    </section>
  );
}
