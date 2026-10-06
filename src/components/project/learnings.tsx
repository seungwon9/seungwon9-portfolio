import { Container } from "@/components/ui/container";
import type { Project } from "@/types/project";

export function Learnings({ project }: { project: Project }) {
  return (
    <section className="learnings-section" id="learnings" aria-labelledby="learnings-title">
      <Container>
        <p className="eyebrow">04 / Retrospective</p>
        <div className="learnings-grid">
          <h2 id="learnings-title">What I Learned</h2>
          {project.learnings.length ? (
            <ul>{project.learnings.map((item) => <li key={item}>{item}</li>)}</ul>
          ) : (
            <p>기술적 학습, 판단의 한계, 다시 한다면 바꿀 점을 실제 경험을 바탕으로 정리할 예정입니다.</p>
          )}
        </div>
      </Container>
    </section>
  );
}
