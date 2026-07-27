import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { TrustBar } from '@/components/landing/TrustBar';
import { Features } from '@/components/landing/Features';
import { ProductShowcase } from '@/components/landing/ProductShowcase';
import { LongHorizon } from '@/components/landing/LongHorizon';
import { Testimonials } from '@/components/landing/Testimonials';
import { Mission } from '@/components/landing/Mission';
import { Pricing } from '@/components/landing/Pricing';
import { Homework } from '@/components/landing/Homework';
import { Waitlist } from '@/components/landing/Waitlist';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <main className='min-h-screen bg-background text-foreground'>
      <Navbar />
      <Hero />
      <TrustBar />
      <Features />
      <ProductShowcase />
      <LongHorizon />
      <Testimonials />
      <Mission />
      <Pricing />
      <Homework />
      <Waitlist />
      <Footer />
    </main>
  );
}
