import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { TrustBar } from '@/components/landing/TrustBar';
import { Features } from '@/components/landing/Features';
import { ProductShowcase } from '@/components/landing/ProductShowcase';
import { LongHorizon } from '@/components/landing/LongHorizon';
import { Testimonials } from '@/components/landing/Testimonials';
import { Mission } from '@/components/landing/Mission';
import { Waitlist } from '@/components/landing/Waitlist';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <main className='min-h-screen bg-white text-[var(--sl-ink)]'>
      <Navbar />
      <Hero />
      <TrustBar />
      <Features />
      <ProductShowcase />
      <LongHorizon />
      <Testimonials />
      <Mission />
      <Waitlist />
      <Footer />
    </main>
  );
}
