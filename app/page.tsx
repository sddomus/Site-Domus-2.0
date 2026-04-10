import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TechMarquee } from '@/components/TechMarquee';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Stats } from '@/components/Stats';
import { Portfolio } from '@/components/Portfolio';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-24 pb-20 pt-32">
        {/* Spacer para o intro overlay: empurra o hero para baixo exatamente 100vh */}
        <div style={{ height: 'calc(100vh - 144px)', minHeight: 0 }} aria-hidden="true" />
        <Hero />
        <TechMarquee />
        <Services />
        <About />
        <WhyChooseUs />
        <Stats />
        <Portfolio />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
