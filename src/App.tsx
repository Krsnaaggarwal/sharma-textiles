import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="font-body text-warm-900 antialiased">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
