import { CaseStudy } from "@/components/project/case-study";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Project } from "@/types/project";

type ProblemSolvingCasesProps = {
  cases: Project["problemSolvingCases"];
  operationalDecisions?: Project["operationalDecisions"];
};

export function ProblemSolvingCases({ cases, operationalDecisions }: ProblemSolvingCasesProps) {
  return (
    <section className="section section-tinted project-section" id="cases" aria-labelledby="cases-title">
      <Container>
        <SectionHeading
          eyebrow="02 / Case Studies"
          title="Problem Solving"
          description="가장 중요한 문제를 상황, 판단, 구현, 근거의 흐름으로 압축했습니다. 확인된 내용만 남기고 근거가 없는 단계는 생략합니다."
        />
        <div className="cases-list">
          {cases.map((item, index) => <CaseStudy item={item} index={index} key={item.id} />)}
        </div>
        {operationalDecisions ? (
          <aside className="operational-decisions" aria-labelledby="operational-decisions-title">
            <header>
              <span>Operational Notes</span>
              <h3 id="operational-decisions-title">{operationalDecisions.title}</h3>
              {operationalDecisions.description ? <p>{operationalDecisions.description}</p> : null}
            </header>
            <div className="operational-decision-grid">
              {operationalDecisions.items.map((item) => (
                <article key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.summary}</p>
                </article>
              ))}
            </div>
          </aside>
        ) : null}
      </Container>
    </section>
  );
}
