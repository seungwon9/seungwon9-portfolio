import { Container } from "@/components/ui/container";
import { HighlightedText } from "@/components/project/highlighted-text";
import type { Project } from "@/types/project";

export function TechLearnings({ project }: { project: Project }) {
  return (
    <section className="learnings-section" id="retrospective" aria-labelledby="retrospective-title">
      <Container>
        <p className="eyebrow">{project.problemSolvingExperiences?.length ? "03" : "02"} / 회고</p>
        <div className="learnings-grid">
          <h2 id="retrospective-title">회고</h2>
          <div className="learning-paragraphs">
            {project.learnings.map((item) => <HighlightedText content={item} key={item.text} />)}
          </div>
        </div>
      </Container>
    </section>
  );
}
