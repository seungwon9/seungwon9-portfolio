import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TechLearnings } from "@/components/project/learnings";
import { ProjectStorySection } from "@/components/project/problem-solving-cases";
import { ProjectNavigation } from "@/components/project/project-navigation";
import { ProjectOverview } from "@/components/project/project-overview";
import { getAdjacentProjects, getProjectBySlug, getPublishedProjects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: project.seo.title,
    description: project.seo.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const { previous, next } = getAdjacentProjects(slug);

  return (
    <>
      <ProjectOverview project={project} />
      <ProjectStorySection
        id="development"
        eyebrow="01 / 기능 개발"
        title="주요 기능 개발"
        stories={project.developmentExperiences}
        tinted
      />
      {project.problemSolvingExperiences?.length ? (
        <ProjectStorySection
          id="problem-solving"
          eyebrow="02 / 문제 해결"
          title={project.problemSolvingTitle ?? "문제 해결 경험"}
          stories={project.problemSolvingExperiences}
          numbered={false}
        />
      ) : null}
      {project.learnings.length ? <TechLearnings project={project} /> : null}
      <ProjectNavigation previous={previous} next={next} />
    </>
  );
}
