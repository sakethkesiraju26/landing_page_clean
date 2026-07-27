import Link from 'next/link';

export function Footer() {
  return (
    <footer className='border-t border-[var(--sl-border)] bg-white py-12'>
      <div className='mx-auto max-w-6xl px-6'>
        <div className='flex flex-col items-center justify-between gap-6 md:flex-row'>
          <div className='flex items-center gap-2'>
            <span
              className='text-lg font-semibold tracking-tight'
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              SwiftLaw
            </span>
          </div>
          <nav className='flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--sl-ink-secondary)]'>
            <Link
              href='#product'
              className='transition-colors hover:text-[var(--sl-ink)]'
            >
              Product
            </Link>
            <Link
              href='#use-cases'
              className='transition-colors hover:text-[var(--sl-ink)]'
            >
              Use cases
            </Link>
            <Link
              href='#company'
              className='transition-colors hover:text-[var(--sl-ink)]'
            >
              Company
            </Link>
            <Link
              href='#waitlist'
              className='transition-colors hover:text-[var(--sl-ink)]'
            >
              Get access
            </Link>
          </nav>
          <p className='text-sm text-[var(--sl-ink-muted)]'>
            © 2026 SwiftLaw. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
