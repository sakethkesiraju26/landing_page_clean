const quotes = [
  {
    quote: 'The SwiftLaw team has been great to work with. They are always on the ball so we can focus on fundraising and trading without distractions.',
    author: 'NY Emerging Manager',
    fund: 'Venture Fund',
  },
  {
    quote: 'I thought fund launch was going to take months to figure out. It was almost anticlimactic when SwiftLaw just did the whole thing in a few weeks.',
    author: 'NYC Emerging Manager',
    fund: 'Event-Driven Equities Fund',
  },
  {
    quote: "SwiftLaw's digital investor software is incredibly convenient for our investors. It's been way easier onboarding compared to our first fund.",
    author: 'CO Fund Manager',
    fund: 'Quant Long/Short Fund',
  },
];

export function Mission() {
  return (
    <section className='bg-navy py-24 md:py-32'>
      <div className='container mx-auto px-6'>
        <div className='mx-auto mb-16 max-w-3xl text-center'>
          <p className='mb-5 text-xs font-medium uppercase tracking-[0.2em] text-light/60'>
            Why managers choose us
          </p>
          <h2 className='font-sans text-4xl font-semibold leading-[1.1] tracking-tight text-light md:text-5xl'>
            From managers who have been there
          </h2>
        </div>
        <div className='mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3'>
          {quotes.map((q) => (
            <div
              key={q.author}
              className='rounded-2xl border border-light/10 bg-light/5 p-8 backdrop-blur-sm'
            >
              <p className='mb-8 text-lg leading-relaxed text-light/90'>
                &ldquo;{q.quote}&rdquo;
              </p>
              <div>
                <p className='font-medium text-light'>{q.author}</p>
                <p className='text-sm text-light/60'>{q.fund}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
