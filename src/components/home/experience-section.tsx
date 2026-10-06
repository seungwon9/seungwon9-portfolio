import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section className="section section-tinted" id="experience" aria-labelledby="experience-title">
      <Container>
        <SectionHeading
          eyebrow="02 / Experience"
          title="역할과 책임의 변화"
          description="경력 정보는 검증된 기간과 담당 범위를 기준으로 업데이트할 예정입니다."
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
              <span className="status-pill">내용 준비 중</span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
