import Link from 'next/link';

export function Hero() {
  return (
    <section className='relative overflow-hidden bg-navy py-32 pt-44 md:pt-56 md:pb-40'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute -left-[20%] top-[10%] h-[40rem] w-[40rem] rounded-full bg-teal/20 blur-[140px]' />
        <div className='absolute right-[-10%] top-[5%] h-[45rem] w-[45rem] rounded-full bg-blue/20 blur-[150px]' />
        <div className='absolute bottom-[-15%] left-[20%] h-[35rem] w-[35rem] rounded-full bg-blue/25 blur-[130px]' />
      </div>

      <div className='container relative z-10 mx-auto px-6 text-center'>
        <h1 className='mx-auto max-w-4xl animate-slide-up font-sans text-5xl font-semibold leading-[1.1] tracking-tight text-light md:text-7xl'>
          AI orchestration for investment management
        </h1>
        <p className='animate-fade-in mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-light/70 md:text-xl' style={{ animationDelay: '0.15s' }}>
          Research, draft, and run fund operations with autonomous agents. Your
          attorneys and investors stay in the loop.
        </p>
        <div className='animate-fade-in mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row' style={{ animationDelay: '0.25s' }}>
          <Link
            href='/demo'
            className='inline-flex h-12 items-center justify-center rounded-full bg-blue px-8 text-base font-medium text-light transition-colors hover:bg-blue/90'
          >
            Get in touch
          </Link>
          <Link
            href='/ai-fund-formation'
            className='inline-flex h-12 items-center justify-center rounded-full border border-light/20 bg-transparent px-8 text-base font-medium text-light transition-colors hover:bg-light/10'
          >
            See how it works
          </Link>
        </div>
      </div>
    </section>
  );
}
