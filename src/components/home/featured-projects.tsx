import { ProjectCard } from "@/components/home/project-card";
import { Container } from "@/components/ui/container";
import { homeProjects } from "@/data/home-projects";

export function FeaturedProjects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <Container>
        <h2 className="home-section-title" id="projects-title">대표 프로젝트</h2>
        <div className="projects-grid">
          {homeProjects.map((project) => <ProjectCard project={project} key={project.slug} />)}
        </div>
      </Container>
    </section>
  );
}
