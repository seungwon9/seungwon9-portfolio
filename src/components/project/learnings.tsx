import { Container } from "@/components/ui/container";
import type { Project } from "@/types/project";

function TechnologyList({ items, fallback }: { items: string[]; fallback: string }) {
  return items.length ? (
    <ul className="technology-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>
  ) : <p>{fallback}</p>;
}

export function TechLearnings({ project }: { project: Project }) {
  return (
    <section className="learnings-section" id="tech-learnings" aria-labelledby="tech-learnings-title">
      <Container>
        <p className="eyebrow">04 / Scope & Retrospective</p>
        <div className="learnings-grid">
          <h2 id="tech-learnings-title">Tech & Learnings</h2>
          <div>
            <div className="technology-scope-grid">
              <article>
                <span className="content-label">직접 담당 기술</span>
                <TechnologyList items={project.technologyScope.direct} fallback="직접 담당 기술을 정리할 예정입니다." />
              </article>
              <article>
                <span className="content-label">협업 기술 영역</span>
                <TechnologyList items={project.technologyScope.collaboration} fallback="협업 기술 영역을 정리할 예정입니다." />
              </article>
            </div>
            <div className="learning-copy">
              <span className="content-label">What I Learned</span>
              {project.learnings.length ? (
                <ul>{project.learnings.map((item) => <li key={item}>{item}</li>)}</ul>
              ) : (
                <p>이후 작업 방식에 영향을 준 판단과 배움을 실제 경험을 바탕으로 정리할 예정입니다.</p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
