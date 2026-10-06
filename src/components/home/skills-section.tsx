import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <Container>
        <SectionHeading
          eyebrow="03 / Capabilities"
          title="기술보다 활용 맥락으로"
          description="실제 프로젝트에서 사용한 기술과 판단 근거가 정리되면 각 영역에 연결합니다."
        />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-group" key={group.title}>
              <span className="skill-index">0{index + 1}</span>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="skill-tech">
                {group.technologies.length > 0 ? group.technologies.join(" · ") : "기술 목록 준비 중"}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
