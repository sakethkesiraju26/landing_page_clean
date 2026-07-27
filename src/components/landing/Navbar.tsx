import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-[var(--sl-border)] bg-white/80 backdrop-blur-md'>
      <div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-6'>
        <Link href='/' className='flex items-center gap-2.5'>
          <Image
            src='/swiftlaw-logo.svg'
            alt=''
            width={32}
            height={26}
            unoptimized
            className='object-contain'
          />
          <span
            className='text-lg font-semibold tracking-tight'
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            SwiftLaw
          </span>
        </Link>
        <nav className='hidden items-center gap-8 text-sm font-medium text-[var(--sl-ink-secondary)] md:flex'>
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
            href='#research'
            className='transition-colors hover:text-[var(--sl-ink)]'
          >
            Research
          </Link>
          <Link
            href='#company'
            className='transition-colors hover:text-[var(--sl-ink)]'
          >
            Company
          </Link>
        </nav>
        <div className='flex items-center gap-3'>
          <Link
            href='#waitlist'
            className='hidden text-sm font-medium text-[var(--sl-ink-secondary)] transition-colors hover:text-[var(--sl-ink)] sm:inline-flex'
          >
            Sign in
          </Link>
          <Link
            href='#waitlist'
            className='inline-flex items-center justify-center rounded-full bg-[var(--sl-ink)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--sl-ink-secondary)]'
          >
            Get access
          </Link>
        </div>
      </div>
    </header>
  );
}
