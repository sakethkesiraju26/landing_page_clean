'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={[
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-light/10 bg-navy/90 backdrop-blur-xl'
          : 'border-b border-light/10 bg-transparent',
      ].join(' ')}
    >
      <div className='container mx-auto px-4 py-4 sm:px-6'>
        <div className='relative flex items-center justify-between'>
          <Link
            href='/'
            className='z-10 flex items-center gap-2 transition-opacity hover:opacity-80'
          >
            <Image
              src='/swiftlaw-logo.svg'
              alt='SwiftLaw'
              width={24}
              height={24}
              className='h-6 w-6 brightness-0 invert'
            />
            <span className='text-sm font-medium tracking-[0.2em] text-light sm:text-base'>
              SWIFTLAW
            </span>
          </Link>

          <div className='absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex'>
            <Link
              href='/pricing'
              className='text-sm text-light/70 transition-colors hover:text-light'
            >
              Pricing
            </Link>
            <Link
              href='/docs'
              className='text-sm text-light/70 transition-colors hover:text-light'
            >
              API
            </Link>
            <Link
              href='https://app.vanta.com/tryswiftlaw.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm text-light/70 transition-colors hover:text-light'
            >
              Security
            </Link>
            <Link
              href='/blog'
              className='text-sm text-light/70 transition-colors hover:text-light'
            >
              Blog
            </Link>
            <Link
              href='/faq'
              className='text-sm text-light/70 transition-colors hover:text-light'
            >
              FAQ
            </Link>
          </div>

          <div className='hidden items-center gap-5 md:flex'>
            <Link
              href='https://tryswiftlaw.com/app/'
              className='text-sm font-medium text-light transition-colors hover:text-light/70'
            >
              Sign in
            </Link>
            <Link
              href='/demo'
              className='inline-flex h-10 items-center justify-center rounded-full bg-blue px-5 text-sm font-medium text-light transition-colors hover:bg-blue/90'
            >
              Get in touch
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className='p-2 text-light/70 transition-colors hover:text-light md:hidden'
            aria-label='Toggle menu'
          >
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
              className='h-5 w-5'
            >
              <line x1='4' y1='6' x2='20' y2='6' />
              <line x1='4' y1='12' x2='20' y2='12' />
              <line x1='4' y1='18' x2='20' y2='18' />
            </svg>
          </button>
        </div>

        {open && (
          <div className='mt-4 flex flex-col gap-3 border-t border-light/10 pt-4 md:hidden'>
            <Link href='/pricing' className='text-sm text-light/70 hover:text-light'>
              Pricing
            </Link>
            <Link href='/docs' className='text-sm text-light/70 hover:text-light'>
              API
            </Link>
            <Link href='/blog' className='text-sm text-light/70 hover:text-light'>
              Blog
            </Link>
            <Link href='/faq' className='text-sm text-light/70 hover:text-light'>
              FAQ
            </Link>
            <Link
              href='/demo'
              className='inline-flex h-10 items-center justify-center rounded-full bg-blue px-5 text-sm font-medium text-light'
            >
              Get in touch
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
