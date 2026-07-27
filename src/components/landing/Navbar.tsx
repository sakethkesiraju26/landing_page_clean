'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className='fixed top-0 z-50 w-full animate-fade-in bg-swift-dark/60 backdrop-blur-xl'>
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
            <span className='text-sm font-normal tracking-[0.3em] text-swift-cream/80 sm:text-base'>
              SWIFTLAW
            </span>
          </Link>

          <div className='hidden items-center gap-8 md:flex absolute left-1/2 -translate-x-1/2'>
            <Link
              href='/pricing'
              className='text-sm text-swift-cream/70 transition-colors hover:text-swift-cream'
            >
              Pricing
            </Link>
            <Link
              href='/docs'
              className='text-sm text-swift-cream/70 transition-colors hover:text-swift-cream'
            >
              API
            </Link>
            <Link
              href='https://app.vanta.com/tryswiftlaw.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm text-swift-cream/70 transition-colors hover:text-swift-cream'
            >
              Security
            </Link>
            <Link
              href='/blog'
              className='text-sm text-swift-cream/70 transition-colors hover:text-swift-cream'
            >
              Blog
            </Link>
            <Link
              href='/faq'
              className='text-sm text-swift-cream/70 transition-colors hover:text-swift-cream'
            >
              FAQ
            </Link>
          </div>

          <div className='hidden items-center gap-5 md:flex'>
            <Link
              href='/law-firms'
              className='inline-flex h-10 items-center justify-center rounded-full border border-swift-cream/60 bg-transparent px-5 text-sm font-medium text-swift-cream transition-colors hover:bg-swift-cream/10'
            >
              For Law Firms
            </Link>
            <Link
              href='https://tryswiftlaw.com/app/'
              className='inline-flex h-10 items-center justify-center rounded-full border border-swift-cream/60 bg-transparent px-5 text-sm font-medium text-swift-cream transition-colors hover:bg-swift-cream/10'
            >
              Sign in
            </Link>
            <Link
              href='/demo'
              className='inline-flex h-10 items-center justify-center rounded-full bg-swift-cream px-5 text-sm font-medium text-swift-green transition-colors hover:bg-swift-cream/90'
            >
              Book a Demo
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className='p-2 text-swift-cream/70 transition-colors hover:text-swift-cream md:hidden'
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
          <div className='mt-4 flex flex-col gap-3 border-t border-swift-cream/10 pt-4 md:hidden'>
            <Link href='/pricing' className='text-sm text-swift-cream/70 hover:text-swift-cream'>
              Pricing
            </Link>
            <Link href='/docs' className='text-sm text-swift-cream/70 hover:text-swift-cream'>
              API
            </Link>
            <Link href='/blog' className='text-sm text-swift-cream/70 hover:text-swift-cream'>
              Blog
            </Link>
            <Link href='/faq' className='text-sm text-swift-cream/70 hover:text-swift-cream'>
              FAQ
            </Link>
            <Link
              href='/demo'
              className='inline-flex h-10 items-center justify-center rounded-full bg-swift-cream px-5 text-sm font-medium text-swift-green'
            >
              Book a Demo
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
