import { MediaBlock } from "@/components/media/media-block";
import type { CaseContent, CaseStage, ProblemSolvingCase } from "@/types/project";

const steps: Array<{
  key: CaseStage;
  label: string;
  dataKey: keyof Pick<ProblemSolvingCase, "problem" | "decision" | "implementation" | "evidenceResult">;
}> = [
  { key: "problem", label: "Situation / Problem", dataKey: "problem" },
  { key: "decision", label: "Decision / Solution", dataKey: "decision" },
  { key: "implementation", label: "Implementation", dataKey: "implementation" },
  { key: "evidenceResult", label: "Evidence / Result", dataKey: "evidenceResult" },
];

function StepContent({ content }: { content: CaseContent }) {
  return (
    <>
      <p>{content.summary}</p>
      {content.details?.length ? (
        <ul>{content.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
      ) : null}
    </>
  );
}

export function CaseStudy({ item, index }: { item: ProblemSolvingCase; index: number }) {
  const unplacedMedia = item.media?.filter((media) => !media.placement) ?? [];

  return (
    <article className="case-study" id={item.id}>
      <header className="case-header">
        <span>Case {String(index + 1).padStart(2, "0")}</span>
        <h3>{item.title}</h3>
      </header>
      <div className="case-story-grid">
        {steps.map((step) => {
          const content = item[step.dataKey] as CaseContent | undefined;
          const stageMedia = item.media?.filter((media) => media.placement === step.key) ?? [];

          if (!content) return null;

          return (
            <section className="case-story-step" key={step.key}>
              <span className="case-story-label">{item.labels?.[step.key] ?? step.label}</span>
              <div className="case-story-copy">
                <StepContent content={content} />
                {stageMedia.map((media) => <MediaBlock media={media} key={media.id} />)}
              </div>
            </section>
          );
        })}
      </div>
      {unplacedMedia.length ? (
        <div className={`case-media-grid case-media-${item.mediaLayout ?? "grid"}`}>
          {unplacedMedia.map((media) => <MediaBlock media={media} key={media.id} />)}
        </div>
      ) : null}
    </article>
  );
}
