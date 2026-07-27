const stats = [
  {
    figure: '80%',
    label: 'reduction in drafting cost',
    body: 'DLA Piper launched a $10M venture fund with SwiftLaw as design partner. First drafts generated, attorneys negotiated.',
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
        className='h-6 w-6'
      >
        <line x1='12' y1='2' x2='12' y2='22' />
        <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
      </svg>
    ),
  },
  {
    figure: '10–15',
    label: 'hours saved per matter',
    body: 'Funds attorneys report consistent time savings across drafting and review.',
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
        className='h-6 w-6'
      >
        <circle cx='12' cy='12' r='10' />
        <polyline points='12 6 12 12 16 14' />
      </svg>
    ),
  },
  {
    figure: 'Passed',
    label: 'vendor diligence',
    body: 'Cleared full security review at a $13B+ AUM multi-manager platform.',
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
        className='h-6 w-6'
      >
        <path d='M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z' />
        <path d='m9 12 2 2 4-4' />
      </svg>
    ),
  },
];

export function Mission() {
  return (
    <section className='border-t border-border bg-background py-32'>
      <div className='container mx-auto px-6'>
        <div className='mb-20 text-center'>
          <p className='mb-8 animate-fade-in text-xs font-medium uppercase tracking-widest text-muted-foreground'>
            Results that compound
          </p>
          <h2 className='mx-auto max-w-4xl animate-slide-up font-sans text-5xl font-semibold leading-tight text-foreground md:text-7xl'>
            Proven at scale
          </h2>
        </div>
        <div className='mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3'>
          {stats.map((s, i) => (
            <div
              key={s.label}
              className='animate-scale-in border border-border bg-card p-8 transition-colors duration-300 hover:border-foreground/20'
              style={{ animationDelay: `${(i + 1) * 0.1}s` }}
            >
              <div className='mb-6 flex items-center gap-4'>
                <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center bg-primary text-primary-foreground'>
                  {s.icon}
                </div>
                <p className='font-sans text-4xl font-semibold text-foreground'>
                  {s.figure}
                </p>
              </div>
              <p className='mb-4 text-sm uppercase tracking-wider text-muted-foreground'>
                {s.label}
              </p>
              <div className='border-t border-border pt-4'>
                <p className='leading-relaxed text-muted-foreground'>
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
