import Link from 'next/link';

const guides = [
  {
    href: '/how-to-form-a-venture-fund',
    title: 'How to form a venture fund',
    desc: 'Entity choice to first close, step by step.',
  },
  {
    href: '/ai-fund-formation',
    title: 'AI fund formation',
    desc: 'What the platform actually does on a live fund.',
  },
  {
    href: '/glossary',
    title: 'Fund formation glossary',
    desc: 'Every term in an LPA, in plain English.',
  },
  {
    href: '/blog',
    title: 'All guides',
    desc: 'Deep dives on funds, docs, and legal AI.',
  },
];

export function Homework() {
  return (
    <section className='border-t border-border bg-muted/30 py-24'>
      <div className='container mx-auto px-6'>
        <h2 className='mb-12 text-center font-serif text-3xl font-light leading-[1.1] tracking-tight text-foreground md:text-5xl'>
          Do your homework
        </h2>
        <div className='mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {guides.map((g) => (
            <Link
              key={g.title}
              href={g.href}
              className='group block rounded-2xl border border-border bg-card p-7 transition-colors hover:border-foreground/40'
            >
              <h3 className='mb-2 font-serif text-lg text-foreground'>
                {g.title}
              </h3>
              <p className='mb-5 text-sm leading-relaxed text-muted-foreground'>
                {g.desc}
              </p>
              <span className='inline-flex items-center gap-2 text-sm font-medium text-foreground'>
                Read more
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='h-4 w-4 transition-transform group-hover:translate-x-1'
                >
                  <path d='M5 12h14' />
                  <path d='m12 5 7 7-7 7' />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
