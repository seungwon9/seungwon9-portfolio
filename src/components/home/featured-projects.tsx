import { ProjectCard } from "@/components/home/project-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Project } from "@/types/project";

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <Container>
        <SectionHeading
          eyebrow="01 / Selected Work"
          title="문제와 판단의 과정이 보이는 프로젝트"
          description="기술 목록보다 어떤 문제를 이해했고, 무엇을 선택하고 구현했는지에 집중합니다."
        />
        <div className="projects-grid">
          {projects.map((project) => <ProjectCard project={project} key={project.slug} />)}
        </div>
      </Container>
    </section>
  );
}
