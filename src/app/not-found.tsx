import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section">
      <div className="container prose-card card">
        <h1>Sayfa bulunamadı</h1>
        <p>Aradığınız sayfa taşınmış veya yayından kaldırılmış olabilir.</p>
        <Link className="btn btn-primary" href="/tr">
          Ana sayfaya dön
        </Link>
      </div>
    </main>
  );
}
