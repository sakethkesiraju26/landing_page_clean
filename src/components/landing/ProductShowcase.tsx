import { ConductorMock } from './ConductorMock';
import { CheckIcon } from './icons';

const bullets = [
  'Autonomous tool selection and execution in Unified Mode',
  'Multi-doc decomposition across parallel worker threads',
  'Artifact-based document versions with tracked changes',
  'Passport memory across funds and investors',
];

export function ProductShowcase() {
  return (
    <section id='use-cases' className='bg-white py-24'>
      <div className='mx-auto max-w-6xl px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16'>
        <div className='order-2 mt-12 lg:order-1 lg:mt-0'>
          <ConductorMock className='mx-auto w-full max-w-lg' />
        </div>
        <div className='order-1 lg:order-2'>
          <h2
            className='text-3xl font-semibold tracking-tight text-[var(--sl-ink)] sm:text-4xl'
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Meet Conductor
          </h2>
          <p className='mt-4 text-lg text-[var(--sl-ink-secondary)]'>
            The agent system at the heart of SwiftLaw. Conductor plans, executes,
            and validates multi-step investment workflows — then surfaces
            everything in a workspace your team already understands.
          </p>
          <ul className='mt-8 space-y-4'>
            {bullets.map((b) => (
              <li
                key={b}
                className='flex items-start gap-3 text-[var(--sl-ink-secondary)]'
              >
                <span className='mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[var(--sl-border)] bg-[var(--sl-paper)]'>
                  <CheckIcon className='h-3 w-3 text-[var(--sl-ink)]' />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
