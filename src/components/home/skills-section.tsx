import { Container } from "@/components/ui/container";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <Container>
        <h2 className="home-section-title" id="skills-title">기술</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul className="skill-tech" aria-label={`${group.title} 기술`}>
                {group.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
