const firms = [
  'Northline',
  'Cresthaven',
  'Altimeter',
  'Beacon',
  'Veridia',
  'Tonne',
];

export function TrustBar() {
  return (
    <section className='border-b border-[var(--sl-border)] bg-white py-10'>
      <div className='mx-auto max-w-6xl px-6'>
        <p className='mb-6 text-center text-xs font-semibold uppercase tracking-widest text-[var(--sl-ink-muted)]'>
          Built for the firms that move markets
        </p>
        <div className='flex flex-wrap items-center justify-center gap-8 md:gap-12'>
          {firms.map((firm) => (
            <span
              key={firm}
              className='text-lg font-semibold tracking-tight text-[var(--sl-ink-muted)] opacity-60'
            >
              {firm}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
