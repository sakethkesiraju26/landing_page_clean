const testimonials = [
  {
    quote:
      'SwiftLaw lets our small team run due diligence and document workflows that would normally take a whole floor of associates.',
    author: 'Caryn Seidman-Becker',
    role: 'Chief Investment Officer, Northline',
  },
  {
    quote:
      'We went from term sheet to executed LPA in under a week. The agent handled redlines, partner comments, and signature packets without us losing the thread.',
    author: 'Alex McGillis',
    role: 'VP, Fund Operations',
  },
  {
    quote:
      'It is not a chatbot. It is an operating system for our back office — one that remembers every fund, every investor, every term.',
    author: 'Sarah Wallis',
    role: 'Chief Operating Officer, Altimeter',
  },
];

export function Testimonials() {
  return (
    <section className='bg-white py-24'>
      <div className='mx-auto max-w-6xl px-6'>
        <h2
          className='text-center text-3xl font-semibold tracking-tight text-[var(--sl-ink)] sm:text-4xl'
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          The results speak for themselves
        </h2>
        <div className='mt-16 grid gap-6 md:grid-cols-3'>
          {testimonials.map((t) => (
            <div
              key={t.author}
              className='rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-paper-cool)] p-6'
            >
              <p className='leading-relaxed text-[var(--sl-ink-secondary)]'>
                “{t.quote}”
              </p>
              <div className='mt-6'>
                <div className='font-semibold text-[var(--sl-ink)]'>
                  {t.author}
                </div>
                <div className='text-sm text-[var(--sl-ink-muted)]'>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
