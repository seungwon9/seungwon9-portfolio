import { MediaBlock } from "@/components/media/media-block";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Project } from "@/types/project";

export function ResultDemo({ project }: { project: Project }) {
  return (
    <section className="section project-section" id="result" aria-labelledby="result-title">
      <Container>
        <SectionHeading
          eyebrow="03 / Outcome"
          title="Result & Demo"
          description={project.resultAndDemo.summary}
        />
        {project.resultAndDemo.evidence.length ? (
          <ul className="evidence-list">
            {project.resultAndDemo.evidence.map((item) => <li key={item}>{item}</li>)}
          </ul>
        ) : (
          <p className="empty-note">검증 가능한 결과와 근거를 확인한 뒤 추가할 예정입니다.</p>
        )}
        {project.resultAndDemo.media.length ? (
          <div className="result-media-grid">
            {project.resultAndDemo.media.map((media) => <MediaBlock media={media} key={media.id} />)}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
