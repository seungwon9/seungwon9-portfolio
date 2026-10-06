import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContextRole } from "@/components/project/context-role";
import { Learnings } from "@/components/project/learnings";
import { ProblemSolvingCases } from "@/components/project/problem-solving-cases";
import { ProjectNavigation } from "@/components/project/project-navigation";
import { ProjectOverview } from "@/components/project/project-overview";
import { ResultDemo } from "@/components/project/result-demo";
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
      <ContextRole project={project} />
      <ProblemSolvingCases cases={project.problemSolvingCases} />
      <ResultDemo project={project} />
      <Learnings project={project} />
      <ProjectNavigation previous={previous} next={next} />
    </>
  );
}
