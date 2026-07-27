import Link from 'next/link';

export function Pricing() {
  return (
    <section className='border-t border-border bg-background py-24'>
      <div className='container mx-auto px-6 text-center'>
        <p className='mb-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground'>
          Pricing
        </p>
        <h2 className='mb-4 font-serif text-4xl font-light leading-[1.1] tracking-tight text-foreground md:text-6xl'>
          $10,000 a year.
        </h2>
        <p className='mb-9 text-lg leading-relaxed text-muted-foreground'>
          Less than a week of your lawyer&apos;s time.
        </p>
        <Link
          href='/pricing'
          className='group inline-flex items-center gap-2 text-base font-medium text-foreground'
        >
          See pricing
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
        </Link>
      </div>
    </section>
  );
}
