import Link from 'next/link';
import { ConductorMock } from './ConductorMock';
import { ArrowRightIcon } from './icons';

export function Hero() {
  return (
    <section className='relative overflow-hidden border-b border-[var(--sl-border)]'>
      <div className='absolute inset-0 bg-grid opacity-50' />
      <div className='relative mx-auto max-w-6xl px-6 py-20 md:py-28 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12'>
        <div className='max-w-2xl'>
          <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--sl-border)] bg-[var(--sl-paper)] px-3 py-1 text-xs font-medium text-[var(--sl-ink-secondary)]'>
            <span className='relative flex h-2 w-2'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--highlight)] opacity-75' />
              <span className='relative inline-flex h-2 w-2 rounded-full bg-[var(--highlight)]' />
            </span>
            Devin for asset managers
          </div>
          <h1
            className='text-4xl font-semibold tracking-tight text-[var(--sl-ink)] sm:text-5xl md:text-6xl'
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            AI orchestration for investment management
          </h1>
          <p className='mt-6 text-lg leading-relaxed text-[var(--sl-ink-secondary)]'>
            SwiftLaw turns fund documents, market data, and LP workflows into
            autonomous, auditable outcomes. Your team operates like a firm ten
            times its size — without adding headcount.
          </p>
          <div className='mt-8 flex flex-wrap items-center gap-4'>
            <Link
              href='#waitlist'
              className='inline-flex items-center gap-2 rounded-full bg-[var(--sl-ink)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--sl-ink-secondary)]'
            >
              Request access
              <ArrowRightIcon className='h-4 w-4' />
            </Link>
            <Link
              href='#product'
              className='inline-flex items-center gap-2 rounded-full border border-[var(--sl-border-strong)] bg-white px-6 py-3 text-sm font-medium text-[var(--sl-ink)] transition-colors hover:bg-[var(--sl-paper)]'
            >
              Watch demo
            </Link>
          </div>
        </div>
        <div className='relative mt-16 lg:mt-0'>
          <ConductorMock className='mx-auto w-full max-w-lg animate-float' />
        </div>
      </div>
    </section>
  );
}
