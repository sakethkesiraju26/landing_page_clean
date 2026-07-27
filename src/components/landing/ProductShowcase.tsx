export function ProductShowcase() {
  return (
    <section className='border-t border-border bg-muted/30 py-24 md:py-32'>
      <div className='container mx-auto px-6'>
        <div className='mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2'>
          <div>
            <p className='mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground'>
              Conductor
            </p>
            <h2 className='mb-6 font-serif text-4xl font-light leading-[1.1] tracking-tight text-foreground md:text-5xl'>
              Autonomous agents, <span className='italic'>on your fund 24/7</span>
            </h2>
            <p className='mb-8 text-lg leading-relaxed text-muted-foreground'>
              Conductor is the orchestration layer. It plans the formation, then
              works the checklist. Entity filings, LPA, PPM, subscription docs.
              Drafted in parallel, flagged when off-market, queued for review
              while you sleep. Your attorney signs. That is the one step we
              refuse to automate.
            </p>
            <a
              href='/ai-fund-formation'
              className='group inline-flex items-center gap-2 text-base font-medium text-foreground'
            >
              Learn how it works
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
          <div className='rounded-2xl border border-border bg-secondary/40 p-8 md:p-10'>
            <svg
              viewBox='0 0 440 260'
              className='h-auto w-full'
              role='img'
              aria-label='An autonomous agent working through a fund formation plan'
            >
              <rect
                x='20'
                y='98'
                width='56'
                height='56'
                rx='14'
                fill='var(--color-card)'
                stroke='var(--color-swift-forest)'
                strokeWidth='1.5'
              />
              <path
                d='M48 112 l3.8 9.4 9.4 3.8 -9.4 3.8 -3.8 9.4 -3.8 -9.4 -9.4 -3.8 9.4 -3.8 z'
                fill='var(--color-swift-forest)'
              />
              <rect
                x='20'
                y='164'
                width='56'
                height='19'
                rx='9.5'
                fill='var(--color-swift-forest)'
              />
              <text
                x='48'
                y='177.5'
                textAnchor='middle'
                fontSize='10.5'
                fontWeight='600'
                fill='var(--color-card)'
                style={{ fontFamily: 'inherit', letterSpacing: '0.06em' }}
              >
                24/7
              </text>
              <circle
                cx='48'
                cy='72'
                r='10'
                fill='none'
                stroke='var(--color-border)'
                strokeWidth='1.5'
              />
              <path
                d='M48 66.5 v5.5 l4 2.6'
                stroke='var(--color-foreground)'
                strokeWidth='1.4'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M76 126 h36'
                stroke='var(--color-border)'
                strokeWidth='1.5'
                fill='none'
              />
              <rect
                x='112'
                y='22'
                width='182'
                height='216'
                rx='11'
                fill='var(--color-card)'
                stroke='var(--color-border)'
                strokeWidth='1.5'
              />
              <text
                x='126'
                y='45'
                fontSize='8.5'
                fontWeight='600'
                fill='var(--color-muted-foreground)'
                style={{ fontFamily: 'inherit', letterSpacing: '0.18em' }}
              >
                FORMATION PLAN
              </text>
              <line
                x1='126'
                y1='54'
                x2='280'
                y2='54'
                stroke='var(--color-border)'
                strokeWidth='1.25'
              />
              <rect
                x='119'
                y='120'
                width='168'
                height='28'
                rx='7'
                fill='var(--color-swift-brown)'
                opacity='0.1'
              />
              {[
                { y: 70, label: 'Form Delaware LP', done: true },
                { y: 104, label: 'Draft LPA', done: true },
                { y: 138, label: 'Draft PPM', active: true },
                { y: 172, label: 'Subscription docs', done: false },
                { y: 206, label: 'File Form D', done: false },
              ].map((step) => (
                <g key={step.label} transform={`translate(133 ${step.y})`}>
                  {step.done ? (
                    <>
                      <circle r='7' fill='var(--color-swift-forest)' />
                      <path
                        d='M-3 0 l2.2 2.4 L3.5 -2.6'
                        stroke='var(--color-card)'
                        strokeWidth='1.6'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </>
                  ) : step.active ? (
                    <>
                      <circle
                        r='7'
                        fill='none'
                        stroke='var(--color-swift-brown)'
                        strokeWidth='1.6'
                        strokeDasharray='3.5 2.5'
                        strokeLinecap='round'
                      />
                      <circle r='2.4' fill='var(--color-swift-brown)' />
                    </>
                  ) : (
                    <circle
                      r='7'
                      fill='none'
                      stroke='var(--color-border)'
                      strokeWidth='1.6'
                    />
                  )}
                  <text
                    x='18'
                    y='3.5'
                    fontSize='10'
                    fontWeight={step.active ? '600' : '400'}
                    fill={step.active ? 'var(--color-foreground)' : step.done ? 'var(--color-foreground)' : 'var(--color-muted-foreground)'}
                    style={{ fontFamily: 'inherit' }}
                  >
                    {step.label}
                  </text>
                </g>
              ))}
              <path
                d='M294 104 C 306 100, 306 88, 316 84'
                stroke='var(--color-border)'
                strokeWidth='1.5'
                fill='none'
              />
              <path
                d='M294 134 C 306 140, 306 168, 316 174'
                stroke='var(--color-border)'
                strokeWidth='1.5'
                fill='none'
              />
              <g transform='translate(316 52)'>
                <rect
                  width='104'
                  height='64'
                  rx='9'
                  fill='var(--color-card)'
                  stroke='var(--color-swift-forest)'
                  strokeWidth='1.5'
                />
                <rect
                  x='12'
                  y='12'
                  width='20'
                  height='26'
                  rx='3.5'
                  fill='none'
                  stroke='var(--color-swift-forest)'
                  strokeWidth='1.5'
                />
                <rect
                  x='16.5'
                  y='18'
                  width='11'
                  height='2.2'
                  rx='1.1'
                  fill='var(--color-muted-foreground)'
                  opacity='0.3'
                />
                <rect
                  x='16.5'
                  y='23'
                  width='8'
                  height='2.2'
                  rx='1.1'
                  fill='var(--color-muted-foreground)'
                  opacity='0.3'
                />
                <rect
                  x='16.5'
                  y='28'
                  width='10'
                  height='2.2'
                  rx='1.1'
                  fill='var(--color-muted-foreground)'
                  opacity='0.3'
                />
                <text
                  x='40'
                  y='24'
                  fontSize='9.5'
                  fontWeight='600'
                  fill='var(--color-foreground)'
                  style={{ fontFamily: 'inherit' }}
                >
                  LPA.docx
                </text>
                <g transform='translate(40 34)'>
                  <circle cx='5' cy='5' r='5' fill='var(--color-swift-forest)' />
                  <path
                    d='M2.8 5 l1.6 1.7 L7.4 3.2'
                    stroke='var(--color-card)'
                    strokeWidth='1.3'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <text
                    x='14'
                    y='8.5'
                    fontSize='8'
                    fill='var(--color-muted-foreground)'
                    style={{ fontFamily: 'inherit' }}
                  >
                    Reviewed
                  </text>
                </g>
              </g>
              <g transform='translate(316 142)'>
                <rect
                  width='104'
                  height='64'
                  rx='9'
                  fill='var(--color-card)'
                  stroke='var(--color-border)'
                  strokeWidth='1.5'
                />
                <rect
                  x='12'
                  y='12'
                  width='20'
                  height='26'
                  rx='3.5'
                  fill='none'
                  stroke='var(--color-swift-brown)'
                  strokeWidth='1.5'
                />
                <rect
                  x='16.5'
                  y='18'
                  width='11'
                  height='2.2'
                  rx='1.1'
                  fill='var(--color-muted-foreground)'
                  opacity='0.3'
                />
                <rect
                  x='16.5'
                  y='23'
                  width='8'
                  height='2.2'
                  rx='1.1'
                  fill='var(--color-muted-foreground)'
                  opacity='0.3'
                />
                <rect
                  x='16.5'
                  y='28'
                  width='10'
                  height='2.2'
                  rx='1.1'
                  fill='var(--color-muted-foreground)'
                  opacity='0.3'
                />
                <text
                  x='40'
                  y='24'
                  fontSize='9.5'
                  fontWeight='600'
                  fill='var(--color-foreground)'
                  style={{ fontFamily: 'inherit' }}
                >
                  PPM.docx
                </text>
                <g>
                  <rect x='40' y='38' width='52' height='4' rx='2' fill='var(--color-border)' />
                  <rect x='40' y='38' width='33' height='4' rx='2' fill='var(--color-swift-brown)' />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
