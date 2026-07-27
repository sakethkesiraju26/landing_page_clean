import Link from 'next/link';

const audiences = [
  {
    href: '/emerging-managers',
    title: 'Emerging managers',
    desc: 'You need docs yesterday and a legal bill that does not eat your management fee. SwiftLaw drafts the suite. Counsel signs off. You raise.',
    cta: 'SwiftLaw for emerging managers',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='h-5 w-5'
      >
        <path d='M7 20h10' />
        <path d='M10 20c5.5-2.5.8-6.4 3-10' />
        <path d='M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z' />
        <path d='M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z' />
      </svg>
    ),
  },
  {
    href: '/ai-fund-formation',
    title: 'Established GPs',
    desc: 'Fund II, Fund V, your tenth SPV. Start from what you already negotiated, not a blank page.',
    cta: 'SwiftLaw for your next vehicle',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='h-5 w-5'
      >
        <polyline points='22 7 13.5 15.5 8.5 10.5 2 17' />
        <polyline points='16 7 22 7 22 13' />
      </svg>
    ),
  },
  {
    href: '/law-firms',
    title: 'Law firms',
    desc: 'Run more formations with the team you have. Native Word, tracked changes, and your attorneys keep the pen.',
    cta: 'SwiftLaw for law firms',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='h-5 w-5'
      >
        <path d='m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z' />
        <path d='m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z' />
        <path d='M7 21h10' />
        <path d='M12 3v18' />
        <path d='M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2' />
      </svg>
    ),
  },
];

export function Testimonials() {
  return (
    <section className='border-t border-border bg-muted/30 py-24 md:py-32'>
      <div className='container mx-auto px-6'>
        <div className='mx-auto mb-16 max-w-3xl text-center'>
          <h2 className='mb-6 font-serif text-4xl font-light leading-[1.1] tracking-tight text-foreground md:text-6xl'>
            Built for you
          </h2>
          <p className='text-lg leading-relaxed text-muted-foreground'>
            First fund or fiftieth formation. Same platform.
          </p>
        </div>
        <div className='mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3'>
          {audiences.map((a) => (
            <Link
              key={a.title}
              href={a.href}
              className='group block rounded-2xl border border-border bg-card p-9 transition-colors hover:border-foreground/40'
            >
              <div className='mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground'>
                {a.icon}
              </div>
              <h3 className='mb-3 font-serif text-2xl text-foreground'>
                {a.title}
              </h3>
              <p className='mb-7 text-sm leading-relaxed text-muted-foreground'>
                {a.desc}
              </p>
              <span className='inline-flex items-center gap-2 text-sm font-medium text-foreground'>
                {a.cta}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='h-4 w-4 transition-transform group-hover:translate-x-1'
                >
                  <path d='M5 12h14' />
                  <path d='m12 5 7 7-7 7' />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
