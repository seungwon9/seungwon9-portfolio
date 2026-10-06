import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section className="section section-tinted" id="experience" aria-labelledby="experience-title">
      <Container>
        <SectionHeading
          eyebrow="02 / Experience"
          title="서비스와 프로젝트를 만든 경험"
          description="회사에서의 제품 개발과 이후 프로젝트·프리랜스 경험 중 핵심 작업만 정리했습니다."
        />
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={`${item.period}-${item.organization}`}>
              <p className="experience-period">{item.period}</p>
              <div>
                <h3>{item.organization}</h3>
                <p className="experience-role">{item.role}</p>
                <p className="muted">{item.description}</p>
              </div>
              <span className="status-pill">{item.category}</span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
