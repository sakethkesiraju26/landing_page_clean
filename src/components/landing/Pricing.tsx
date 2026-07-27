import Link from 'next/link';

export function Pricing() {
  return (
    <section className='border-t border-border bg-offwhite py-24'>
      <div className='container mx-auto px-6 text-center'>
        <p className='mb-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground'>
          Pricing
        </p>
        <h2 className='mb-4 font-sans text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-6xl'>
          $10,000 a year.
        </h2>
        <p className='mb-9 text-lg leading-relaxed text-muted-foreground'>
          Less than a week of your lawyer&apos;s time.
        </p>
        <Link
          href='/pricing'
          className='inline-flex h-12 items-center justify-center rounded-full bg-blue px-8 text-base font-medium text-light transition-colors hover:bg-blue/90'
        >
          See pricing
        </Link>
      </div>
    </section>
  );
}
