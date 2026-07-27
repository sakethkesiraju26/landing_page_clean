import Link from 'next/link';

export function Waitlist() {
  return (
    <section className='bg-navy py-24 md:py-32'>
      <div className='container mx-auto px-6 text-center'>
        <h2 className='mx-auto max-w-3xl font-sans text-4xl font-semibold leading-[1.1] tracking-tight text-light md:text-6xl'>
          Looking for a modern launch or back-office solution?
        </h2>
        <p className='mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-light/70'>
          Bring a term sheet. Leave with a fund. Your attorney reviews every line,
          you file on schedule, and SwiftLaw runs the paperwork every year after.
        </p>
        <div className='mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row'>
          <Link
            href='/demo'
            className='inline-flex h-12 items-center justify-center rounded-full bg-blue px-8 text-base font-medium text-light transition-colors hover:bg-blue/90'
          >
            Get in touch
          </Link>
          <Link
            href='/ai-fund-formation'
            className='inline-flex h-12 items-center justify-center rounded-full border border-light/20 px-8 text-base font-medium text-light transition-colors hover:bg-light/10'
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
