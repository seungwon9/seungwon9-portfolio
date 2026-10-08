export type PublicationStatus = "draft" | "published";

type MediaBase = {
  id: string;
  title: string;
  caption?: string;
};

export type ImageMedia = MediaBase & {
  type: "image";
  src?: string;
  alt: string;
  width?: number;
  height?: number;
};

export type VideoMedia = MediaBase & {
  type: "video";
  src?: string;
  poster?: string;
  description: string;
};

export type BeforeAfterMedia = MediaBase & {
  type: "before-after";
  before: { label: string; src?: string; description: string; items?: string[] };
  after: { label: string; src?: string; description: string; items?: string[] };
};

export type DiagramMedia = MediaBase & {
  type: "diagram" | "mermaid";
  layout?: "flow" | "cards";
  src?: string;
  alt: string;
  description?: string;
  nodes?: Array<{
    label: string;
    description?: string;
    tone?: "default" | "decision" | "collaboration" | "blocked" | "success";
  }>;
  width?: number;
  height?: number;
};

export type ProjectMedia =
  | ImageMedia
  | VideoMedia
  | BeforeAfterMedia
  | DiagramMedia;

export type HighlightedText = {
  text: string;
  emphasis?: string;
};

export type ProjectStoryBlock =
  | { type: "paragraph"; content: HighlightedText }
  | { type: "points"; items: string[] }
  | { type: "inline-flow"; items: string[]; label?: string }
  | { type: "subheading"; title: string }
  | {
      type: "media";
      items: ProjectMedia[];
      layout?: "grid" | "sequence" | "stack";
    };

export type ProjectStory = {
  id: string;
  title?: string;
  blocks?: ProjectStoryBlock[];
  paragraphs?: HighlightedText[];
  points?: string[];
  media?: ProjectMedia[];
  mediaLayout?: "grid" | "sequence" | "stack";
};

export type Project = {
  slug: string;
  publicationStatus: PublicationStatus;
  featuredOrder: number;
  title: string;
  eyebrow: string;
  shortDescription: string;
  homeDescription?: string;
  overview: HighlightedText[];
  overviewMedia: ProjectMedia;
  overviewGallery?: ProjectMedia[];
  cardMedia?: ImageMedia;
  period?: string;
  role?: string;
  team?: string;
  users?: string;
  domain?: string;
  projectStatus?: string;
  technologies: string[];
  keywords: string[];
  technologyScope: {
    direct: string[];
    collaboration: string[];
  };
  developmentExperiences: ProjectStory[];
  problemSolvingExperiences?: ProjectStory[];
  problemSolvingTitle?: string;
  supportingProblems?: Array<{
    title: string;
    content: HighlightedText;
  }>;
  operationalDecisions?: {
    title: string;
    description?: string;
    items: Array<{
      title: string;
      summary: string;
    }>;
  };
  learnings: HighlightedText[];
  seo: {
    title: string;
    description: string;
  };
};
