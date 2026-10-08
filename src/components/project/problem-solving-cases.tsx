import { ProjectStoryCard } from "@/components/project/case-study";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Project } from "@/types/project";

type ProjectStorySectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  stories: Project["developmentExperiences"];
  numbered?: boolean;
  tinted?: boolean;
};

export function ProjectStorySection({
  id,
  eyebrow,
  title,
  description,
  stories,
  numbered = true,
  tinted = false,
}: ProjectStorySectionProps) {
  return (
    <section className={`section project-section${tinted ? " section-tinted" : ""}`} id={id} aria-labelledby={`${id}-title`}>
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          id={`${id}-title`}
        />
        <div className="project-story-list">
          {stories.map((item, index) => (
            <ProjectStoryCard item={item} index={index} key={item.id} numbered={numbered} />
          ))}
        </div>
      </Container>
    </section>
  );
}
