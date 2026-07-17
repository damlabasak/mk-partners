import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Practices } from './components/Practices';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      {/* Premiumsticky header navigation */}
      <Navbar />

      {/* Main page content sections */}
      <main>
        <Hero />
        <About />
        <Practices />
        <Team />
        <Contact />
      </main>

      {/* Corporate detailed footer */}
      <Footer />
    </>
  );
}

export default App;
