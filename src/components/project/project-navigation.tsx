import Link from "next/link";
import { Container } from "@/components/ui/container";
import type { Project } from "@/types/project";

export function ProjectNavigation({ previous, next }: { previous?: Project; next?: Project }) {
  return (
    <nav className="project-navigation" aria-label="다른 프로젝트">
      <Container className="project-navigation-inner">
        {previous ? (
          <Link href={`/projects/${previous.slug}`}>
            <span>← 이전 프로젝트</span>
            <strong>{previous.title}</strong>
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/projects/${next.slug}`} className="next-project">
            <span>다음 프로젝트 →</span>
            <strong>{next.title}</strong>
          </Link>
        ) : <span />}
      </Container>
    </nav>
  );
}
