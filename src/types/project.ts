export type PublicationStatus = "draft" | "published";

export type CaseStage =
  | "problem"
  | "decision"
  | "implementation"
  | "evidenceResult";

type MediaBase = {
  id: string;
  title: string;
  caption?: string;
  placement?: CaseStage;
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
  src?: string;
  alt: string;
  description?: string;
  nodes?: Array<{
    label: string;
    tone?: "default" | "decision" | "blocked" | "success";
  }>;
  width?: number;
  height?: number;
};

export type ProjectMedia =
  | ImageMedia
  | VideoMedia
  | BeforeAfterMedia
  | DiagramMedia;

export type CaseContent = {
  summary: string;
  details?: string[];
};

export type ProblemSolvingCase = {
  id: string;
  title: string;
  problem: CaseContent;
  decision?: CaseContent;
  implementation?: CaseContent;
  evidenceResult?: CaseContent;
  media?: ProjectMedia[];
};

export type Project = {
  slug: string;
  publicationStatus: PublicationStatus;
  featuredOrder: number;
  title: string;
  eyebrow: string;
  shortDescription: string;
  overview: string;
  period?: string;
  role?: string;
  team?: string;
  users?: string;
  projectStatus?: string;
  technologies: string[];
  keywords: string[];
  context: string[];
  responsibilities: string[];
  collaborationScope: string[];
  problemSolvingCases: ProblemSolvingCase[];
  resultAndDemo: {
    summary: string;
    evidence: string[];
    media: ProjectMedia[];
  };
  learnings: string[];
  seo: {
    title: string;
    description: string;
  };
};
