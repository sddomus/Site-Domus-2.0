import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TechMarquee } from '@/components/TechMarquee';
import { Services } from '@/components/Services';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Stats } from '@/components/Stats';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-24 pb-20 pt-32">
        <Hero />
        <TechMarquee />
        <Services />
        <WhyChooseUs />
        <Stats />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
