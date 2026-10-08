import { ImageLightbox } from "@/components/media/image-lightbox";
import type { ProjectMedia } from "@/types/project";

function Placeholder({ type, title }: { type: string; title: string }) {
  return (
    <div className="media-placeholder" role="img" aria-label={`${title} 자료 준비 중`}>
      <div className="placeholder-grid" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div>
        <span className="media-type">{type}</span>
        <p>{title}</p>
        <small>실제 자료 준비 중</small>
      </div>
    </div>
  );
}

function TextFlow({
  items,
  tone = "default",
}: {
  items: string[];
  tone?: "default" | "before" | "after";
}) {
  return (
    <ol className={`text-flow text-flow-${tone}`}>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ol>
  );
}

export function MediaBlock({ media, eager = false }: { media: ProjectMedia; eager?: boolean }) {
  if (media.type === "before-after") {
    return (
      <figure className="media-figure">
        <div className="before-after-grid">
          {[media.before, media.after].map((item) => (
            <div className="compare-panel" key={item.label}>
              <span className="compare-label">{item.label}</span>
              {item.src ? (
                <ImageLightbox src={item.src} alt={item.description} width={960} height={640} />
              ) : item.items?.length ? (
                <div className="compare-content">
                  <p>{item.description}</p>
                  <TextFlow items={item.items} tone={item.label === "Before" ? "before" : "after"} />
                </div>
              ) : (
                <Placeholder type={item.label} title={item.description} />
              )}
            </div>
          ))}
        </div>
        {media.caption ? <figcaption>{media.caption}</figcaption> : null}
      </figure>
    );
  }

  if (media.type === "video") {
    return (
      <figure className="media-figure">
        {media.src ? (
          <video controls preload="metadata" poster={media.poster} aria-label={media.description}>
            <source src={media.src} />
            브라우저에서 영상을 재생할 수 없습니다.
          </video>
        ) : (
          <Placeholder type="VIDEO" title={media.title} />
        )}
        {media.caption ? <figcaption>{media.caption}</figcaption> : null}
      </figure>
    );
  }

  if ((media.type === "diagram" || media.type === "mermaid") && media.nodes?.length) {
    return (
      <figure className="media-figure diagram-figure">
        <div className="diagram-heading">
          <span className="media-type">구조 / 흐름</span>
          <h5>{media.title}</h5>
          {media.description ? <p>{media.description}</p> : null}
        </div>
        <ol className={`diagram-flow diagram-flow-${media.layout ?? "flow"}`} aria-label={media.alt}>
          {media.nodes.map((node) => (
            <li className={`diagram-node diagram-node-${node.tone ?? "default"}`} key={node.label}>
              <strong>{node.label}</strong>
              {node.description ? <span>{node.description}</span> : null}
            </li>
          ))}
        </ol>
        {media.caption ? <figcaption>{media.caption}</figcaption> : null}
      </figure>
    );
  }

  return (
    <figure className="media-figure">
      {media.src ? (
        <ImageLightbox
          src={media.src}
          alt={media.alt}
          width={media.width ?? 1440}
          height={media.height ?? 900}
          eager={eager}
        />
      ) : (
        <Placeholder type={media.type.toUpperCase()} title={media.title} />
      )}
      {media.caption ? <figcaption>{media.caption}</figcaption> : null}
    </figure>
  );
}
