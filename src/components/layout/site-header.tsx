import Link from "next/link";
import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";

const navigation = [
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Container className="header-inner">
        <Link className="brand" href="/" aria-label={`${profile.name} 포트폴리오 홈`}>
          <span className="brand-mark" aria-hidden="true">S</span>
          <span>{profile.name}</span>
        </Link>
        <nav className="site-nav" aria-label="주요 메뉴">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
