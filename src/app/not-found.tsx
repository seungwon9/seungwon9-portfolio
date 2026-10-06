import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="not-found">
      <Container>
        <p className="eyebrow">404 / Not Found</p>
        <h1>요청한 페이지를 찾을 수 없습니다.</h1>
        <p>주소를 다시 확인하거나 프로젝트 목록으로 돌아가 주세요.</p>
        <Link className="button button-primary" href="/#projects">프로젝트 목록으로</Link>
      </Container>
    </section>
  );
}
