import { CaseStudy } from "@/components/project/case-study";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ProblemSolvingCase } from "@/types/project";

export function ProblemSolvingCases({ cases }: { cases: ProblemSolvingCase[] }) {
  return (
    <section className="section section-tinted project-section" id="cases" aria-labelledby="cases-title">
      <Container>
        <SectionHeading
          eyebrow="02 / Case Studies"
          title="Problem Solving Cases"
          description="각 사례는 문제에서 시작해 판단, 구현, 근거와 결과로 이어집니다. 현재 내용은 실제 사례 정리를 위한 placeholder입니다."
        />
        <div className="cases-list">
          {cases.map((item, index) => <CaseStudy item={item} index={index} key={item.id} />)}
        </div>
      </Container>
    </section>
  );
}
