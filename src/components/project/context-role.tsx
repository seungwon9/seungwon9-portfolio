import { Container } from "@/components/ui/container";
import { MediaBlock } from "@/components/media/media-block";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Project } from "@/types/project";

function ContentList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

export function MyContribution({ project }: { project: Project }) {
  return (
    <section className="section project-section" id="contribution" aria-labelledby="contribution-title">
      <Container>
        <SectionHeading
          eyebrow="01 / Contribution"
          title="My Contribution"
          description={project.overview}
        />
        <div className="contribution-list">
          {project.contributions.map((item) => (
            <article className="contribution-card" key={item.id}>
              <div className="contribution-copy">
                <span className={`scope-badge scope-${item.scope ?? "pending"}`}>
                  {item.scope === "direct" ? "직접 담당" : item.scope === "collaboration" ? "협업 영역" : "범위 정리 중"}
                </span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
              {item.media?.length ? (
                <div className="contribution-media">
                  {item.media.map((media) => <MediaBlock media={media} key={media.id} />)}
                </div>
              ) : null}
            </article>
          ))}
        </div>
        <div className="contribution-scope">
          <article>
            <span className="content-label">직접 담당</span>
            <ContentList items={project.responsibilities} />
          </article>
          <article>
            <span className="content-label">협업 영역</span>
            <ContentList items={project.collaborationScope} />
          </article>
        </div>
      </Container>
    </section>
  );
}
