import Image from 'next/image';

const prompts = [
  'What are market key-man provisions right now?',
  'Analyze last quarter performance across Fund I and Fund II',
  'Upload a term sheet and extract the key economics',
  'Start a new fund and draft the LPA',
];

export function ConductorMock({ className = '' }: { className?: string }) {
  return (
    <div
      className={[
        'relative overflow-hidden rounded-2xl border border-[var(--sl-border)] bg-white shadow-2xl shadow-black/5',
        className,
      ]
        .join(' ')
        .trim()}
    >
      <div className='flex items-center justify-between border-b border-[var(--sl-border-light)] px-4 py-3'>
        <div className='flex items-center gap-1.5'>
          <div className='h-2.5 w-2.5 rounded-full bg-red-400' />
          <div className='h-2.5 w-2.5 rounded-full bg-yellow-400' />
          <div className='h-2.5 w-2.5 rounded-full bg-green-500' />
        </div>
        <div className='hidden items-center gap-6 text-xs font-medium text-[var(--sl-ink-muted)] sm:flex'>
          <span className='text-[var(--sl-ink)]'>Conductor</span>
          <span>Documents</span>
          <span>Portfolio</span>
          <span>Integrations</span>
        </div>
        <div className='flex h-7 w-7 items-center justify-center rounded-full border border-[var(--sl-border)] bg-[var(--sl-paper)] text-[10px] font-semibold text-[var(--sl-ink)]'>
          S
        </div>
      </div>
      <div className='flex'>
        <div className='hidden w-44 flex-col gap-4 border-r border-[var(--sl-border-light)] bg-[var(--sl-paper-cool)] p-4 sm:flex'>
          <div className='text-xs font-semibold text-[var(--sl-ink)]'>
            New Chat
          </div>
          <div className='space-y-2'>
            <div className='text-[10px] font-semibold uppercase tracking-wide text-[var(--sl-ink-muted)]'>
              Skills
            </div>
            <div className='rounded-md border border-[var(--sl-border)] bg-white px-2 py-1.5 text-xs text-[var(--sl-ink-secondary)]'>
              Research
            </div>
            <div className='rounded-md px-2 py-1.5 text-xs text-[var(--sl-ink-muted)]'>
              Drafting
            </div>
            <div className='rounded-md px-2 py-1.5 text-xs text-[var(--sl-ink-muted)]'>
              Analysis
            </div>
          </div>
          <div className='space-y-2'>
            <div className='text-[10px] font-semibold uppercase tracking-wide text-[var(--sl-ink-muted)]'>
              Recent
            </div>
            <div className='text-xs text-[var(--sl-ink-muted)]'>
              Fund IV Q3 review
            </div>
            <div className='text-xs text-[var(--sl-ink-muted)]'>
              LPA amendment
            </div>
          </div>
        </div>
        <div className='flex-1 p-4 sm:p-6'>
          <div className='flex items-center justify-center py-6 sm:py-8'>
            <div className='text-center'>
              <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--sl-border)] bg-[var(--sl-paper)] sm:h-14 sm:w-14'>
                <Image
                  src='/swiftlaw-logo.svg'
                  alt=''
                  width={32}
                  height={26}
                  unoptimized
                  className='object-contain'
                />
              </div>
              <h3 className='text-base font-semibold text-[var(--sl-ink)] sm:text-lg'>
                What can I help with?
              </h3>
              <p className='mt-2 max-w-xs text-xs leading-relaxed text-[var(--sl-ink-tertiary)] sm:text-sm'>
                Ask about fund formation, LP terms, or compliance — or analyze a
                portfolio, upload a term sheet, or tell the AI what to draft.
              </p>
            </div>
          </div>
          <div className='grid gap-2 sm:grid-cols-2'>
            {prompts.map((prompt) => (
              <div
                key={prompt}
                className='cursor-default rounded-lg border border-[var(--sl-border)] bg-[var(--sl-paper-cool)] p-3 text-xs font-medium text-[var(--sl-ink-secondary)] transition-colors hover:border-[var(--sl-border-strong)] hover:bg-white'
              >
                {prompt}
              </div>
            ))}
          </div>
          <div className='mt-4 flex items-center gap-2 rounded-full border border-[var(--sl-border)] bg-white px-4 py-2.5'>
            <span className='flex-1 text-xs text-[var(--sl-ink-muted)]'>
              Ask anything, or tell the AI what to edit or draft...
            </span>
            <div className='h-5 w-5 rounded-full bg-[var(--sl-ink)]' />
          </div>
        </div>
      </div>
    </div>
  );
}
