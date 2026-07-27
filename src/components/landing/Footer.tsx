import Link from 'next/link';

export function Footer() {
  return (
    <footer className='border-t border-border bg-background py-12'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col items-center justify-between gap-6 md:flex-row'>
          <Link
            href='/'
            className='text-sm font-normal tracking-[0.3em] text-foreground'
          >
            SWIFTLAW
          </Link>
          <nav className='flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground'>
            <Link href='/pricing' className='transition-colors hover:text-foreground'>
              Pricing
            </Link>
            <Link href='/docs' className='transition-colors hover:text-foreground'>
              API
            </Link>
            <Link href='/blog' className='transition-colors hover:text-foreground'>
              Blog
            </Link>
            <Link href='/faq' className='transition-colors hover:text-foreground'>
              FAQ
            </Link>
            <Link href='/privacy' className='transition-colors hover:text-foreground'>
              Privacy
            </Link>
            <Link href='/terms' className='transition-colors hover:text-foreground'>
              Terms
            </Link>
          </nav>
          <p className='text-sm text-muted-foreground'>
            © {new Date().getFullYear()} SwiftLaw. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
