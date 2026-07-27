import { SearchIcon, DocumentIcon, ClockIcon, LayoutIcon } from './icons';

const features = [
  {
    icon: SearchIcon,
    title: 'Research & synthesis',
    description:
      'Ask across case law, ILPA guidelines, term sheets, and your own precedents. Conductor synthesizes answers with citations.',
  },
  {
    icon: DocumentIcon,
    title: 'Document orchestration',
    description:
      'Generate LPA, PPM, subscription docs, and side letters with tracked changes. Redline, review, and ship in one place.',
  },
  {
    icon: ClockIcon,
    title: 'Long-horizon execution',
    description:
      'Assign multi-day due diligence, compliance, and onboarding tasks that run unattended and report back when complete.',
  },
  {
    icon: LayoutIcon,
    title: 'Unified workspace',
    description:
      'Chat, documents, key terms, and entity structure live in a single pane — no more context switching.',
  },
];

export function Features() {
  return (
    <section id='product' className='bg-[var(--sl-paper-cool)] py-24'>
      <div className='mx-auto max-w-6xl px-6'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2
            className='text-3xl font-semibold tracking-tight text-[var(--sl-ink)] sm:text-4xl'
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            One platform. Every workflow.
          </h2>
          <p className='mt-4 text-[var(--sl-ink-secondary)]'>
            From first term sheet to final close, SwiftLaw keeps your investment
            operations moving.
          </p>
        </div>
        <div className='mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {features.map((feature) => (
            <div
              key={feature.title}
              className='rounded-2xl border border-[var(--sl-border)] bg-white p-6 transition-shadow hover:shadow-sm'
            >
              <div className='mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--sl-border)] bg-[var(--sl-paper)]'>
                <feature.icon className='h-5 w-5 text-[var(--sl-ink)]' />
              </div>
              <h3 className='text-lg font-semibold text-[var(--sl-ink)]'>
                {feature.title}
              </h3>
              <p className='mt-2 text-sm leading-relaxed text-[var(--sl-ink-secondary)]'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
