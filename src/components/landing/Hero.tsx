'use client';

import { useState } from 'react';

const chips = [
  'Draft an LPA from my term sheet',
  'Analyze Form D filing deadlines',
  'Compare side letter MFN clauses',
  'Build a fund closing checklist',
  'Review LP subscription packet',
  'Summarize last quarter performance',
];

export function Hero() {
  const [value, setValue] = useState('');

  return (
    <section className='relative flex min-h-screen flex-col items-center justify-center bg-background px-6 pt-24 pb-20'>
      <div className='mx-auto max-w-3xl text-center'>
        <h1 className='animate-slide-up mb-4 font-sans text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl'>
          AI orchestration for investment management
        </h1>
        <p className='animate-fade-in mx-auto mb-12 max-w-xl text-lg text-muted-foreground'>
          Research, draft, and run fund operations with autonomous agents. Your
          attorneys and investors stay in the loop.
        </p>

        <div className='animate-fade-in mx-auto w-full max-w-2xl' style={{ animationDelay: '0.15s' }}>
          <div className='rounded-3xl border border-border bg-card p-2 shadow-lg transition-shadow hover:shadow-xl'>
            <div className='flex items-center gap-2 px-3 py-2'>
              <input
                type='text'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder='What can I help with?'
                aria-label='Ask SwiftLaw'
                className='flex-1 bg-transparent text-lg text-foreground outline-none placeholder:text-muted-foreground'
              />
              <button
                type='button'
                className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/80 disabled:opacity-40'
                disabled={!value.trim()}
              >
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
                  <path d='M5 12h14' />
                  <path d='m12 5 7 7-7 7' />
                </svg>
              </button>
            </div>
          </div>

          <div className='mt-6 flex flex-wrap justify-center gap-2'>
            {chips.map((chip) => (
              <button
                key={chip}
                type='button'
                onClick={() => setValue(chip)}
                className='rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground'
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        <div
          className='animate-fade-in mt-12 flex flex-col items-center justify-center gap-3 text-sm text-muted-foreground sm:flex-row'
          style={{ animationDelay: '0.25s' }}
        >
          <span className='font-medium text-foreground'>DLA Piper</span>
          <span>·</span>
          <span>Reviewed by DLA Piper Private Funds Group</span>
        </div>
      </div>
    </section>
  );
}
