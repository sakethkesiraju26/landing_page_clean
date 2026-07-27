import Link from 'next/link';

export function Waitlist() {
  return (
    <section className='border-t border-border bg-foreground py-24 text-background md:py-32'>
      <div className='container mx-auto px-6'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='animate-slide-up mb-8 font-serif text-4xl font-light leading-[1.1] text-background md:text-6xl'>
            Ready to launch <span className='italic'>your fund?</span>
          </h2>
          <p className='mx-auto mb-12 max-w-2xl text-lg leading-relaxed opacity-70'>
            Bring a term sheet. Leave with a fund. Your attorney reviews every
            line, you file on schedule, and SwiftLaw runs the paperwork every
            year after.
          </p>
          <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <Link
              href='/demo'
              className='group inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-6 text-base font-medium text-foreground transition-colors hover:bg-background/90'
            >
              Book a Demo
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
                className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1'
              >
                <path d='M5 12h14' />
                <path d='m12 5 7 7-7 7' />
              </svg>
            </Link>
            <p className='text-sm opacity-70'>
              Or email{' '}
              <a
                href='mailto:saketh@tryswiftlaw.com'
                className='underline underline-offset-4'
              >
                saketh@tryswiftlaw.com
              </a>
            </p>
          </div>
          <p className='mt-12 text-sm opacity-60'>
            SOC 2 Type I complete · Type II in progress · Zero-access by design.
            Your documents never sit on our servers.
          </p>
        </div>
      </div>
    </section>
  );
}
