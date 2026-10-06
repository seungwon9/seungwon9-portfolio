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
          description="프로젝트에서 직접 사용한 기술을 어떤 문제에 적용했는지 기준으로 묶었습니다."
        />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-group" key={group.title}>
              <span className="skill-index">0{index + 1}</span>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="skill-tech">{group.technologies.join(" · ")}</div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
