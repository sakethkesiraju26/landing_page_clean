'use client';

import { useState } from 'react';

export function Waitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id='waitlist' className='bg-[var(--sl-paper-cool)] py-24'>
      <div className='mx-auto max-w-2xl px-6 text-center'>
        <h2
          className='text-3xl font-semibold tracking-tight text-[var(--sl-ink)] sm:text-4xl'
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Bring your workflows into focus
        </h2>
        <p className='mt-4 text-[var(--sl-ink-secondary)]'>
          Join the waitlist. We will reach out to onboard a limited number of
          investment managers this quarter.
        </p>
        {submitted ? (
          <div className='mt-8 rounded-2xl border border-[var(--sl-border)] bg-white p-6 text-[var(--sl-ink)]'>
            Thanks — we will be in touch soon.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className='mt-8 flex flex-col gap-3 sm:flex-row'
          >
            <input
              type='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              className='flex-1 rounded-full border border-[var(--sl-border)] bg-white px-5 py-3 text-sm text-[var(--sl-ink)] outline-none focus:border-[var(--sl-border-strong)]'
            />
            <button
              type='submit'
              className='rounded-full bg-[var(--sl-ink)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--sl-ink-secondary)]'
            >
              Request access
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
