import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Work from '@/components/sections/Work';
import Pricing from '@/components/sections/Pricing';
import Booking from '@/components/sections/Booking';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Перейти к содержимому</a>
      <Header />
      <main id="main-content">
        <About />
        <Hero />
        <Work />
        <Pricing />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
