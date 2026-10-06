import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <Container>
        <p className="eyebrow">04 / Contact</p>
        <div className="contact-grid">
          <h2 id="contact-title">함께 해결할 문제에 대해 이야기해 주세요.</h2>
          <div>
            <p>GitHub와 블로그에서 코드와 프로젝트 기록을 확인할 수 있습니다.</p>
            <div className="contact-links">
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a href={profile.blog} target="_blank" rel="noreferrer">Blog <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
