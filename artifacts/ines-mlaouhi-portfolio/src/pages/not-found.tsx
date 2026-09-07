import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import { useLocale } from '@/hooks/use-locale';
import { Footer } from '@/App';

export default function NotFound() {
  const { copy } = useLocale();
  return (
    <>
      <main className="page-container inner-banner" style={{ minHeight: '100dvh' }}>
        <span className="section-kicker">{copy.notFoundKicker}</span>
        <h1><span dangerouslySetInnerHTML={{ __html: copy.notFoundTitle }} /></h1>
        <p>{copy.notFoundBody}</p>
        <Link href="/" className="text-link" style={{ marginTop: '2rem' }} data-testid="link-not-found-home">{copy.home} <ArrowLeft size={15} /></Link>
      </main>
      <Footer />
    </>
  );
}