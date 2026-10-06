import { projects } from "@/data/projects";

export function getPublishedProjects() {
  return projects
    .filter((project) => project.publicationStatus === "published")
    .sort((a, b) => a.featuredOrder - b.featuredOrder);
}

export function getProjectBySlug(slug: string) {
  return getPublishedProjects().find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const publishedProjects = getPublishedProjects();
  const currentIndex = publishedProjects.findIndex((project) => project.slug === slug);

  return {
    previous: currentIndex > 0 ? publishedProjects[currentIndex - 1] : undefined,
    next:
      currentIndex >= 0 && currentIndex < publishedProjects.length - 1
        ? publishedProjects[currentIndex + 1]
        : undefined,
  };
}
