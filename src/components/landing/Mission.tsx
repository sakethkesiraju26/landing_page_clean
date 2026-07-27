export function Mission() {
  return (
    <section
      id='company'
      className='relative overflow-hidden bg-[var(--sl-ink)] py-24 text-white'
    >
      <div className='absolute inset-0 bg-grid opacity-10' />
      <div className='relative mx-auto max-w-4xl px-6 text-center'>
        <h2
          className='text-3xl font-semibold tracking-tight sm:text-4xl'
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Built for the long term
        </h2>
        <p className='mt-6 text-lg leading-relaxed text-white/80'>
          Sustainable investment operations start with reliable infrastructure.
          We build AI agents that attorneys, CFOs, and fund operators can
          trust — with citations, audit trails, and guardrails at every step.
        </p>
      </div>
    </section>
  );
}
