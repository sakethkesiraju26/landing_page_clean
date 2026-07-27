import Link from 'next/link';

const audiences = [
  {
    href: '/emerging-managers',
    title: 'Emerging managers',
    desc: 'You need docs yesterday and a legal bill that does not eat your management fee. SwiftLaw drafts the suite. Counsel signs off. You raise.',
    cta: 'SwiftLaw for emerging managers',
  },
  {
    href: '/ai-fund-formation',
    title: 'Established GPs',
    desc: 'Fund II, Fund V, your tenth SPV. Start from what you already negotiated, not a blank page.',
    cta: 'SwiftLaw for your next vehicle',
  },
  {
    href: '/law-firms',
    title: 'Law firms',
    desc: 'Run more formations with the team you have. Native Word, tracked changes, and your attorneys keep the pen.',
    cta: 'SwiftLaw for law firms',
  },
];

export function Testimonials() {
  return (
    <section className='border-t border-border bg-background py-24 md:py-32'>
      <div className='container mx-auto px-6'>
        <div className='mx-auto mb-16 max-w-3xl text-center'>
          <h2 className='mb-6 font-sans text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl'>
            Built for you, whoever you are
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
              className='group block rounded-2xl border border-border bg-card p-9 transition-all hover:border-blue/60'
            >
              <h3 className='mb-3 font-sans text-2xl font-semibold text-foreground'>
                {a.title}
              </h3>
              <p className='mb-8 text-sm leading-relaxed text-muted-foreground'>
                {a.desc}
              </p>
              <span className='inline-flex items-center gap-2 text-sm font-medium text-blue group-hover:underline'>
                {a.cta}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='12'
                  viewBox='0 0 26 21'
                  fill='none'
                  className='h-3 w-4 transition-transform group-hover:translate-x-1'
                >
                  <path
                    d='M14.34.717l.02-.02c.57-.51 1.45-.48 1.99.06l8.94 8.707a1.24 1.24 0 010 1.924L16.353 20.098c-.54.54-1.42.567-1.99.057-.27-.254-.42-.602-.46-.967a1.45 1.45 0 01.41-1.026l5.272-5.135a.78.78 0 00.17-.829.816.816 0 00-.722-.468l-17.38-.002A1.055 1.055 0 01.685 11.373a1.02 1.02 0 01-.4-1.024c.034-.755.677-1.346 1.45-1.335l17.33-.005a.81.81 0 00.722-.47.77.77 0 00-.17-.828L14.347 2.626a1.244 1.244 0 010-1.909z'
                    fill='currentColor'
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
