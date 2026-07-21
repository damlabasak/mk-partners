import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Practices } from '@/components/Practices';
import { Team } from '@/components/Team';
import { Career } from '@/components/Career';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Practices />
        <Team />
        <Contact />
        <Career />
      </main>
      <Footer />
    </>
  );
}
