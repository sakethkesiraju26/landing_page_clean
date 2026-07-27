'use client';

import { useState } from 'react';

const tabs = [
  {
    label: 'Launch',
    title: 'Fund-in-a-Box',
    body: 'Our flagship all-in-one launch and ongoing operations solution, covering entity formation and fund documents, ongoing administration, and compliance.',
    links: ['Hedge Fund', 'Venture Fund', 'SPV', 'Friends & Family Fund'],
    bullets: ['Entity formation', 'LPA & PPM drafts', 'Subscription docs', 'Closing checklist'],
  },
  {
    label: 'Admin',
    title: 'Ongoing administration',
    body: 'LP onboarding, capital calls, distributions, and record keeping. One unified team and platform.',
    links: ['Investor portal', 'Capital call workflow', 'KYC / AML tracking'],
    bullets: ['Capital calls', 'Distributions', 'KYC tracking', 'Auditor ready reports'],
  },
  {
    label: 'Software',
    title: 'Conductor AI',
    body: 'Autonomous agents that research, draft, and manage documents with tracked changes in native Word.',
    links: ['Ask Conductor', 'Document redlining', 'Deadline tracking'],
    bullets: ['DOCX redlining', 'Market precedent checks', 'Deadline alerts', 'Term-sheet to draft'],
  },
  {
    label: 'Invest',
    title: 'Investor experience',
    body: 'Digital subscriptions, signatures, and reporting. Fewer PDFs, faster closes.',
    links: ['LP onboarding', 'E-signatures', 'Quarterly reports'],
    bullets: ['Digital subscriptions', 'E-signatures', 'Quarterly updates', 'Secure data room'],
  },
];

export function ProductShowcase() {
  const [active, setActive] = useState(0);
  const content = tabs[active];

  return (
    <section className='bg-offwhite py-24 md:py-32'>
      <div className='container mx-auto px-6'>
        <div className='rounded-2xl bg-grey p-8 md:p-14'>
          <h2 className='mb-12 max-w-2xl font-sans text-3xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl'>
            Purpose-built infrastructure to amplify success and scale
          </h2>

          <div className='grid grid-cols-1 gap-10 lg:grid-cols-5'>
            <div className='lg:col-span-1'>
              <div className='flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-3'>
                {tabs.map((t, i) => (
                  <button
                    key={t.label}
                    onClick={() => setActive(i)}
                    className={[
                      'w-full min-w-[100px] rounded-full border px-5 py-2.5 text-sm font-medium transition-colors',
                      active === i
                        ? 'border-blue bg-blue text-light'
                        : 'border-blue text-blue hover:bg-blue hover:text-light',
                    ].join(' ')}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div className='lg:col-span-4 lg:border-l lg:border-border lg:pl-12'>
              <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
                <div>
                  <h3 className='mb-5 font-sans text-3xl font-semibold text-foreground'>
                    {content.title}
                  </h3>
                  <p className='mb-8 leading-relaxed text-muted-foreground'>
                    {content.body}
                  </p>
                  <h4 className='mb-4 text-xs font-bold uppercase tracking-[0.15em] text-blue'>
                    Includes
                  </h4>
                  <div className='grid gap-3'>
                    {content.links.map((link) => (
                      <a
                        key={link}
                        href='/ai-fund-formation'
                        className='group inline-flex items-center gap-2 text-base font-medium text-blue underline underline-offset-4'
                      >
                        {link}
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
                      </a>
                    ))}
                  </div>
                </div>

                <div className='rounded-2xl border border-border bg-card p-8 shadow-sm'>
                  <h4 className='mb-6 text-xs font-bold uppercase tracking-[0.15em] text-blue'>
                    {content.label} Features
                  </h4>
                  <div className='space-y-4'>
                    {content.bullets.map((b) => (
                      <div key={b} className='flex items-start gap-3'>
                        <div className='mt-1 h-2 w-2 rounded-full bg-blue' />
                        <p className='text-sm text-foreground'>{b}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
