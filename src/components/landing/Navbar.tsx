'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className='fixed top-0 z-50 w-full animate-fade-in border-b border-border bg-background/80 backdrop-blur-xl'>
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
              className='h-6 w-6'
            />
            <span className='text-sm font-normal tracking-[0.3em] text-foreground sm:text-base'>
              SWIFTLAW
            </span>
          </Link>

          <div className='absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex'>
            <Link
              href='/pricing'
              className='text-sm text-muted-foreground transition-colors hover:text-foreground'
            >
              Pricing
            </Link>
            <Link
              href='/docs'
              className='text-sm text-muted-foreground transition-colors hover:text-foreground'
            >
              API
            </Link>
            <Link
              href='https://app.vanta.com/tryswiftlaw.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm text-muted-foreground transition-colors hover:text-foreground'
            >
              Security
            </Link>
            <Link
              href='/blog'
              className='text-sm text-muted-foreground transition-colors hover:text-foreground'
            >
              Blog
            </Link>
            <Link
              href='/faq'
              className='text-sm text-muted-foreground transition-colors hover:text-foreground'
            >
              FAQ
            </Link>
          </div>

          <div className='hidden items-center gap-4 md:flex'>
            <Link
              href='/law-firms'
              className='text-sm font-medium text-foreground transition-colors hover:text-muted-foreground'
            >
              For Law Firms
            </Link>
            <Link
              href='https://tryswiftlaw.com/app/'
              className='text-sm font-medium text-foreground transition-colors hover:text-muted-foreground'
            >
              Sign in
            </Link>
            <Link
              href='/demo'
              className='inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80'
            >
              Book a Demo
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className='p-2 text-foreground transition-colors hover:text-muted-foreground md:hidden'
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
          <div className='mt-4 flex flex-col gap-3 border-t border-border pt-4 md:hidden'>
            <Link href='/pricing' className='text-sm text-muted-foreground hover:text-foreground'>
              Pricing
            </Link>
            <Link href='/docs' className='text-sm text-muted-foreground hover:text-foreground'>
              API
            </Link>
            <Link href='/blog' className='text-sm text-muted-foreground hover:text-foreground'>
              Blog
            </Link>
            <Link href='/faq' className='text-sm text-muted-foreground hover:text-foreground'>
              FAQ
            </Link>
            <Link
              href='/demo'
              className='inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground'
            >
              Book a Demo
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
