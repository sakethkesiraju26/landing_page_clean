const features = [
  {
    title: 'Fund launch',
    desc: 'The full doc suite from your term sheet. Filed on schedule.',
    icon: (
      <svg viewBox='0 0 120 80' className='h-20 w-auto' role='img' aria-label='Fund launch'>
        <rect x='18' y='22' width='40' height='50' rx='5' fill='var(--color-card)' stroke='var(--color-border)' strokeWidth='1.5' />
        <rect x='25' y='32' width='26' height='3' rx='1.5' fill='var(--color-muted-foreground)' opacity='0.4' />
        <rect x='25' y='40' width='20' height='3' rx='1.5' fill='var(--color-muted-foreground)' opacity='0.4' />
        <rect x='25' y='48' width='24' height='3' rx='1.5' fill='var(--color-muted-foreground)' opacity='0.4' />
        <rect x='25' y='60' width='14' height='4' rx='2' fill='var(--color-swift-forest)' />
        <path d='M76 62 V26 m0 0 l-9 9 m9 -9 l9 9' stroke='var(--color-swift-forest)' strokeWidth='2.5' fill='none' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    ),
  },
  {
    title: 'Fund admin',
    desc: 'LP onboarding, subscription tracking, capital calls. Papered and tracked.',
    icon: (
      <svg viewBox='0 0 120 80' className='h-20 w-auto' role='img' aria-label='Fund administration'>
        <rect x='20' y='12' width='80' height='56' rx='7' fill='var(--color-card)' stroke='var(--color-border)' strokeWidth='1.5' />
        {[0, 15, 30].map((dy) => (
          <g key={dy} transform={`translate(30 ${24 + dy})`}>
            <circle cx='5' cy='5' r='5' fill='var(--color-swift-forest)' stroke='var(--color-swift-forest)' strokeWidth='1.5' />
            <path d='M2.5 5 l1.8 1.9 L7.6 3.4' stroke='var(--color-card)' strokeWidth='1.4' fill='none' strokeLinecap='round' strokeLinejoin='round' />
            <rect x='16' y='3.5' width='30' height='3' rx='1.5' fill='var(--color-muted-foreground)' opacity='0.4' />
            <rect x='56' y='3.5' width='14' height='3' rx='1.5' fill='var(--color-swift-forest)' opacity='0.7' />
          </g>
        ))}
      </svg>
    ),
  },
  {
    title: 'Ongoing management',
    desc: 'Amendments, side letters, transfers. Handled as they come.',
    icon: (
      <svg viewBox='0 0 120 80' className='h-20 w-auto' role='img' aria-label='Ongoing management'>
        <rect x='45' y='24' width='30' height='38' rx='4' fill='var(--color-card)' stroke='var(--color-swift-brown)' strokeWidth='1.5' />
        <rect x='51' y='32' width='18' height='2.5' rx='1.25' fill='var(--color-muted-foreground)' opacity='0.4' />
        <rect x='51' y='38' width='14' height='2.5' rx='1.25' fill='var(--color-muted-foreground)' opacity='0.4' />
        <rect x='51' y='44' width='16' height='2.5' rx='1.25' fill='var(--color-muted-foreground)' opacity='0.4' />
        <path d='M34 52 a26 26 0 0 1 18 -26 m-18 26 l-5 -7 m5 7 l8 -3' stroke='var(--color-swift-brown)' strokeWidth='2' fill='none' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M86 30 a26 26 0 0 1 -18 26 m18 -26 l5 7 m-5 -7 l-8 3' stroke='var(--color-swift-brown)' strokeWidth='2' fill='none' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    ),
  },
  {
    title: 'Compliance',
    desc: 'Form D, ADV, annual updates. Deadlines watched, filings drafted.',
    icon: (
      <svg viewBox='0 0 120 80' className='h-20 w-auto' role='img' aria-label='Compliance'>
        <rect x='20' y='15' width='80' height='50' rx='6' fill='var(--color-card)' stroke='var(--color-border)' strokeWidth='1.5' />
        <rect x='35' y='30' width='50' height='4' rx='2' fill='var(--color-muted-foreground)' opacity='0.4' />
        <rect x='35' y='40' width='40' height='4' rx='2' fill='var(--color-muted-foreground)' opacity='0.4' />
        <circle cx='75' cy='58' r='10' fill='var(--color-swift-forest)' />
        <path d='M70 58 l3.5 3.5 L81 53' stroke='var(--color-card)' strokeWidth='2' fill='none' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    ),
  },
  {
    title: 'Diligence',
    desc: 'Data room review and diligence memos, with citations.',
    icon: (
      <svg viewBox='0 0 120 80' className='h-20 w-auto' role='img' aria-label='Diligence'>
        <circle cx='60' cy='40' r='24' fill='var(--color-card)' stroke='var(--color-border)' strokeWidth='1.5' />
        <path d='M50 40 l7 7 14 -14' stroke='var(--color-swift-forest)' strokeWidth='3' fill='none' strokeLinecap='round' strokeLinejoin='round' />
        <circle cx='60' cy='40' r='32' fill='none' stroke='var(--color-swift-forest)' strokeWidth='1.5' strokeDasharray='4 3' opacity='0.5' />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section className='border-t border-border bg-muted/30 py-24 md:py-32'>
      <div className='container mx-auto px-6'>
        <div className='mx-auto mb-16 max-w-3xl text-center'>
          <h2 className='mb-6 font-serif text-4xl font-light leading-[1.1] tracking-tight text-foreground md:text-6xl'>
            Launch is <span className='italic'>day one</span>
          </h2>
          <p className='text-lg leading-relaxed text-muted-foreground'>
            SwiftLaw is the orchestration layer for investment management. It
            stays on your fund after the close, from first draft to final filing,
            every year you run.
          </p>
        </div>
        <div className='mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5'>
          {features.map((f) => (
            <div
              key={f.title}
              className='rounded-2xl border border-border bg-card p-6 text-center'
            >
              <div className='mb-4 flex justify-center'>{f.icon}</div>
              <h3 className='mb-2 font-serif text-xl text-foreground'>
                {f.title}
              </h3>
              <p className='text-sm leading-relaxed text-muted-foreground'>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
