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
            <p>연락처와 외부 프로필은 공개 정보를 확정한 뒤 연결할 예정입니다.</p>
            <span className="contact-placeholder">{profile.email}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
