import { Container } from "@/components/ui/container";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section className="section section-tinted experience-section" id="experience" aria-labelledby="experience-title">
      <Container>
        <h2 className="home-section-title" id="experience-title">경험</h2>
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={`${item.period}-${item.organization}`}>
              <p className="experience-period">{item.period}</p>
              <div className="experience-content">
                <h3>{item.organization}</h3>
                <p className="experience-role">{item.role}</p>
                <p className="experience-description">{item.description}</p>
                <ul>
                  {item.items.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
