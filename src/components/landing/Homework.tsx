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
    <section className='border-t border-border bg-background py-24'>
      <div className='container mx-auto px-6'>
        <h2 className='mb-12 text-center font-sans text-3xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl'>
          Resources
        </h2>
        <div className='mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {guides.map((g) => (
            <Link
              key={g.title}
              href={g.href}
              className='group block rounded-2xl border border-border bg-card p-7 transition-colors hover:border-blue/60'
            >
              <h3 className='mb-2 font-sans text-lg font-semibold text-foreground'>
                {g.title}
              </h3>
              <p className='mb-5 text-sm leading-relaxed text-muted-foreground'>
                {g.desc}
              </p>
              <span className='inline-flex items-center gap-2 text-sm font-medium text-blue'>
                Read more
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
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
