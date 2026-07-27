const steps = [
  {
    title: 'Plan',
    desc: 'Conductor breaks a complex outcome into discrete, verifiable steps.',
  },
  {
    title: 'Execute',
    desc: 'Agents run across documents, data, and tools in parallel.',
  },
  {
    title: 'Review',
    desc: 'Honesty blocks surface missing data instead of hallucinating.',
  },
  {
    title: 'Ship',
    desc: 'Final artifacts land in your workspace, ready for signature or filing.',
  },
];

export function LongHorizon() {
  return (
    <section className='border-y border-[var(--sl-border)] bg-[var(--sl-paper-cool)] py-24'>
      <div className='mx-auto max-w-6xl px-6'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
          <div>
            <h2
              className='text-3xl font-semibold tracking-tight text-[var(--sl-ink)] sm:text-4xl'
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Agents that run for days, not seconds
            </h2>
            <p className='mt-4 text-lg text-[var(--sl-ink-secondary)]'>
              Some investment workflows — LP onboarding, compliance checks,
              cross-fund analysis — cannot finish in a single chat turn.
              SwiftLaw long-horizon runtime keeps them alive, retries on
              blockers, and reports back when done.
            </p>
            <div className='mt-8 flex items-center gap-4'>
              <div className='text-4xl font-semibold tracking-tight text-[var(--sl-ink)]'>
                4x
              </div>
              <p className='text-sm text-[var(--sl-ink-tertiary)]'>
                faster close times for fund formation workflows
              </p>
            </div>
          </div>
          <div className='mt-12 lg:mt-0'>
            <div className='relative'>
              <div className='absolute left-4 top-0 h-full w-px bg-[var(--sl-border)]' />
              <div className='space-y-8'>
                {steps.map((step, i) => (
                  <div
                    key={step.title}
                    className='relative flex items-start gap-6 pl-10'
                  >
                    <div className='absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--sl-border)] bg-white text-xs font-semibold text-[var(--sl-ink)]'>
                      {i + 1}
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-[var(--sl-ink)]'>
                        {step.title}
                      </h3>
                      <p className='mt-1 text-sm text-[var(--sl-ink-secondary)]'>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
