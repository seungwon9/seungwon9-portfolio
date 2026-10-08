import { MediaBlock } from "@/components/media/media-block";
import { HighlightedText } from "@/components/project/highlighted-text";
import type { ProjectStory, ProjectStoryBlock } from "@/types/project";

function InlineFlow({ items, label }: { items: string[]; label?: string }) {
  return (
    <div className="inline-flow-wrap">
      {label ? <span className="content-label">{label}</span> : null}
      <ol className="inline-flow" aria-label={label}>
        {items.map((flowItem) => <li key={flowItem}>{flowItem}</li>)}
      </ol>
    </div>
  );
}

function StoryBlock({ block }: { block: ProjectStoryBlock }) {
  if (block.type === "paragraph") {
    return <HighlightedText content={block.content} />;
  }

  if (block.type === "points") {
    return <ul>{block.items.map((point) => <li key={point}>{point}</li>)}</ul>;
  }

  if (block.type === "inline-flow") {
    return <InlineFlow items={block.items} label={block.label} />;
  }

  if (block.type === "subheading") {
    return <h4 className="project-story-subheading">{block.title}</h4>;
  }

  return (
    <div className={`project-story-media project-story-media-${block.layout ?? "grid"}`}>
      {block.items.map((media) => <MediaBlock media={media} key={media.id} />)}
    </div>
  );
}

export function ProjectStoryCard({
  item,
  index,
  numbered = true,
}: {
  item: ProjectStory;
  index: number;
  numbered?: boolean;
}) {
  return (
    <article className="project-story" id={item.id}>
      {item.title ? (
        <header className="project-story-header">
          <h3>{numbered ? <span>{index + 1}.</span> : null} {item.title}</h3>
        </header>
      ) : null}
      {item.blocks?.length ? (
        <div className="project-story-blocks">
          {item.blocks.map((block, blockIndex) => (
            <StoryBlock block={block} key={`${item.id}-${block.type}-${blockIndex}`} />
          ))}
        </div>
      ) : (
        <>
          <div className="project-story-copy">
            {item.paragraphs?.map((paragraph) => (
              <HighlightedText content={paragraph} key={paragraph.text} />
            ))}
            {item.points?.length ? (
              <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
            ) : null}
          </div>
          {item.media?.length ? (
            <div className={`project-story-media project-story-media-${item.mediaLayout ?? "grid"}`}>
              {item.media.map((media) => <MediaBlock media={media} key={media.id} />)}
            </div>
          ) : null}
        </>
      )}
    </article>
  );
}
