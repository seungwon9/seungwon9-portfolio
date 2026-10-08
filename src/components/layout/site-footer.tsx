import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <p className="footer-name">{profile.name} · Software Developer</p>
      </Container>
    </footer>
  );
}
