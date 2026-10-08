import { Container } from "@/components/ui/container";
import { fieldExperience } from "@/data/field-experience";

export function FieldExperienceSection() {
  return (
    <section className="field-experience-section" aria-labelledby="field-experience-title">
      <Container>
        <div className="field-experience-heading">
          <h2 id="field-experience-title">그 외 경험</h2>
          <p>대학시절부터 건설현장, 제조 현장, 행사와 서비스업에서 일해왔습니다. 새로운 환경에서 업무를 익히고, 정해진 절차와 현장의 상황을 함께 살피는 경험을 쌓았습니다.</p>
        </div>
        <div className="field-experience-grid">
          {fieldExperience.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
