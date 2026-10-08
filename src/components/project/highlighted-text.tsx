import type { ElementType } from "react";
import type { HighlightedText as HighlightedTextValue } from "@/types/project";

type HighlightedTextProps = {
  content: HighlightedTextValue;
  as?: ElementType;
  className?: string;
};

export function HighlightedText({ content, as: Tag = "p", className }: HighlightedTextProps) {
  const emphasisIndex = content.emphasis ? content.text.indexOf(content.emphasis) : -1;

  if (!content.emphasis || emphasisIndex < 0) {
    return <Tag className={className}>{content.text}</Tag>;
  }

  const before = content.text.slice(0, emphasisIndex);
  const after = content.text.slice(emphasisIndex + content.emphasis.length);

  return (
    <Tag className={className}>
      {before}
      <strong className="text-emphasis">{content.emphasis}</strong>
      {after}
    </Tag>
  );
}
