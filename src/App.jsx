import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import HowItWorks from './components/HowItWorks/HowItWorks';
import About from './components/About/About';
import Clients from './components/Clients/Clients';
import Benefits from './components/Benefits/Benefits';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <About />
        <Clients />
        <Benefits />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
