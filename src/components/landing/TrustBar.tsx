const logos = [
  'DLA Piper',
  'SF1',
  'AND Law',
  'Benemerito Law',
  'Clear Focus Law',
  'Drossman Law',
  'Lowenthal Law',
  'Mark Donovan',
  'TBL Law',
];

function LogoList() {
  return (
    <>
      {logos.map((logo) => (
        <span
          key={logo}
          className='flex h-9 items-center whitespace-nowrap text-lg font-serif text-foreground/60 opacity-60'
        >
          {logo}
        </span>
      ))}
    </>
  );
}

export function TrustBar() {
  return (
    <section className='overflow-hidden border-t border-border bg-background py-14'>
      <div className='container mx-auto px-6'>
        <p className='mb-10 text-center text-sm text-muted-foreground'>
          Fund managers and their counsel run on SwiftLaw
        </p>
      </div>
      <div className='relative'>
        <div className='pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent' />
        <div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent' />
        <div className='flex w-max animate-scroll gap-16 pr-16'>
          <LogoList />
          <LogoList />
        </div>
      </div>
    </section>
  );
}
