export function Hero() {
  return (
    <section className='relative overflow-hidden bg-swift-dark pb-20 pt-36 md:pt-44'>
      <div className='pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay bg-noise' />
      <div className='container relative mx-auto px-6'>
        <div className='mx-auto max-w-4xl text-center'>
          <a
            href='https://law.stanford.edu/2026/02/12/swiftlaw-february-12-2026-codex-group-meeting/'
            target='_blank'
            rel='noopener noreferrer'
            className='mb-10 inline-flex animate-fade-in items-center gap-2 rounded-full border border-swift-cream/20 bg-swift-cream/5 px-3.5 py-1.5 text-xs text-swift-cream backdrop-blur-sm transition-colors hover:bg-swift-cream/10'
          >
            <span className='text-[10px] font-medium uppercase tracking-wider text-swift-gold'>
              News
            </span>
            <span className='opacity-90'>Featured at Stanford Law</span>
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
              className='h-3 w-3'
            >
              <path d='M7 7h10v10' />
              <path d='M7 17 17 7' />
            </svg>
          </a>

          <h1 className='animate-slide-up mb-8 font-serif text-[3rem] font-light leading-[1.02] tracking-tight text-swift-cream sm:text-6xl md:text-7xl lg:text-8xl'>
            Your{' '}
            <span className='whitespace-nowrap text-swift-salmon'>
              hedge fund
              <span
                aria-hidden='true'
                className='animate-caret-blink ml-1 inline-block h-[0.85em] w-[3px] rounded-full align-[-0.08em] md:w-1'
                style={{ backgroundColor: 'var(--color-swift-salmon)' }}
              />
              <span className='text-swift-cream'>,</span>
            </span>{' '}
            <br />
            <span className='italic'>formed in hours.</span>
          </h1>

          <p
            className='mx-auto mb-10 max-w-2xl animate-fade-in text-lg leading-relaxed text-swift-cream/70 md:text-xl'
            style={{ animationDelay: '0.15s' }}
          >
            SwiftLaw drafts the whole fund suite. LPA, PPM, subscription docs.
            Your attorney reviews every line. Weeks of legal work, done by
            dinner.
          </p>

          <form
            className='mx-auto mb-8 flex max-w-xl animate-fade-in flex-col items-center justify-center gap-3 sm:flex-row'
            style={{ animationDelay: '0.2s' }}
          >
            <input
              type='email'
              placeholder='gp@yourfund.com'
              aria-label='Work email'
              className='w-full rounded-full border border-swift-cream/20 bg-swift-cream/5 px-6 py-4 text-base text-swift-cream placeholder:text-swift-cream/40 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-swift-gold/60 sm:w-80'
            />
            <button
              type='submit'
              className='group inline-flex w-full items-center justify-center gap-2 rounded-full bg-swift-cream px-8 py-4 text-base font-medium text-swift-green transition-colors hover:bg-swift-cream/90 sm:w-auto'
            >
              Get a demo
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
                className='ml-1 h-5 w-5 transition-transform group-hover:translate-x-1'
              >
                <path d='M5 12h14' />
                <path d='m12 5 7 7-7 7' />
              </svg>
            </button>
          </form>

          <div
            className='flex animate-fade-in flex-col items-center justify-center gap-3 sm:flex-row'
            style={{ animationDelay: '0.25s' }}
          >
            <span className='text-sm font-medium text-swift-cream/60'>
              DLA Piper
            </span>
            <p className='text-sm text-swift-cream/60'>
              Reviewed by DLA Piper&apos;s Private Funds Group · 80% less legal
              spend on a live $10M fund.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
