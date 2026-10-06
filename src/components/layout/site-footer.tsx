import Link from "next/link";
import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="muted">문제와 판단, 구현 과정을 기록하는 개발자 포트폴리오</p>
        </div>
        <div className="footer-links">
          <Link href="/#projects">Projects</Link>
          <Link href="/#contact">Contact</Link>
          <a href="#top">맨 위로</a>
        </div>
      </Container>
    </footer>
  );
}
