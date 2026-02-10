import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Technology from './components/Technology';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Add simple fade-in animations on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('transition-all', 'duration-1000', 'ease-out');
      // We start strictly at opacity 1 for the hero, others can fade
      if (section.id !== 'home') {
         // Optionally add fade logic here if desired
      }
    });
  }, []);

  return (
    <div className="font-sans text-navy-900 bg-white selection:bg-brand-red selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Technology />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;