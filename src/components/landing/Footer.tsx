import Link from 'next/link';

const footerLinks = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'AI Fund Formation', href: '/ai-fund-formation' },
  { label: 'How to form a venture fund', href: '/how-to-form-a-venture-fund' },
  { label: 'Fund Formation Glossary', href: '/glossary' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
];

export function Footer() {
  return (
    <footer className='border-t border-light/10 bg-navy py-12 md:py-16'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col items-start justify-between gap-10 md:flex-row md:items-center'>
          <div>
            <Link href='/' className='text-lg font-semibold tracking-[0.2em] text-light'>
              SWIFTLAW
            </Link>
            <p className='mt-3 max-w-xs text-sm leading-relaxed text-light/60'>
              AI orchestration for investment management. Fund formation,
              administration, and compliance in one place.
            </p>
          </div>
          <div className='flex flex-wrap gap-x-8 gap-y-4'>
            {footerLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className='text-sm text-light/70 transition-colors hover:text-light'
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className='mt-12 flex flex-col items-center justify-between gap-4 border-t border-light/10 pt-8 text-sm text-light/50 md:flex-row'>
          <p>&copy; {new Date().getFullYear()} SwiftLaw. All rights reserved.</p>
          <div className='flex gap-6'>
            <a href='https://twitter.com' className='hover:text-light'>Twitter</a>
            <a href='https://linkedin.com' className='hover:text-light'>LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
