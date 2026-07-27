const partners = ['DLA Piper', 'AND Law', 'Benemerito Law', 'Clear Focus Law', 'Drossman Law', 'Lowenthal Law', 'Mark Donovan', 'TBL Law'];

function LogoList() {
  return (
    <>
      {partners.map((p) => (
        <span
          key={p}
          className='flex h-9 items-center whitespace-nowrap text-base font-medium text-foreground/60'
        >
          {p}
        </span>
      ))}
    </>
  );
}

export function TrustBar() {
  return (
    <section className='overflow-hidden bg-offwhite py-16 md:py-24'>
      <div className='container mx-auto px-6'>
        <div className='mx-auto max-w-5xl text-center'>
          <h3 className='mb-12 font-sans text-3xl font-medium leading-snug text-foreground md:text-4xl'>
            The platform enabling the next generation of investment managers
          </h3>

          <div className='grid grid-cols-1 divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0'>
            <div className='py-8 md:py-10'>
              <p className='mb-2 font-sans text-4xl font-semibold text-blue md:text-5xl'>80%</p>
              <p className='text-base text-muted-foreground'>Drafting cost reduction</p>
            </div>
            <div className='py-8 md:py-10'>
              <p className='mb-2 font-sans text-4xl font-semibold text-blue md:text-5xl'>15+</p>
              <p className='text-base text-muted-foreground'>Hours saved per matter</p>
            </div>
            <div className='py-8 md:py-10'>
              <p className='mb-2 font-sans text-4xl font-semibold text-blue md:text-5xl'>24/7</p>
              <p className='text-base text-muted-foreground'>Autonomous agent uptime</p>
            </div>
          </div>
        </div>

        <div className='mt-16 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-10'>
          <p className='text-sm font-medium uppercase tracking-wider text-muted-foreground'>
            Backed by
          </p>
          <div className='flex flex-wrap justify-center gap-6 md:gap-10'>
            <span className='text-lg font-medium text-foreground/60'>DLA Piper</span>
            <span className='text-lg font-medium text-foreground/60'>SF1</span>
            <span className='text-lg font-medium text-foreground/60'>Clear Focus Law</span>
          </div>
        </div>

        <div className='mt-12 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-10'>
          <p className='text-sm font-medium uppercase tracking-wider text-muted-foreground'>
            Member of
          </p>
          <div className='flex flex-wrap justify-center gap-6 md:gap-10'>
            <span className='text-lg font-medium text-foreground/60'>NVCA</span>
            <span className='text-lg font-medium text-foreground/60'>ILPA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
