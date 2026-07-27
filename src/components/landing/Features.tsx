const comparisons = [
  ['Static templates', 'Living fund documents from your term sheet'],
  ['Weeks of back and forth', 'Drafts in days, final close in weeks'],
  ['Scattered filings and deadlines', 'Form D, ADV, annual updates tracked'],
  ['Lawyers doing every cut', 'Attorneys review, Conductor drafts'],
  ['One-time formation', 'Ongoing administration for the fund life'],
];

export function Features() {
  return (
    <section className='border-t border-border bg-background py-24 md:py-32'>
      <div className='container mx-auto px-6'>
        <div className='mx-auto max-w-4xl text-center'>
          <p className='mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground'>
            What makes us different
          </p>
          <h2 className='font-sans text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl'>
            Tailored service, expertise, and software
          </h2>
        </div>

        <div className='mx-auto mt-16 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card px-6 md:px-12'>
          {comparisons.map(([left, right]) => (
            <div
              key={left}
              className='grid grid-cols-1 gap-2 py-6 md:grid-cols-2 md:gap-8'
            >
              <p className='text-sm text-muted-foreground line-through'>{left}</p>
              <p className='text-sm font-medium text-foreground'>{right}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
