const docs = [
  { title: 'LPA', desc: 'Drafted from your terms. Not a template dump.' },
  { title: 'PPM', desc: 'Matches the LPA. Every time.' },
  { title: 'Subscription Docs', desc: 'Investor packets, ready for signature.' },
  { title: 'Term Sheet', desc: 'Your terms, structured and market-checked.' },
  { title: 'Side Letters', desc: 'Per-LP terms. MFN tracked automatically.' },
  { title: 'GP & ManCo Docs', desc: 'The entities behind the fund, papered.' },
  { title: 'IMA', desc: 'Managed accounts, same engine.' },
  { title: 'Closing Checklist', desc: 'Every filing and signature, tracked to done.' },
];

export function LongHorizon() {
  return (
    <section className='border-t border-border bg-background py-24 md:py-32'>
      <div className='container mx-auto px-6'>
        <div className='mx-auto mb-16 max-w-3xl text-center'>
          <p className='mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground'>
            Get formed
          </p>
          <h2 className='font-sans text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl'>
            Every document your fund needs
          </h2>
        </div>
        <div className='mx-auto mb-12 grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4'>
          {docs.map((d) => (
            <div
              key={d.title}
              className='rounded-2xl border border-border bg-card p-7 transition-colors hover:border-foreground/20'
            >
              <h3 className='mb-2 font-sans text-lg font-semibold text-foreground'>
                {d.title}
              </h3>
              <p className='text-sm leading-relaxed text-muted-foreground'>
                {d.desc}
              </p>
            </div>
          ))}
        </div>
        <div className='text-center'>
          <a
            href='/ai-fund-formation'
            className='group inline-flex items-center gap-2 text-base font-medium text-foreground'
          >
            Explore AI fund formation
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
          </a>
        </div>
      </div>
    </section>
  );
}
