import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="page-shell flex min-h-[60vh] flex-col items-center justify-center text-center py-20">
      <p className="font-mono-ui text-[10px] uppercase tracking-[0.25em] text-primary">404 Error</p>
      <h1 className="mt-4 font-display text-6xl text-foreground">Page Not Found</h1>
      <p className="mt-4 text-sm text-muted-foreground">The page you are looking for does not exist or has been moved.</p>
      <Link href="/" className="gold-button mt-8 inline-flex items-center gap-2 border border-primary px-5 py-3 font-mono-ui text-[10px] uppercase tracking-[0.18em] text-primary hover:bg-primary hover:text-primary-foreground">
        <ArrowLeft size={14} /> Back to Home
      </Link>
    </div>
  );
}
